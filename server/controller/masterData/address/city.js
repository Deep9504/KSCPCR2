import {
    dbAddCity,
    dbGetCity,
    dbUpdateCityName,
    dbRemoveCity
  } from "../../../dbOperation/dbOperation.js";

export const addNewCity = (req, res) => {
  console.log(req.body);
  const { cityName, selectedDistrict } = req.body;
  if (cityName && selectedDistrict) {
    dbAddCity(selectedDistrict, cityName)
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
export const getCityList = (req, res) => {
    dbGetCity()
    .then((result) => {
      res.status(200).json(result.recordset);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json(error);
    });
};
export const updateCity = (req, res) => {
    const { id } = req.params;
    const { cityName } = req.body;
    if (id && cityName) {
      dbUpdateCityName(id, cityName)
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
export const removeCity = (req, res) => {
    const { id } = req.params;
    if (id) {
        dbRemoveCity(id)
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
