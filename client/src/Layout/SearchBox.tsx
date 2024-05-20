import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

interface props {
  closeAddComponent: (e: boolean) => void;
}
interface option {
  show: string;
  link: string;
}
const data: option[] = [
  {
    show: "Cost Of Borrowing / NCD",
    link: "cost-of-borrowing/NCD",
  },
  {
    show: "Admin / User",
    link: "admin/user",
  },
  {
    show: "Admin / Role Mapping",
    link: "admin/role-mapping",
  },
  {
    show: "Admin / Mail Config",
    link: "admin/mail-config",
  },
  {
    show: "Master Data / S&A Company",
    link: "master-data/sa-company",
  },
  {
    show: "Master Data / Bank",
    link: "master-data/bank",
  },
  {
    show: "Master Data / Financial Year",
    link: "master-data/financial-year",
  },
  {
    show: "Master Data / Currency",
    link: "master-data/Currency",
  },
  {
    show: "PMS / Business / Action Taken Report",
    link: "pms/business/action-taken",
  },
  {
    show: "PMS / Business / Quarterly Performance",
    link: "pms/business/quarterly-performance",
  },
  {
    show: "PMS / Business / Business Prospects",
    link: "pms/business/business-prospects",
  },
  {
    show: "PMS / Business / Project Update ",
    link: "pms/business/project-update",
  },
  {
    show: "PMS / Financial / P&L Summary & Forecast ",
    link: "pms/financial/summary-forecast",
  },
  {
    show: "PMS / Financial / Working Capital ",
    link: "pms/financial/working-capital",
  },
  {
    show: "PMS / Financial / Balance Sheet",
    link: "pms/financial/balance-sheet",
  },
  {
    show: "PMS / Financial / Cash Flow Statement ",
    link: "pms/financial/cashFlow-statement",
  },
  {
    show: "Facility Monitoring /  Banking Guarantee ",
    link: "facility-monitoring/banking-Gurantee",
  },
  {
    show: "Facility Monitoring / Banking Facilities",
    link: "facility-monitoring/banking-facilities",
  },
  {
    show: "Facility Monitoring / Corporate Guarantee",
    link: "facility-monitoring/corporate-Guarantee",
  },
  {
    show: "Facility Monitoring / International Amount",
    link: "facility-monitoring/international-Amount",
  },
  {
    show: "Facility Monitoring / Comfort Guarantee",
    link: "facility-monitoring/comfort-Guarantee",
  },
  // {
  //   show: "Facility Monitoring / ICB-ICD Movement",
  //   link: "facility-monitoring/ICB-Movement",
  // },
  {
    show: "External Debt / International Amount",
    link: "external-debt/international-Amount",
  },
  {
    show: "External Debt / Domestic Amount",
    link: "external-debt/domestic-Amount",
  },
  {
    show: "Movement / ICB-ICD Movement",
    link: "movement/ICB-ICDMovement",
  },
  
  {
    show: "Borrowing / Report / Long-Term Reports",
    link: "borrowing/long-term-reports",
  },
  {
    show: "Borrowing / Report / Fund Raising",
    link: "borrowing/fund-raising",
  },
  {
    show: "Borrowing / Report / Maturities",
    link: "borrowing/maturities",
  },
  {
    show: "Borrowing / Report / Loans Taken",
    link: "borrowing/loans-taken",
  },
  {
    show: "Borrowing / Report / Interest Payment",
    link: "borrowing/interest-payment",
  },
  {
    show: "Borrowing / Report / Loan Given",
    link: "borrowing/loan-given",
  },
  {
    show: "Borrowing / Report / Interest Received",
    link: "borrowing/interest-received",
  },
  {
    show: "Borrowing / Report / Equity",
    link: "borrowing/equity",
  },
  {
    show: "Borrowing / NCD / NCD Tracker",
    link: "/NCD-Tracker",
  },
  {
    show: "Borrowing / NCD / NCD Dashboard",
    link: "/NCD-Dashboard",
  },
  {
    show: "Borrowing / NCD / Primary Investor",
    link: "/Primary-Investor",
  },
  {
    show: "Borrowing / NCD / Secondary Investor",
    link: "/Secondary-Investor",
  },
  {
    show: "Borrowing / Term Loan",
    link: "borrowing/term-loan",
  },
  {
    show: "Borrowing / ECB Dashboard",
    link: "borrowing/ECBDashboard",
  },
  {
    show: "Dividend Income /  Main Dashboard",
    link: "dividend-income/main-dashboard",
  },
  {
    show: "Cost of borrowing /  NCD",
    link: "cost-of-borrowing/NCD",
  },
  {
    show: "Cost of borrowing /  Commercial Paper",
    link: "cost-of-borrowing/Commercial-Paper",
  },
  {
    show: "Cost of borrowing /  ECB",
    link: "cost-of-borrowing/ECB",
  },
  {
    show: "Cost of borrowing /  Term_Loan",
    link: "cost-of-borrowing/Term_Loan",
  },
  {
    show: "Cost of borrowing /  Group Debt",
    link: "cost-of-borrowing/GroupDebt",
  },
  {
    show: "Strategic Transaction /  Dashboard",
    link: "strategic-transaction/dashboard",
  },
  
];
export const SearchBox: React.FC<props> = ({ closeAddComponent }) => {
  const [suggestions, setSuggestions] = useState<option[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);
  const handleSuggestionClick = () => {
    closeAddComponent(false);
  };
  const handleClose =(e:any) =>{
    const id = e.target.id;
    if(id === "popupP"){
        closeAddComponent(false);
    }
  }
  const handleSearchChange = (event: any) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filtered: option[] = data.filter((item) =>
      item.show.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filtered);
  };
  const renderHighlightedText = (text:string, searchTerm:string) => {
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) => (
      part.toLowerCase() === searchTerm.toLowerCase() ? <span key={index} style={{ color: 'black',backgroundColor:'#00800042',fontWeight:'bold' }}>{part}</span> : part
    ));
  };
  useEffect(()=>{
    searchInput.current?.focus();
  },[]);
  return (
    <div onClick={handleClose} id="popupP" className="popup" style={{height:'100vh'}}>
      <div className="popup-inner" style={{position:'absolute',top:'40px',minWidth:'300px',maxWidth:'400px'}}>
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            // style={{ marginTop: "5px" }}
            value={searchTerm}
            ref={searchInput}
            // disabled
            // onClick={()=> handleSearchBoxClick(true)}
            onChange={handleSearchChange}
          />
          <div style={{ overflowY: "auto", maxHeight: "50vh" }}>
            {searchTerm!=='' &&  suggestions.map((suggestion, index) => (
              <NavLink
                onClick={handleSuggestionClick}
                className="nav-link searchItem sidebarNavLink"
                to={suggestion.link}
                key={index}
                //   style={{border:'1px solid gray'}}
              >
                {/* {suggestion.show} */}
                {renderHighlightedText(suggestion.show, searchTerm)}
              </NavLink>
            ))}
          </div>
      </div>
    </div>
  );
};
