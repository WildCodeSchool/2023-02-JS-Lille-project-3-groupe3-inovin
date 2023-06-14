const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(`insert into ${this.table} (firstname, lastname, birthday, email, password, address, order, inscription) values (?,?,?,?,?,?,?,?)`, 
    [user.firstname, user.lastname, user.birthday, user.email, user.password, user.address, user.order, user.inscription]);
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, birthday = ?, email = ?, password = ?, address = ?, order = ?, inscription = ?, where id = ?`,
      [user.firstname, user.lastname, user.birthday, user.email, user.password, user.address, user.order, user.inscription, user.id]);
  }
}

module.exports = UserManager;
