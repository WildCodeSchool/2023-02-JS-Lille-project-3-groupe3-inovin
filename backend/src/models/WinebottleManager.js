const AbstractManager = require("./AbstractManager");

class WinebottleManager extends AbstractManager {
  constructor() {
    super({ table: "wineBottle" });
  }

  insert(wineBottle) {
    return this.database.query(
      `insert into ${this.table} (bottle_name, region, color, year, cepage) values (?,?,?,?,?)`,
      [
        wineBottle.bottle_name,
        wineBottle.region,
        wineBottle.color,
        wineBottle.year,
        wineBottle.cepage,
      ]
    );
  }

  update(wineBottle) {
    return this.database.query(
      `update ${this.table} set bottle_name = ?, region = ?, color = ?, year = ?, cepage = ? where id = ?`,
      [
        wineBottle.bottle_name,
        wineBottle.region,
        wineBottle.color,
        wineBottle.year,
        wineBottle.cepage,
        wineBottle.id,
      ]
    );
  }

  findByName(name) {
    return this.database.query(
      `select * from  ${this.table} where bottle_name = ?`,
      [name]
    );
  }
}

module.exports = WinebottleManager;
