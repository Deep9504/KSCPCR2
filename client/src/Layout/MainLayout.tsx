import { useEffect, useRef, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { OffCanvas } from "./OffCanvas";

const MainLayout = ({ children }: any) => {
  const [isShowSidebar, setShowSidebar] = useState<boolean>(true);
  const [widthLow,setWidthLow] = useState<boolean>(false);
  const updateSideBarView = () => {
    setShowSidebar(!isShowSidebar);
  };
  
  const myElementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateWidth = () => {
      if (myElementRef.current) {
        const newWidth = myElementRef.current.clientWidth;
        if(newWidth<780){
          setShowSidebar(false);
          setWidthLow(true);
        }else{
          setWidthLow(false);
        }
      }
    };

    // Call updateWidth initially and add event listener for window resize
    updateWidth();
    window.addEventListener("resize", updateWidth);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  
  return (
    <div
      className="bg-light"
      style={{ display: "flex", justifyContent: "flex-start" }}
      ref={myElementRef}
    >
      {isShowSidebar && <Sidebar />}
      {/* <OffCanvas /> */}
      <div style={{ width: "100%", height: "100vh", overflow: "auto",position:'relative'}}>
        <Header updateSideBarView={updateSideBarView} widthLow={widthLow} />
        <div style={{ padding: "10px" }}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
