const AbstractManager = require("./AbstractManager");

class TastingManager extends AbstractManager {
  constructor() {
    super({ table: "tasting" });
  }

  insert(tasting) {
    return this.database.query(
      `insert into ${this.table} (robe, color_intensity, arome, arome_intensity, flavor, rating, user_id, user_account_ID, wineBottle_id) values (?,?,?,?,?,?,?,?,?)`,
      [
        tasting.robe,
        tasting.color_intensity,
        tasting.arome,
        tasting.arome_intensity,
        tasting.flavor,
        tasting.rating,
        tasting.user_id,
        tasting.user_account_ID,
        tasting.wineBottle_id,
      ]
    );
  }

  update(tasting) {
    return this.database.query(
      `update ${this.table} set robe = ?, color_intensity = ?, arome = ?, arome_intensity = ?, flavor = ?, rating = ? where id = ?`,
      [
        tasting.robe,
        tasting.color_intensity,
        tasting.arome,
        tasting.arome_intensity,
        tasting.flavor,
        tasting.rating,
        tasting.id,
      ]
    );
  }
}

module.exports = TastingManager;
