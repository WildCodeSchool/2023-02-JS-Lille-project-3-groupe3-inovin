const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const winebottleControllers = require("./controllers/winebottleControllers");
const tastingControllers = require("./controllers/tastingControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);

router.get("/winebottle", winebottleControllers.browse);
router.get("/winebottle/:id", winebottleControllers.read);
router.put("/winebottle/:id", winebottleControllers.edit);
router.post("/winebottle", winebottleControllers.add);
router.delete("/winebottle/:id", winebottleControllers.destroy);

router.get("/tasting", tastingControllers.browse);
router.get("/tasting/:id", tastingControllers.read);
router.put("/tasting/:id", tastingControllers.edit);
router.post("/tasting", tastingControllers.add);
router.delete("/tasting/:id", tastingControllers.destroy);



module.exports = router;
