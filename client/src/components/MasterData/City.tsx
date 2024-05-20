import { useState } from "react";
import { AddState } from "./DataEntry/AddState";
import { AddCity } from "./DataEntry/AddCity";
const data = [
  {
    CityId: 232,
    CityName: "Bagalkot",
  }
];

const City = () => {
  const [CityList, setCityList] = useState(data);
  const [isNewCity, setNewCity] = useState<boolean>(false);
  const [showEditPage, setShowEditPage] = useState<boolean>(false);
  const [editInfo, setEditInfo] = useState(null);
  const showAddNewDataEntryView = () => {
    setNewCity(true);
  };
  const closeNewRolePage = () => {
    setNewCity(false);
  };
  const handleEdit = (info: any) => {
    setEditInfo(info);
    setShowEditPage(true);
  };
  const closeEditPage = () => {
    setEditInfo(null);
    setShowEditPage(false);
  };
  return (
    <>
      <div>
        {/* <h3>City</h3> */}
        <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
          <div
            style={{
              paddingBottom: "0px",
              borderRadius: "0.3px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
            <p style={{ fontSize: "20px" }}> City List</p>
            <div style={{ marginRight: "10px", marginTop: "0px" }}>
              <button
                onClick={showAddNewDataEntryView}
                style={{ backgroundColor: "white", borderWidth: "0" }}
              >
                <i
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  className="fa-solid fa-plus fa-fade buttonColorPrimary"
                ></i>
              </button>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}
          ></div>
          <div
            className="ActionTakenDashboard"
            style={{ overflow: "auto", marginTop: "10px" }}
          >
            <table className="table table-bordered" style={{ width: "100%" }}>
              <thead className="table-format tableHeader">
                <tr className="tableHeaderStyle">
                  <th scope="col" style={{ width: "20px" }}>
                    Sl. No.
                  </th>
                  <th scope="col">City Name</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {CityList.map((val, index) => {
                  return (
                    <tr key={index} className="tableFirstThStyle">
                      <th scope="row">{index + 1}</th>
                      <td>{val.CityName}</td>

                      <td
                        style={{
                          textAlign: "center",

                          cursor: "pointer",
                        }}
                      >
                        <button
                          onClick={() => handleEdit(val)}
                          className="btn"
                          style={{
                            backgroundColor: "white",
                            border: "none",
                            color: "green",
                          }}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                        className="btn"
                          style={{
                            backgroundColor: "white",
                            border: "none",
                            color: "gray",
                          }}
                        >
                          <i className="fa-solid fa-trash buttonColorPrimary"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isNewCity && <AddCity closeAddComponent={closeNewRolePage} />}
      {/* {showEditPage && <EditCity closeAddComponent={closeEditPage} info={editInfo} />} */}
    </>
  );
};

export default City;
