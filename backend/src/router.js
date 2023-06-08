const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const winebottleControllers = require("./controllers/winebottleControllers");
const tastingControllers = require("./controllers/tastingControllers");
const compo_recipeControllers = require("./controllers/compo_recipeControllers");
const recipeControllers = require("./controllers/recipeControllers");
const preferenceControllers = require("./controllers/preferenceControllers");

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

router.get("/compo_recipe", compo_recipeControllers.browse);
router.get("/compo_recipe/:id", compo_recipeControllers.read);
router.put("/compo_recipe/:id", compo_recipeControllers.edit);
router.post("/compo_recipe", compo_recipeControllers.add);
router.delete("/compo_recipe/:id", compo_recipeControllers.destroy);

router.get("/recipe", recipeControllers.browse);
router.get("/recipe/:id", recipeControllers.read);
router.put("/recipe/:id", recipeControllers.edit);
router.post("/recipe", recipeControllers.add);
router.delete("/recipe/:id", recipeControllers.destroy);

router.get("/preference", preferenceControllers.browse);
router.get("/preference/:id", preferenceControllers.read);
router.put("/preference/:id", preferenceControllers.edit);
router.post("/preference", preferenceControllers.add);
router.delete("/preference/:id", preferenceControllers.destroy);


module.exports = router;
