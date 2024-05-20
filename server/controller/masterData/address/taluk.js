import {
  dbAddTaluk,
  dbGetTaluk,
  dbUpdateTalukName,
  dbRemoveTaluk,
} from "../../../dbOperation/dbOperation.js";
export const addNewTaluk = (req, res) => {
  const { talukName, selectedCity } = req.body;
  if (talukName && selectedCity) {
    dbAddTaluk(selectedCity, talukName)
      .then((info) => {
        res.status(200).json(info);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  } else {
    res.status(400).json("Please Provide Data");
  }
};
export const getTalukList = (req, res) => {
  dbGetTaluk()
    .then((result) => {
      res.status(200).json(result.recordset);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json(error);
    });
};
export const updateTaluk = (req, res) => {
    const { id } = req.params;
    const { talukName } = req.body;
    if (id && talukName) {
      dbUpdateTalukName(id, talukName)
        .then((info) => {
          res.status(200).json(info);
        })
        .catch((error) => {
          res.status(400).json(error);
        });
    } else {
      res.status(400).json("Please Provide Data");
    }
};
export const removeTaluk = (req, res) => {
    const { id } = req.params;
    if (id) {
        dbRemoveTaluk(id)
        .then((info) => {
          res.status(200).json(info);
        })
        .catch((error) => {
          res.status(400).json(error);
        });
    } else {
      res.status(400).json("Please Provide Params");
    }
};
