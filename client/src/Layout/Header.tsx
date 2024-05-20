import { FC, useEffect, useState } from "react";
import { OffCanvas } from "./OffCanvas";
import { SearchBox } from "./SearchBox";

interface props {
  updateSideBarView: () => void;
  widthLow: boolean;
}
export const Header: React.FC<props> = ({ updateSideBarView, widthLow }) => {
  const [showSearchPage, setShowSearchPage] = useState<boolean>(false);
  const placeholders = [
    "Search for something...",
    "Type your query here...",
    "Find what you're looking for...",
  ];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    // Update placeholder every 5 seconds
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholders.length
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [placeholders.length]);
  const handleSearchBoxClick = (e: boolean) => {
    setShowSearchPage(e);
  };
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "white",position:'sticky', top:0,zIndex:'10' }}>
      <div className="container-fluid">
        <div>
          {!widthLow ? (
            <button
              onClick={updateSideBarView}
              className="btn "
              type="submit"
              style={{
                width: "50px",
                color: "#198754",
                borderColor: "#da1818",
              }}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          ) : (
            <button
              className="btn btn-outline-success"
              type="button"
              style={{ width: "50px" }}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
        </div>
        <div>
          <h6>ಕರ್ನಾಟಕ ರಾಜ್ಯ ಮಕ್ಕಳ ಹಕ್ಕುಗಳ ರಕ್ಷಣಾ ಆಯೋಗ </h6>
          <p style={{marginTop:'-10px',fontSize:'12px'}}>ಕರ್ನಾಟಕ ಸರ್ಕಾರ</p>
        </div>
        <OffCanvas />
        <form className="d-flex">
          <input
            className="form-control animated-placeholder"
            // type="search"
            placeholder={placeholders[currentPlaceholderIndex]}
            aria-label="Search"
            style={{ height: "38px", marginTop: "5px" }}
            disabled
            onClick={() => handleSearchBoxClick(true)}
            // onChange={handleSearch}
          />
          <div style={{ fontSize: "32px", marginLeft: 5 }}>
            <i className="fa-regular fa-circle-user fa-fade"></i>
          </div>
        </form>
      </div>
      {showSearchPage && <SearchBox closeAddComponent={handleSearchBoxClick} />}
    </nav>
  );
};
