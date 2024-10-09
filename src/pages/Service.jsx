import React from "react";
import Features from "../component/Features";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import Header from "../component/Header";
function Service() {
  return (
    <>
      <Header />
      <div className=" text-black bg-slate-50 p-[40px] mt-[40px] flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl sm:text-4xl font-bold ">
          Helping your company to grow the next generation{" "}
        </h1>
        <p className="text-center mt-[20px] mx-[30px] text-slate-400 font-semibold text-lg">
          Make your social media organized, save time, and easily managable with
          socioly
        </p>
        <div className="flex flex-wrap my-[40px] justify-center sm:gap-[60px] items-center">
          <Features image="https://media.istockphoto.com/id/938433778/photo/word-smm-on-blackboard-with-supportive-icons.jpg?s=612x612&w=0&k=20&c=hr8aiv4Fm_XGJxCPNffAwosV4G5TYSWUZBHf-70je5c=" heading="Social Media ads marketing" />
          <Features image="https://media.istockphoto.com/id/938433778/photo/word-smm-on-blackboard-with-supportive-icons.jpg?s=612x612&w=0&k=20&c=hr8aiv4Fm_XGJxCPNffAwosV4G5TYSWUZBHf-70je5c=" heading="Content research and analytic " />
          <Features image="https://media.istockphoto.com/id/938433778/photo/word-smm-on-blackboard-with-supportive-icons.jpg?s=612x612&w=0&k=20&c=hr8aiv4Fm_XGJxCPNffAwosV4G5TYSWUZBHf-70je5c=" heading="graphicel design  and content creating " />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Service;
