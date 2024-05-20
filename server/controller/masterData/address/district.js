import {
  dbAddDistrict,
  dbGetDistrict,
  dbUpdateDistrictName,
  dbRemoveDistrict
} from "../../../dbOperation/dbOperation.js";
export const addNewDistrict = (req, res) => {
  const { districtName, selectedState } = req.body;
  if (districtName && selectedState) {
    dbAddDistrict(selectedState, districtName)
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
export const getDistrictList = (req, res) => {
  dbGetDistrict()
    .then((result) => {
      res.status(200).json(result.recordset);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json(error);
    });
};
export const updateDistrict = (req, res) => {
  const { id } = req.params;
  const { districtName } = req.body;
  if (id && districtName) {
    dbUpdateDistrictName(id, districtName)
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
export const removeDistrict = (req, res) => {
    const { id } = req.params;
    if (id) {
        dbRemoveDistrict(id)
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
