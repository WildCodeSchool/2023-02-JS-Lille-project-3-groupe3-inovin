const AbstractManager = require("./AbstractManager");

class WinebottleManager extends AbstractManager {
  constructor() {
    super({ table: "wine_bottle" });
  }

  insert(wine_bottle) {
    return this.database.query(`insert into ${this.table} (name, region, color, cepage, image) values (?,?,?,?,?)`, 
    [wine_bottle.name, wine_bottle.region, wine_bottle.color, wine_bottle.cepage, wine_bottle.image]);
  }

  update(wine_bottle) {
    return this.database.query(
      `update ${this.table} set name = ?, region = ?, color = ?, cepage = ?, image = ?, where id = ?`,
      [wine_bottle.name, wine_bottle.region, wine_bottle.color, wine_bottle.cepage, wine_bottle.image, wine_bottle.id]);
  }
}

module.exports = WinebottleManager;
