import React, {useContext, useState, useEffect } from "react";
import Navbar from "../../components/admin-navbar/navbar";
import Sidebar from "../../components/admin-sidebar/sidebar";
import Main from "../../components/admin-main/main";
import Marketing from "../../components/admin-marketing/marketing";
import { Context } from "../../context/index";
import { useParams } from "react-router-dom";
import { Data } from "../../dates/jummy";
import useScreenSize from "../../hooks/useScreenSize";

function AdminDashboard() {
  const { category } = useParams();
  const cat = Data.find((el) => el.url === Number(category));

  const { state, dispatch } = useContext(Context);
  const screenSize = useScreenSize();

  // const [ size, setSize ] = useState(1000);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setSize(window.innerWidth);
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [])
  
  useEffect(() => {
    screenSize < 768 ? dispatch({ type: 'SET_TOGGLE_NAVBAR', payload: false }) : dispatch({ type: 'SET_TOGGLE_NAVBAR', payload: true })
  }, [screenSize])
  
  return (
    <div className="bg-slate-50">
      <div>
        <Navbar />
      </div>
      <div className="main max-w-[2300px] mt-[76px] flex flex-1 justify-between">
        <Sidebar />
        <div className="{`main overflow-auto w-full h-full z10}">
          {category && category === "main" && <Main />}
          {category && category === "marketing" && <Marketing />}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
