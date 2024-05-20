import {
  dbAddJurisdiction,
  dbGetJurisdiction,
  dbUpdateJurisdiction,
  dbRemoveJurisdiction,
} from "../../../dbOperation/dbOperation.js";

export const addNewJurisdiction = (req, res) => {
  const { infoInput } = req.body;
  if (infoInput) {
    dbAddJurisdiction(infoInput)
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
export const getJurisdictionList = (req, res) => {
  dbGetJurisdiction()
    .then((result) => {
      res.status(200).json(result.recordset);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json(error);
    });
};
export const updateJurisdiction = (req, res) => {
  const { id } = req.params;
  const { jurisdictionName } = req.body;
  if (id && jurisdictionName) {
    dbUpdateJurisdiction(id, jurisdictionName)
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
export const removeJurisdiction = (req, res) => {
  const { id } = req.params;
  if (id) {
    dbRemoveJurisdiction(id)
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
//Jurisdiction
