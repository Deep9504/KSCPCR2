
import axios from "axios";
import { useRef, useState } from "react";
import { IP } from "../../utils/IP";

interface props {
  closeAddComponent: () => void;
}

export const AddState: React.FC<props> = ({
  closeAddComponent,
}) => {
  const stateNameInput= useRef<HTMLInputElement>(null);
  const handleAddBtn =() =>{
    const body={
      stateName: stateNameInput.current?.value,
    }
    axios.post(IP.API +'addNewState', body).then(res=>{
      console.log(res.data);
      closeAddComponent();
    }).catch(err=>{
      console.log(err);
      closeAddComponent();
    })
  }
  return (
    <div className="popup">
      <div className="popup-inner" style={{overflowY:'auto', maxHeight:'100vh'}}>
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
              
              <i className="fa-solid fa-building-columns"  style={{ fontSize: "30px" }}></i>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p style={{ fontSize: "20px" }}> Add New State </p>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="Enter Bank Name"
                    ref={stateNameInput}
                  />
                  <label htmlFor="floatingInput1">State Name</label>
                </div>
              </div>
              
            </div>
            
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-6 col-md-6 col-12">
                <button
                  style={{ width: "100%", backgroundColor: "red",whiteSpace:'nowrap'}}
                  onClick={closeAddComponent}
                >
                  Cancel
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <button onClick={handleAddBtn} style={{ width: "100%",backgroundColor:'#0A6862' }}>ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
