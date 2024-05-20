import { useState } from "react";
import { AddVillage } from "./DataEntry/AddVillage";
const data = [
  {
    VillageId: 232,
    VillageName: "Bandakeri",
  }
];

const Village = () => {
  const [VillageList, setVillageList] = useState(data);
  const [isNewVillage, setNewVillage] = useState<boolean>(false);
  const [showEditPage, setShowEditPage] = useState<boolean>(false);
  const [editInfo, setEditInfo] = useState(null);
  const showAddNewDataEntryView = () => {
    setNewVillage(true);
  };
  const closeNewRolePage = () => {
    setNewVillage(false);
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
        {/* <h3>Village</h3> */}
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
            <p style={{ fontSize: "20px" }}> Village List</p>
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
                  <th scope="col">Village Name</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {VillageList.map((val, index) => {
                  return (
                    <tr key={index} className="tableFirstThStyle">
                      <th scope="row">{index + 1}</th>
                      <td>{val.VillageName}</td>

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
      {isNewVillage && <AddVillage closeAddComponent={closeNewRolePage} />}
      {/* {showEditPage && <EditVillage closeAddComponent={closeEditPage} info={editInfo} />} */}
    </>
  );
};

export default Village;
