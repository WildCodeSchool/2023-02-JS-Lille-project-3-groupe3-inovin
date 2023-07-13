const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  insert(recipe) {
    return this.database.query(
      `insert into ${this.table} (recipe_name) values (?)`,
      [recipe.recipe_name]
    );
  }

  update(recipe) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [recipe.name, recipe.id]
    );
  }
}

module.exports = RecipeManager;
