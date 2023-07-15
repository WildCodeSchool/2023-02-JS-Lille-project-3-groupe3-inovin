const AbstractManager = require("./AbstractManager");

class compoRecipeManager extends AbstractManager {
  constructor() {
    super({ table: "compoRecipe" });
  }

  insert(compoRecipe) {
    return this.database.query(
      `insert into ${this.table} (percentage, user_id, user_account_ID, wineBottle_id) values (?,?,?,?)`,
      [
        compoRecipe.percentage,
        compoRecipe.user_id,
        compoRecipe.user_account_ID,
        compoRecipe.wineBottle_id,
      ]
    );
  }

  update(compoRecipe) {
    return this.database.query(
      `update ${this.table} set percentage = ? where id = ?`,
      [compoRecipe.percentage, compoRecipe.id]
    );
  }

  // get(compoRecipe) {
  //   // this rrequest will be displayed on the resume page
  //   return this.database.query(
  //     `
  //     SELECT cr.id, cr.percentage, u.firstname, u.lastname, u.address, u.birthdate, wb.bottle_name, r.recipe_name
  //     FROM ${this.table} cr
  //     JOIN user u ON cr.user_id = u.id
  //     JOIN winebottle wb ON cr.wineBottle_id = wb.id
  //     JOIN relation_recipe rr ON cr.id = rr.compoRecipe_id
  //     JOIN recipe r ON rr.recipe_id = r.id
  //     `,

  //     [compoRecipe.id, compoRecipe.percentage]
  //   );
  // }
}

module.exports = compoRecipeManager;
