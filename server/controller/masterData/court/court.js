import {
  dbAddCourt,
  dbGetCourt,
  dbUpdateCourtName,
  dbRemoveCourt,
} from "../../../dbOperation/dbOperation.js";

export const addNewCourt = (req, res) => {
  const { infoInput } = req.body;
  if (infoInput) {
    dbAddCourt(infoInput)
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
export const getCourtList = (req, res) => {
  dbGetCourt()
    .then((result) => {
      res.status(200).json(result.recordset);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json(error);
    });
};
export const updateCourt = (req, res) => {
  const { id } = req.params;
  const { courtName } = req.body;
  if (id && courtName) {
    dbUpdateCourtName(id, courtName)
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
export const removeCourt = (req, res) => {
  const { id } = req.params;
  if (id) {
    dbRemoveCourt(id)
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
