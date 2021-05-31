const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.post("/", usersController.create);

router.post("/login", usersController.logIn);

router.post("/logout", usersController.logOut);

router.post("/drinks", usersController.createDrink);

router.get("/session", usersController.getAuth);

router.get("/:id", usersController.findById);

module.exports = router;
