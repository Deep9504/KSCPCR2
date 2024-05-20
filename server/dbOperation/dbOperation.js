import { getDbConnection } from "../db/dbConnection.js";

const sqlRequest = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = await getDbConnection();
      const request = pool.request();
      resolve(request);
    } catch (error) {
      console.error("Function Location (sqlRequest)", error);
      reject(error);
    }
  });
};
//Jurisdiction
export const dbRemoveJurisdiction = (id) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `DELETE from JurisdictionList where JurisdictionId = ${id}`,
          (error) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve("Jurisdiction Name Deleted!");
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbRemoveJurisdiction)", error);
        reject("Server Error");
      });
  });
};
export const dbUpdateJurisdiction = (id, newName) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `update JurisdictionList set JurisdictionName = '${newName}' where JurisdictionId = ${id}`,
          (error) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve("Jurisdiction Name Updated!");
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbUpdateJurisdiction)", error);
        reject("Server Error");
      });
  });
};
export const dbGetJurisdiction = () => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `select JurisdictionId,JurisdictionName from JurisdictionList;`,
          (error, result) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve(result);
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbGetJurisdiction)", error);
        reject("Server Error");
      });
  });
};
export const dbAddJurisdiction = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = await getDbConnection();
      const request = pool.request();
      request.query(
        `INSERT INTO JurisdictionList (JurisdictionName) VALUES ('${name}');`,
        (error, result) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve("Data Added");
          }
        }
      );
    } catch (error) {
      console.error("Function Location (dbAddJurisdiction)", error);
      reject("Server Error");
    }
  });
};
//Court
export const dbRemoveCourt = (id) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `DELETE from CourtList where CourtId = ${id}`,
          (error) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve("Court Name Deleted!");
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbRemoveCourt)", error);
        reject("Server Error");
      });
  });
};
export const dbUpdateCourtName = (id, newName) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `update CourtList set CourtName = '${newName}' where CourtId = ${id}`,
          (error) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve("Court Name Updated!");
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbUpdateCourtName)", error);
        reject("Server Error");
      });
  });
};
export const dbGetCourt = () => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `select CourtId,CourtName from CourtList;`,
          (error, result) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve(result);
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbGetCourt)", error);
        reject("Server Error");
      });
  });
};
export const dbAddCourt = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = await getDbConnection();
      const request = pool.request();
      request.query(
        `INSERT INTO CourtList (CourtName) VALUES ('${name}');`,
        (error, result) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve("Data Added");
          }
        }
      );
    } catch (error) {
      console.error("Function Location (dbAddCourt)", error);
      reject("Server Error");
    }
  });
};
//Village
export const dbRemoveVillage = (id) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `DELETE from Village where VillageId = ${id}`,
          (error) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve("Village Name Deleted!");
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbRemoveVillage)", error);
        reject("Server Error");
      });
  });
};
export const dbUpdateVillageName = (id, newName) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `update Village set Village = '${newName}' where VillageId = ${id}`,
          (error) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve("Village Name Updated!");
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbUpdateVillageName)", error);
        reject("Server Error");
      });
  });
};
export const dbGetVillage = () => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `select VillageId,Village from Village;`,
          (error, result) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve(result);
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbGetVillage)", error);
        reject("Server Error");
      });
  });
};
export const dbAddVillage = (TalukId, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = await getDbConnection();
      const request = pool.request();
      request.query(
        `INSERT INTO Village (TalukId,Village) VALUES (${TalukId},'${name}');`,
        (error, result) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve("Data Added");
          }
        }
      );
    } catch (error) {
      console.error("Function Location (dbAddVillage)", error);
      reject("Server Error");
    }
  });
};
//Taluk
export const dbRemoveTaluk = (id) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(`DELETE from Taluk where TalukId = ${id}`, (error) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve("Taluk Name Deleted!");
          }
        });
      })
      .catch((error) => {
        console.error("Function Location (dbRemoveTaluk)", error);
        reject("Server Error");
      });
  });
};
export const dbUpdateTalukName = (id, newName) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `update Taluk set Taluk = '${newName}' where TalukId = ${id}`,
          (error) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve("Taluk Name Updated!");
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbUpdateTalukName)", error);
        reject("Server Error");
      });
  });
};
export const dbGetTaluk = () => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(`select TalukId,Taluk from Taluk;`, (error, result) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve(result);
          }
        });
      })
      .catch((error) => {
        console.error("Function Location (dbGetTaluk)", error);
        reject("Server Error");
      });
  });
};
export const dbAddTaluk = (CityId, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = await getDbConnection();
      const request = pool.request();
      request.query(
        `INSERT INTO Taluk (CityId,Taluk) VALUES (${CityId},'${name}');`,
        (error, result) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve("Data Added");
          }
        }
      );
    } catch (error) {
      console.error("Function Location (dbAddTaluk)", error);
      reject("Server Error");
    }
  });
};
//City
export const dbRemoveCity = (id) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(`DELETE from City where CityId = ${id}`, (error) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve("City Name Deleted!");
          }
        });
      })
      .catch((error) => {
        console.error("Function Location (dbRemoveCity)", error);
        reject("Server Error");
      });
  });
};
export const dbUpdateCityName = (id, newName) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `update City set City = '${newName}' where CityId = ${id}`,
          (error) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve("City Name Updated!");
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbUpdateCityName)", error);
        reject("Server Error");
      });
  });
};
export const dbGetCity = () => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(`select CityId,City from City;`, (error, result) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve(result);
          }
        });
      })
      .catch((error) => {
        console.error("Function Location (dbGetCity)", error);
        reject("Server Error");
      });
  });
};
export const dbAddCity = (districtId, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = await getDbConnection();
      const request = pool.request();
      request.query(
        `INSERT INTO City (DistrictId,City) VALUES (${districtId},'${name}');`,
        (error, result) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve("Data Added");
          }
        }
      );
    } catch (error) {
      console.error("Function Location (dbAddCity)", error);
      reject("Server Error");
    }
  });
};
//District
export const dbRemoveDistrict = (id) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `DELETE from District where DistrictId = ${id}`,
          (error) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve("District Name Deleted!");
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbRemoveDistrict)", error);
        reject("Server Error");
      });
  });
};
export const dbUpdateDistrictName = (id, newName) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `update District set District = '${newName}' where DistrictId = ${id}`,
          (error) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve("District Name Updated!");
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbUpdateDistrictName)", error);
        reject("Server Error");
      });
  });
};
export const dbGetDistrict = () => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `select StateId,District,DistrictId from District;`,
          (error, result) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve(result);
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbGetDistrict)", error);
        reject("Server Error");
      });
  });
};
export const dbAddDistrict = (stateId, name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = await getDbConnection();
      const request = pool.request();
      request.query(
        `INSERT INTO District (StateId,District) VALUES (${stateId},'${name}');`,
        (error, result) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve("Data Added");
          }
        }
      );
    } catch (error) {
      console.error("Function Location (dbAddDistrict)", error);
      reject("Server Error");
    }
  });
};
//State
export const dbRemoveState = (id) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(`DELETE from State where StateId = ${id}`, (error) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve("State Name Deleted!");
          }
        });
      })
      .catch((error) => {
        console.error("Function Location (dbRemoveState)", error);
        reject("Server Error");
      });
  });
};
export const dbUpdateStateName = (id, newName) => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(
          `update State set State = '${newName}' where StateId = ${id}`,
          (error) => {
            if (error) {
              console.error(error);
              reject("Db Query Error");
            } else {
              resolve("State Name Updated!");
            }
          }
        );
      })
      .catch((error) => {
        console.error("Function Location (dbUpdateStateName)", error);
        reject("Server Error");
      });
  });
};
export const dbGetState = () => {
  return new Promise(async (resolve, reject) => {
    sqlRequest()
      .then((request) => {
        request.query(`select StateId,State from State;`, (error, result) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve(result);
          }
        });
      })
      .catch((error) => {
        console.error("Function Location (dbGetState)", error);
        reject("Server Error");
      });
  });
};

export const dbAddState = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = await getDbConnection();
      const request = pool.request();
      request.query(
        `INSERT INTO State (State) VALUES ('${name}');`,
        (error, result) => {
          if (error) {
            console.error(error);
            reject("Db Query Error");
          } else {
            resolve("Data Added");
          }
        }
      );
    } catch (error) {
      console.error("Function Location (dbAddState)", error);
      reject("Server Error");
    }
  });
};

export const dbGetCaseList = async (callback) => {
  // select caseId,childName,gender,address,caseIdInput,caseTitle,caseType,caseStatus,nextHearingDate from CaseDetails;
  const pool = await getDbConnection();
  const request = pool.request();
  request.query(
    "select caseId,childName,gender,address,caseIdInput,caseTitle,caseType,caseStatus,nextHearingDate from CaseDetails;",
    callback
  );
};

export const dbGetCaseDetails = async (id, callback) => {
  const pool = await getDbConnection();
  const request = pool.request();
  request.query(`SELECT * from CaseDetails where caseId = '${id}';`, callback);
};
