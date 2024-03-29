const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const winebottleControllers = require("./controllers/winebottleControllers");
const tastingControllers = require("./controllers/tastingControllers");
const compoRecipeControllers = require("./controllers/compoRecipeControllers");
const recipeControllers = require("./controllers/recipeControllers");
const preferenceControllers = require("./controllers/preferenceControllers");
const accountControllers = require("./controllers/accountControllers");
const { hashPassword } = require("./auth");
/* router.get("/user", userControllers.browse); */ // commenté pour pouvoir faire les requêtes de FormInfoPerso
router.get("/user", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);

/* router.get("/account", accountControllers.browse); */ // commenté pour pouvoir faire les requêtes de FormInfoPerso
router.get("/account", accountControllers.read);
router.get("/account/:id", accountControllers.findById);
router.post("/account", hashPassword, accountControllers.add);
router.delete("/account/:id", accountControllers.destroy);

router.get("/winebottle", winebottleControllers.getOneBottle);
router.get("/winebottles", winebottleControllers.browse);
router.get("/winebottle/:id", winebottleControllers.read);
router.put("/winebottle/:id", winebottleControllers.edit);
router.post("/winebottle", winebottleControllers.add);
router.delete("/winebottle/:id", winebottleControllers.destroy);

router.get("/tasting", tastingControllers.browse);
router.get("/tasting/:id", tastingControllers.read);
// router.put("/tasting/:id", tastingControllers.edit);
router.put("/tasting", tastingControllers.updateById);
router.post("/tasting", tastingControllers.add);
router.delete("/tasting/:id", tastingControllers.destroy);

router.get("/compo_recipe/:id", compoRecipeControllers.browse);
router.put("/compo_recipe/", compoRecipeControllers.updateById);
router.get("/compo_recipe/:id", compoRecipeControllers.read);
router.put("/compo_recipe/:id", compoRecipeControllers.edit);
router.post("/compo_recipe", compoRecipeControllers.add);
router.delete("/compo_recipe/:id", compoRecipeControllers.destroy);

// router.get("/recipe", recipeControllers.browse);
router.get("/recipe/", recipeControllers.read);
router.put("/recipe/:id", recipeControllers.edit);
router.post("/recipe", recipeControllers.add);
router.delete("/recipe/:id", recipeControllers.destroy);

router.get("/preference", preferenceControllers.browse);
router.get("/preference/:id", preferenceControllers.read);
router.put("/preference/:id", preferenceControllers.edit);
router.post("/preference", preferenceControllers.add);
router.delete("/preference/:id", preferenceControllers.destroy);

module.exports = router;
