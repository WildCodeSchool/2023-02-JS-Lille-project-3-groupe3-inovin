const AbstractManager = require("./AbstractManager");

class AccountManager extends AbstractManager {
  constructor() {
    super({ table: "account" });
  }

  insert(account) {
    return this.database.query(
      `insert into ${this.table} (email, pwd) values (?,?)`,
      [account.email, account.hashedPassword]
    );
  }

  findByEmail(email) {
    return this.database.query(`SELECT id FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  findByid(account_id) {
    return this.database.query(`select email from ${this.table} where id=?`, [
      account_id,
    ]);
  }
}

module.exports = AccountManager;
