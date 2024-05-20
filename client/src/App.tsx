import React, { Suspense, lazy, useEffect, useState } from "react";
import MainLayout from "./Layout/MainLayout";
import { Loading } from "./components/utils/Loading";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import AddNewCaseForm from "./components/Case/AddNewCaseForm";
import CaseTracker from "./components/Case/CaseTracker";
import CaseDetails from "./components/Case/CaseDetails";
import { Login } from "./components/Login/Login";
import { Index } from "./components/MasterData/Index";
import { CourtInfo } from "./components/MasterData/CourtInfo";
const DashBoard = lazy(() => import("./components/DashBoard"));
const State = lazy(() => import("./components/MasterData/State"));
const District = lazy(() => import("./components/MasterData/District"));
const City = lazy(() => import("./components/MasterData/City"));
const Taluk = lazy(() => import("./components/MasterData/Taluk"));
const Village = lazy(() => import("./components/MasterData/Village"));

function App() {
  const [auth, setAuth] = useState<boolean>(false);
  const updateAuth = (authData: any) => {
    setAuth(authData);
  };
  useEffect(()=>{
    const savedData = localStorage.getItem('auth');
    if(savedData){
      if(savedData ==='TRUE'){
        setAuth(true);
      }
    }
  })
  return (
    <>
      {!auth && (
        <Routes>
          <Route path="/" element={<Login updateAuth={updateAuth} />} />
          <Route path="*" element={<Login updateAuth={updateAuth} />} />
        </Routes>
      )}
      {auth && (
        <MainLayout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<CaseTracker />} />

              <Route path="/master-data" element={<Outlet />}>
                <Route path="index" element={<Index />} />
                <Route path="Village" element={<Village />} />
                <Route path="District" element={<District />} />
                <Route path="State" element={<State />} />
                <Route path="Taluk" element={<Taluk />} />
                <Route path="City" element={<City />} />
                <Route path="court" element={<CourtInfo />} />
              </Route>
              <Route path="/case" element={<Outlet />}>
                <Route path="case-tracker/" element={<CaseTracker />} />
                <Route path="case-tracker/:id" element={<CaseDetails />} />
                <Route path="new-case/" element={<AddNewCaseForm />} />
                <Route path="new-case/:id" element={<AddNewCaseForm />} />
              </Route>
            </Routes>
          </Suspense>
        </MainLayout>
      )}
    </>
  );
}

export default App;
