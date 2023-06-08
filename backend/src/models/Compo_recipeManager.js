const AbstractManager = require("./AbstractManager");

class Compo_recipeManager extends AbstractManager {
  constructor() {
    super({ table: "compo_recipe" });
  }

  insert(compo_recipe) {
    return this.database.query(`insert into ${this.table} (percentage) values (?)`, 
    [compo_recipe.percentage]);
  }

  update(compo_recipe) {
    return this.database.query(
      `update ${this.table} set percentage = ?, where id = ?`,
      [compo_recipe.percentage, compo_recipe.id]);
  }
}

module.exports = Compo_recipeManager;
