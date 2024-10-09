import React from "react";
import AnalythicGraph from "../component/AnalythicGraph";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Analytic() {
  return (
    <>
    <Header/>
      <div className="flex p-[40px] bg-slate-100 justify-center gap-[20px] flex-wrap">
        
        <AnalythicGraph />
        <div className="h-[200px] sm:h-[300px] p-[20px] gap-[20px] sm:bg-white text-center w-[300px] sm:w-[400px] flex flex-col justify-center sm:text-left">
          <h1 className="text-2xl capitalize font-bold">Take your social media to another leve</h1>
          <p className="c">
            Make your social media organized, save time, and easily managable
            with Socioly
          </p>
          <button className=" bg-slate-800 h-[40px] w-[200px]  text-white p-[10px] px-[20px] rounded-lg">
            Get started 
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Analytic;
