const models = require("../models");
const browse = (req, res) => {
  models.comporecipe
    .findAll()
    .then(([rows]) => {
      const promises = rows.map((row) =>
        models.wineBottle.find(row.wineBottle_id).then(([wineBottle]) => {
          return {
            id: row.id,
            percentage: row.percentage,
            user_id: row.user_id,
            user_account_ID: row.user_account_ID,
            wineBottle_id: row.wineBottle_id,
            bottle_name: wineBottle.bottle_name,
          };
        })
      );
      Promise.all(promises)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.comporecipe
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const compoRecipe = req.body;

  // TODO validations (length, format...)

  compoRecipe.id = parseInt(req.params.id, 10);

  models.compoRecipe
    .update(compoRecipe)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const compoRecipe = req.body;

  models.compoRecipe
    .insert(compoRecipe)
    .then(([result]) => {
      res.location(`/compoRecipe/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.compoRecipe
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateById = (req, res) => {
  const compoRecipe = req.body;
  const wineBottleId = req.query.wineBottle_id;
  const userId = req.query.user_id;
  const userAccountId = req.query.user_account_ID;
  models.compoRecipe
    .updateById(compoRecipe, wineBottleId, userId, userAccountId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  updateById,
};
