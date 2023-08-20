import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/Routes";
import SideBar from "./componenets/SideBar";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <div className="App">
      <h1 className="z-50 w-full fixed shadow shadow-slate-700 top-0 text-2xl text-white bg-blue-600 font-bold p-4">
        {currentRoute == "/"
          ? "Contact Management App"
          : currentRoute == "/contact_form"
          ? "Contacts"
          : "Charts and Maps"}
      </h1>
      <div className="flex w-full ">
        <div className="sticky  top-0 h-screen">
          <SideBar />
        </div>
        <div className="w-full">
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
