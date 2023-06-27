const AbstractManager = require("./AbstractManager");

class AccountManager extends AbstractManager {
  constructor() {
    super({ table: "account" });
  }

  insert(account) {
    return this.database.query(
      `insert into ${this.table} (email, pwd) values (?,?)`,
      [account.email, account.pwd]
    );
  }

  findByEmail(email) {
    return this.database.query(`SELECT id FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }
}

module.exports = AccountManager;
