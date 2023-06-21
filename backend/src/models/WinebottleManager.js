const AbstractManager = require("./AbstractManager");

class WinebottleManager extends AbstractManager {
  constructor() {
    super({ table: "wineBottle" });
  }

  insert(wineBottle) {
    return this.database.query(
      `insert into ${this.table} (name, region, color, cepage, image) values (?,?,?,?,?)`,
      [
        wineBottle.name,
        wineBottle.region,
        wineBottle.color,
        wineBottle.cepage,
        wineBottle.image,
      ]
    );
  }

  update(wineBottle) {
    return this.database.query(
      `update ${this.table} set bottle_name = ?, region = ?, color = ?, year = ?, cepage = ?, image = ? where id = ?`,
      [
        wineBottle.bottle_name,
        wineBottle.region,
        wineBottle.color,
        wineBottle.year,
        wineBottle.cepage,
        wineBottle.image,
        wineBottle.id,
      ]
    );
  }
}

module.exports = WinebottleManager;
