import { useState } from "react";
import { AddCourtInfo } from "./DataEntry/AddCourtInfo";

const data1 = [
  {
    CourtName: "ABCD",
  },
];
export const CourtInfo = () => {
  const [CourtList, setCourtInfo] = useState(data1);
  const [newDataFormForCourt, setShowDataFormForCourt] =
    useState<boolean>(false);

  const [jurisdictionList, setJurisdictionInfo] = useState(data1);
  const [newDataFormForJurisdiction, setShowDataFormForJurisdiction] =
    useState<boolean>(false);
  const showAddNewDataEntryView = (e: boolean, type: string) => {
    if (type === "Court") {
      setShowDataFormForCourt(e);
    } else {
      setShowDataFormForJurisdiction(e);
    }
  };
  return (
    <>
      <div>
        {/* <h3>State</h3> */}
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
            <p style={{ fontSize: "20px" }}> Court List</p>
            <div style={{ marginRight: "10px", marginTop: "0px" }}>
              <button
                onClick={() => showAddNewDataEntryView(true, "Court")}
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
                  <th scope="col">Court Name</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {CourtList.map((val, index) => {
                  return (
                    <tr key={index} className="tableFirstThStyle">
                      <th scope="row">{index + 1}</th>
                      <td>{val.CourtName}</td>

                      <td
                        style={{
                          textAlign: "center",

                          cursor: "pointer",
                        }}
                      >
                        <button
                          //   onClick={() => handleEdit(val)}
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
      <div>
        {/* <h3>State</h3> */}
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
            <p style={{ fontSize: "20px" }}> Jurisdiction List</p>
            <div style={{ marginRight: "10px", marginTop: "0px" }}>
              <button
                onClick={() => showAddNewDataEntryView(true, "J")}
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
                  <th scope="col">Jurisdiction Name</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {jurisdictionList.map((val, index) => {
                  return (
                    <tr key={index} className="tableFirstThStyle">
                      <th scope="row">{index + 1}</th>
                      <td>{val.CourtName}</td>

                      <td
                        style={{
                          textAlign: "center",

                          cursor: "pointer",
                        }}
                      >
                        <button
                          //   onClick={() => handleEdit(val)}
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
      {newDataFormForCourt && (
        <AddCourtInfo
          closeAddComponent={showAddNewDataEntryView}
          type="Court"
        />
      )}
      {newDataFormForJurisdiction && (
        <AddCourtInfo
          closeAddComponent={showAddNewDataEntryView}
          type="Jurisdiction"
        />
      )}
      {/* {showEditPage && <EditState closeAddComponent={closeEditPage} info={editInfo} />} */}
    </>
  );
};
