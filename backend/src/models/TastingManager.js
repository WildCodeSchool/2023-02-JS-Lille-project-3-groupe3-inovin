const AbstractManager = require("./AbstractManager");

class TastingManager extends AbstractManager {
  constructor() {
    super({ table: "tasting" });
  }

  insert(tasting) {
    return this.database.query(`insert into ${this.table} (robe, color_intensity, arome, arome_intensity, flavor, rating) values (?,?,?,?,?,?)`, 
    [tasting.robe, tasting.color_intensity, tasting.arome, tasting.arome_intensity, tasting.flavor, tasting.rating]);
  }

  update(tasting) {
    return this.database.query(
      `update ${this.table} set robe = ?, color_intensity = ?, arome = ?, arome_intensity = ?, flavor = ?, rating = ?, where id = ?`,
      [tasting.robe, tasting.color_intensity, tasting.arome, tasting.arome_intensity, tasting.flavor, tasting.rating]);
  }
}

module.exports = WinebottleManager;
