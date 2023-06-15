const AbstractManager = require("./AbstractManager");

class compoRecipeManager extends AbstractManager {
  constructor() {
    super({ table: "compoRecipe" });
  }

  insert(compoRecipe) {
    return this.database.query(
      `insert into ${this.table} (percentage) values (?)`,
      [compoRecipe.percentage]
    );
  }

  update(compoRecipe) {
    return this.database.query(
      `update ${this.table} set percentage = ?, where id = ?`,
      [compoRecipe.percentage, compoRecipe.id]
    );
  }
}

module.exports = compoRecipeManager;
