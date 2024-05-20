import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IP } from "../utils/IP";

interface caseListMetaData {
  address: string;
  caseId: string;
  caseIdInput: string;
  caseStatus: string;
  caseTitle: string;
  caseType: string;
  childName: string;
  gender: string;
  nextHearingDate: Date;
}

const CaseTracker = () => {
  const [caseList, setCaseList] = useState<caseListMetaData[]>([]);
  const navigate = useNavigate();
  const openCaseDetails = (id: any) => {
    navigate(`/case/case-tracker/${id}`);
  };
  const getCaseListInfo = () => {
    axios
      .get(IP.API + "caselist")
      .then((res) => {
        setCaseList(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getCaseListInfo();
  }, []);
  return (
    <div>
      <h3>Dashboard</h3>
      <div className={"card "} style={{ padding: "10px" }}>
        <div>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div
          style={{
            height: "1px",
            width: "100%",
            margin: "5px 0px",
            background: "gray",
          }}
        ></div>
        <div style={{ width: "100%", overflow: "auto" }}>
          <table className="table table-striped table-hover table-bordered">
            <thead style={{ background: "#6c5ea5", color: "white" }}>
              <tr>
                <th scope="col">Child's Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Address</th>
                <th scope="col">Case ID</th>
                <th scope="col">Case Title</th>
                <th scope="col">Case Type</th>
                <th scope="col">Case Status</th>
                <th scope="col">Next Hearing Date</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {caseList.map((val, index) => {
                return (
                  <tr key={index} onClick={() => openCaseDetails(val.caseId)}>
                    <th scope="row">{val.childName}</th>
                    <td>{val.gender}</td>
                    <td>{val.address}</td>
                    <td>{val.caseIdInput}</td>
                    <td>{val.caseTitle}</td>
                    <td>{val.caseType}</td>
                    <td>{val.caseStatus}</td>
                    <td>{val.nextHearingDate.toString()}</td>
                    {/* <td>
                  <button
                    className="btn"
                    onClick={() => openCaseDetails(123435)}
                  >
                    <i className="fa-solid fa-info"></i>
                  </button>
                </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CaseTracker;
