const DashBoard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="row">
        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
          <div
            className="card"
            style={{ backgroundColor: "white", padding: "10px 10px 0px 10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h6 style={{ fontWeight: "bold", fontSize: "15px" }}>
                Total Amount
              </h6>
              <h6
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "#FC5C7D",
                }}
              >
                9.8k
              </h6>
            </div>
            <p style={{ fontSize: "13px", marginTop: "0px" }}>This month</p>
            <div
              className="progress"
              style={{ height: "7px", marginTop: "-13px" }}
            >
              <div
                className="progress-bar w-75"
                style={{ backgroundColor: "#FC5C7D" }}
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                progress-height={2}
              ></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "13px" }}>Last month</p>
              <p style={{ fontSize: "13px" }}>75%</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
        <div
            className="card"
            style={{ backgroundColor: "white", padding: "10px 10px 0px 10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h6 style={{ fontWeight: "bold", fontSize: "15px" }}>
                Total Amount
              </h6>
              <h6
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "#FC5C7D",
                }}
              >
                9.8k
              </h6>
            </div>
            <p style={{ fontSize: "13px", marginTop: "0px" }}>This month</p>
            <div
              className="progress"
              style={{ height: "7px", marginTop: "-13px" }}
            >
              <div
                className="progress-bar w-75"
                style={{ backgroundColor: "#FC5C7D" }}
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                progress-height={2}
              ></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "13px" }}>Last month</p>
              <p style={{ fontSize: "13px" }}>75%</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
        <div
            className="card"
            style={{ backgroundColor: "white", padding: "10px 10px 0px 10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h6 style={{ fontWeight: "bold", fontSize: "15px" }}>
                Total Amount
              </h6>
              <h6
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "#FC5C7D",
                }}
              >
                9.8k
              </h6>
            </div>
            <p style={{ fontSize: "13px", marginTop: "0px" }}>This month</p>
            <div
              className="progress"
              style={{ height: "7px", marginTop: "-13px" }}
            >
              <div
                className="progress-bar w-75"
                style={{ backgroundColor: "#FC5C7D" }}
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                progress-height={2}
              ></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "13px" }}>Last month</p>
              <p style={{ fontSize: "13px" }}>75%</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
        <div
            className="card"
            style={{ backgroundColor: "white", padding: "10px 10px 0px 10px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h6 style={{ fontWeight: "bold", fontSize: "15px" }}>
                Total Amount
              </h6>
              <h6
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "#FC5C7D",
                }}
              >
                9.8k
              </h6>
            </div>
            <p style={{ fontSize: "13px", marginTop: "0px" }}>This month</p>
            <div
              className="progress"
              style={{ height: "7px", marginTop: "-13px" }}
            >
              <div
                className="progress-bar w-75"
                style={{ backgroundColor: "#FC5C7D" }}
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                progress-height={2}
              ></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "13px" }}>Last month</p>
              <p style={{ fontSize: "13px" }}>75%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
