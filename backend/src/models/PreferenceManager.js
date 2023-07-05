const AbstractManager = require("./AbstractManager");

class PreferenceManager extends AbstractManager {
  constructor() {
    super({ table: "preference" });
  }

  insert(preference) {
    return this.database.query(
      `insert into ${this.table} (color, arome, other, user_id) values (?,?,?,?)`,
      [preference.color, preference.arome, preference.other, preference.user_id]
    );
  }

  update(preference) {
    return this.database.query(
      `update ${this.table} set color = ?, arome = ?, other = ? where id = ?`,
      [preference.color, preference.arome, preference.other, preference.id]
    );
  }
}

module.exports = PreferenceManager;
