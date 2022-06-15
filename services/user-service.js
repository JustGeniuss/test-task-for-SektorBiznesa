const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const tokenService = require("./token-service");
const ApiError = require("../exceptions/api-error");
const validator = require("../validators/users.validator");

class UserService {
  async registrate(name, email, password) {
    const validBody = validator.BodyForRegistration({ name, email, password });
    if (validBody.validated) {
      const candidate = await User.findOne({ where: { email: email } });
      if (candidate) {
        throw ApiError.BadRequest(
          `Пользователь с почтовым адресом ${email} уже существует`
        );
      }
      const hashPassword = await bcrypt.hash(password, 3);
      const user = await User.create({
        name: name,
        email: email,
        password: hashPassword,
      });
      return user;
    }
    throw ApiError.BadRequest(validBody.error);
  }

  async login(email, password) {
    const validBody = validator.BodyForLogin({ email, password });
    if (validBody.validated) {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        throw ApiError.BadRequest(
          `Пользователя с таким почтовым адресом ${email} не существует`
        );
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        throw ApiError.BadRequest("Введен неверный пароль");
      }

      const token = tokenService.generateTokens({ email, password });
      return token;
    }
    throw ApiError.BadRequest(validBody.error);
  }

  async changeUser(body, id) {
    if (!id) {
      throw ApiError.BadRequest("Введите id изменяемого пользователя");
    }

    const validBody = validator.BodyForChange(body);
    if (validBody.validated) {
      await User.update(body, { where: { id: id } });
      return await this.getOneUser(id);
    }
    throw ApiError.BadRequest(validBody.error);
  }

  async getOneUser(id) {
    const validId = validator.Id(id);
    if (validId.validated) {
      const user = await User.findOne({ where: { id: id } });
      if (!user) {
        throw ApiError.BadRequest(`Пользователь с id:${id} не найдено!`);
      }
      return user;
    }
    throw ApiError.BadRequest("Введите id пользователя", validId.error);
  }

  async getAllUsers(offset, usersForPage = 10) {
    const validPagination = validator.Pagination({ offset, usersForPage });
    if (validPagination.validated) {
      const users = await User.findAll({
        limit: usersForPage,
        offset: offset,
        order: [["dateOfRegistration", "ASC"]],
      });
      return users;
    }
    throw ApiError.BadRequest(
      "Введите корректную страницу",
      validPagination.error
    );
  }
}

module.exports = new UserService();
