import axios from "axios";
import { useRef, useState } from "react";
import { IP } from "../../utils/IP";

interface props {
  closeAddComponent: (e: boolean,type:string) => void;
  type : string;
}

export const AddCourtInfo: React.FC<props> = ({ closeAddComponent,type }) => {
  const infoInput = useRef<HTMLInputElement>(null);
  const handleAdd = () =>{
    const body ={
      infoInput:infoInput.current?.value
    }
    axios.post(IP.API + type, body).then(res=>{
      console.log(res.data);
       closeAddComponent(false,type);
    }).catch(err=>{
      console.log(err);
       closeAddComponent(false,type);
    })
   
  }
  return (
    <div className="popup">
      <div
        className="popup-inner"
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        <div className="card" style={{ padding: "10px", maxWidth: "700px" }}>
          <div
            //   className="card-body"
            style={{
              // padding: "10px",
              borderRadius: "0.3px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              // alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "10px" }}>
              <i
                className="fa-solid fa-building-columns"
                style={{ fontSize: "30px" }}
              ></i>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p style={{ fontSize: "20px" }}> Add New {type} Info </p>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="mt-2 col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="Enter Bank Name"
                    ref={infoInput}
                  />
                  <label htmlFor="floatingInput1">New {type} Name</label>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-6 col-md-6 col-12">
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "red",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => closeAddComponent(false,type)}
                >
                  Cancel
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <button onClick={handleAdd} style={{ width: "100%", backgroundColor: "#0A6862" }}>
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
