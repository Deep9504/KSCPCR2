import { NavLink,useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const baseUrl = window.location.origin;
  const nav = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("auth");
    nav('/');
    window.location.reload();
  };
  return (
    <div
      className="sideBarBox"
      style={{
        width: "290px",
        height: "100vh",
        // padding: 10,
        backgroundColor: "white",
        // backgroundImage:
        //   "url(https://reduction-admin.github.io/react-reduction/static/media/sidebar-4.80d4a4e5.jpg)",
        backgroundBlendMode: "overlay",
        overflow: "hidden",
        overflowY: "auto",
        position: "relative",
      }}
    >
      <div
        style={{
          padding: 10,
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "white",
          marginLeft: "48px",
        }}
      >
        <img
          style={{ width: "100px" }}
          // src="https://kscpcr.karnataka.gov.in/uploads/dept_photo1696326687.jpg"
          src={baseUrl + "/logo3.jpeg"}
          alt="Logo"
        />
      </div>
      <div className="sidebar">
        <div
          className="accordion"
          id="accordionExample"
          // style={{ backgroundColor: "transparent" }}
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "transparent", border: "0px" }}
          >
            <h2 className="accordion-header" id="adminHeader">
              <button
                className="accordion-button accordionBtnStyle collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#adminHeader-Collapse"
                aria-expanded="true"
                aria-controls="adminHeader-Collapse"
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  paddingLeft: "10px",
                }}
              >
                <i
                  className="fa-solid fa-user-tie"
                  style={{ marginRight: "10px" }}
                ></i>
                Case Details
              </button>
            </h2>
            <div
              id="adminHeader-Collapse"
              className="accordion-collapse collapse"
              aria-labelledby="adminHeader"
              // data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{ padding: "0px", background: "darkcyan" }}
              >
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"case/new-case"}
                >
                  {/* <i className="fa-solid fa-user-plus sidebarIcon"></i> */}
                  Add New Case
                </NavLink>
                {/* <NavLink className="nav-link sidebarNavLink" to={"admin/role"}>
                  Role
                </NavLink> */}
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"case/case-tracker"}
                >
                  {/* <i className="fa-solid fa-user-shield sidebarIcon"></i> */}
                  Case Tracker
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion"
          id="accordionExample"
          style={{ backgroundColor: "transparent" }}
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "transparent", border: "0px" }}
          >
            <h2 className="accordion-header" id="masterDataHeader">
              <button
                className="accordion-button accordionBtnStyle collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#masterData-collapse"
                aria-expanded="true"
                aria-controls="masterData-collapse"
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  paddingLeft: "10px",
                }}
              >
                <i
                  className="fa-solid fa-table"
                  style={{ marginRight: "10px" }}
                ></i>
                Master Data
              </button>
            </h2>
            <div
              id="masterData-collapse"
              className="accordion-collapse collapse"
              aria-labelledby="masterDataHeader"
              // data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{ padding: "0px", background: "darkcyan" }}
              >
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/index"}
                >
                  Address
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/court"}
                >
                  Court Info
                </NavLink>
                {/* <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/State"}
                >
                  State
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/District"}
                >
                  
                  District
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/City"}
                >
                  City
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/Taluk"}
                >
                  Taluk
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/Village"}
                >
                  Village
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleLogOut}
            className="btn"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span style={{ marginLeft: "10px" }}>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};
