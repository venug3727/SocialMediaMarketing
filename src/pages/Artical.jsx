import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ArticalCard from "../component/ArticalCard";

function Artical() {
  return (
    <>
      <Header />
      <div className="p-[40px]">
        <div className="flex gap-5 justify-between flex-wrap">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Recent Article <br />
            For You
          </h1>
          <p className="text-slate-500">
            Make your social medua organized, save time, and <br /> easily
            managable with socioly
          </p>
        </div>
        <div className="flex  items-center justify-center gap-9 flex-wrap">
          <ArticalCard heading="marketing checklist for new entrepreneurs" />
          <ArticalCard heading="driving traffic but no sales? impove your" />
          <ArticalCard heading="step by step guide to running your first" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Artical;
