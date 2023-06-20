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
      `update ${this.table} set name = ?, region = ?, color = ?, cepage = ?, image = ?, where id = ?`,
      [
        wineBottle.name,
        wineBottle.region,
        wineBottle.color,
        wineBottle.cepage,
        wineBottle.image,
        wineBottle.id,
      ]
    );
  }
}

module.exports = WinebottleManager;
