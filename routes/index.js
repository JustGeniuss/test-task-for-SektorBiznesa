const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = new Router();

router.post("/user/register", userController.registration);
router.post("/user/login", userController.login);
router.put("/profile", userController.changeUser);
router.get("/profile", authMiddleware, userController.getOneUser);
router.get("/profiles", authMiddleware, userController.GetAllUsersAndPaginate);

module.exports = router;
