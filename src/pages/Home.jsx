import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="bg-slate-900 flex flex-col items-center  sm:h-[550px] h-[500px] text-white  ">
        <h1 className="text-center mt-[100px] font-bold  capitalize text-3xl sm:text-5xl">
          make your social marketing <br /> to the next level
        </h1>
        <p className="text-center text-lg text-slate-300 sm:text-xl my-[20px] ">
          Make your social media organized save time, and <br /> easily managable with
          socioly
        </p>
      </div>
      <div className="w-full h-[300px] flex flex-col justify-center items-center bg-white">
        <div className=" m-10 mt-[-300px] shadow-xl  border-4 rounded ">
          <img
            src="https://media.istockphoto.com/id/1487030006/photo/digital-marketing-internet-marketing-and-online-marketing-abstraction.jpg?s=612x612&w=0&k=20&c=lSdpiicxAcMzMIOlZW71QMlsaR52K5NCSUE-CDWqsFE="
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
