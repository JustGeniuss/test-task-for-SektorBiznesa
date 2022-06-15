const ApiError = require("../exceptions/api-error");
const uuid = require("uuid");
const path = require("path");

class StaticService {
  generatePathToFileAndMoveThere(image, body) {
    if (image.mimetype != "image/jpeg" && image.mimetype != "image/png") {
      throw ApiError.BadRequest(`Расширение файла должно быть .jpeg или .png`);
    }
    if (image.size > process.env.MAX_IMAGE_SIZE) {
      throw ApiError.BadRequest(
        `Размер файла ${image.size} превышает допустимый предел в 10 Мб`
      );
    }
    body.photo = uuid.v4() + "." + image.mimetype.split("/")[1];
    image.mv(path.resolve(__dirname, "..", "static", body.photo));
  }
}

module.exports = new StaticService();
