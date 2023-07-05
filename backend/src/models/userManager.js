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

  findAccountId(account_id) {
    return this.database.query(
      `select * from  ${this.table} where account_id = ?`,
      [account_id]
    );
  }
}

module.exports = UserManager;
