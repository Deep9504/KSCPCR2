import {
  dbAddState,
  dbGetState,
  dbUpdateStateName,
  dbRemoveState,
} from "../../../dbOperation/dbOperation.js";

export const addNewState = (req, res) => {
  const { stateName } = req.body;
  if (stateName) {
    dbAddState(stateName)
      .then(() => {
        res.status(200).json("New State Added!");
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(400).json("Please Provide Data");
  }
};
export const getStateList = (req, res) => {
  dbGetState()
    .then((result) => {
      res.status(200).json(result.recordset);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json(error);
    });
};
export const updateState = (req, res) => {
  const { id } = req.params;
  const { stateName } = req.body;
  if (id && stateName) {
    dbUpdateStateName(id, stateName)
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
export const removeState = (req, res) => {
  const { id } = req.params;
  if (id) {
    dbRemoveState(id)
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
