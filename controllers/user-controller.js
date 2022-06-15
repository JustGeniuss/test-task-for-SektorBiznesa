const userService = require("../services/user-service");
const staticService = require("../services/static-service");

const DEFAULT_PAGE = 1;
const DEFAULT_USERS_PER_PAGE = 10;

class UserController {
  async registration(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const user = await userService.registrate(name, email, password);
      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const token = await userService.login(email, password);
      res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async changeUser(req, res, next) {
    try {
      const { id } = req.query;
      const body = {};
      const { name, surname, email, sex } = req.body;
      if (req.body.name) {
        body.name = name;
      }
      if (req.body.surname) {
        body.surname = surname;
      }
      if (req.body.email) {
        body.email = email;
      }
      if (req.body.sex) {
        body.sex = sex;
      }
      if (req.files?.photo) {
        staticService.generatePathToFileAndMoveThere(req.files.photo, body);
      }

      const changedUser = await userService.changeUser(body, id);
      res.json(changedUser);
    } catch (e) {
      next(e);
    }
  }

  async getOneUser(req, res, next) {
    try {
      const { id } = req.query;
      const user = await userService.getOneUser(id);
      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async GetAllUsersAndPaginate(req, res, next) {
    try {
      const page = req.query.page || DEFAULT_PAGE;
      const offset = page * DEFAULT_USERS_PER_PAGE - DEFAULT_USERS_PER_PAGE;
      const users = await userService.getAllUsers(offset);
      res.json(users);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
