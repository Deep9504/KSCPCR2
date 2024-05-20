import axios from "axios";
import { useRef, useState } from "react";
import { IP } from "../../utils/IP";

interface props {
  closeAddComponent: () => void;
}

export const AddCity: React.FC<props> = ({ closeAddComponent }) => {
  const cityNameInput = useRef<any>("");
  const [selectedState,setSelectedState] = useState<string>('select');
  const handleStateChange =(e:any)=>{
    setSelectedState(e.target.value);
  }
  const [selectedDistrict,setSelectedDistrict] = useState<string>('select');
  const handleDistrictChange =(e:any)=>{
    setSelectedDistrict(e.target.value);
  }
  const handleAddBtn =() =>{
    const body={
      cityName: cityNameInput.current?.value,
      selectedState:selectedState,
      selectedDistrict:selectedDistrict
    }
    axios.post(IP.API +'addNewCity', body).then(res=>{
      console.log(res.data);
      closeAddComponent();
    }).catch(err=>{
      console.log(err);
      closeAddComponent();
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
              <p style={{ fontSize: "20px" }}> Add New City </p>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="mt-2 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    onChange={handleStateChange}
                    value={selectedState}
                  >
                    <option value="select">---Select State---</option>
                    <option value="karnataka">karnataka</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">State</label>
                </div>
              </div>
              <div className="mt-2 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    onChange={handleDistrictChange}
                    value={selectedDistrict}
                  >
                    <option value="select">---Select District---</option>
                    <option value="Belagavi">Belagavi</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">District</label>
                </div>
              </div>
              <div className="mt-2 col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="Enter Bank Name"
                    ref={cityNameInput}
                  />
                  <label htmlFor="floatingInput1">City Name</label>
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
                  onClick={closeAddComponent}
                >
                  Cancel
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <button onClick={handleAddBtn} style={{ width: "100%", backgroundColor: "#0A6862" }}>
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
