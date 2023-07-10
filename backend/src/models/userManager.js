const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, birthdate, address, ordering, feedbackRating, feedbackComment, user_type, account_id) values (?,?,?,?,?,?,?,?,?)`,

      [
        user.firstname,
        user.lastname,
        user.birthdate,
        user.address,
        user.ordering,
        user.feedbackRating,
        user.feedbackComment,
        user.user_type,
        user.account_id,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set address = ?, ordering = ?, feedbackRating = ?, feedbackComment = ? where id = ?`,
      [
        user.address,
        user.ordering,
        user.feedbackRating,
        user.feedbackComment,
        user.id,
      ]
    );
  }

  // modify(user) {
  //   return this.database.query(
  //     `UPDATE ${this.table} SET address = ?, ordering = ? WHERE id = ?`,
  //     [user.address, user.ordering, user.account_id]
  //   );
  // }

  findAccountId(account_id) {
    return this.database.query(
      `select * from  ${this.table} where account_id = ?`,
      [account_id]
    );
  }

  get(account_id) {
    // this request will be displayed on the resume page
    return this.database.query(
      `
      SELECT cr.id, cr.percentage, cr.user_account_ID, u.firstname, u.lastname, u.address, u.birthdate, wb.bottle_name, r.recipe_name
      FROM ${this.table} cr
      JOIN user u ON cr.user_id = u.id
      JOIN winebottle wb ON cr.wineBottle_id = wb.id
      JOIN relation_recipe rr ON cr.id = rr.compoRecipe_id
      JOIN recipe r ON rr.recipe_id = r.id
      `,

      [account_id]
    );
  }
}

module.exports = UserManager;
