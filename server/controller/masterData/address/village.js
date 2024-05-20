import {
  dbAddVillage,
  dbGetVillage,
  dbUpdateVillageName,
  dbRemoveVillage,
} from "../../../dbOperation/dbOperation.js";
export const addNewVillage = (req, res) => {
  const { villageName, selectedTaluk } = req.body;
  if (villageName && selectedTaluk) {
    dbAddVillage(selectedTaluk, villageName)
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
export const getVillageList = (req, res) => {
  dbGetVillage()
    .then((result) => {
      res.status(200).json(result.recordset);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json(error);
    });
};
export const updateVillage = (req, res) => {
  const { id } = req.params;
  const { villageName } = req.body;
  if (id && villageName) {
    dbUpdateVillageName(id, villageName)
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
export const removeVillage = (req, res) => {
  const { id } = req.params;
  if (id) {
    dbRemoveVillage(id)
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
