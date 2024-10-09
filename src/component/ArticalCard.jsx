import React from "react";

function ArticalCard({ heading }) {
  return (
    <>
      <div className="gap-3 flex flex-col my-[30px] items-center justify-center w-[250px]">
        <div className="bg-slate-400 rounded-lg h-[300px] w-[250px]"></div>
        <h1 className="text-xl capitalize font-bold ">{heading}</h1>
        <p className="font-semibold text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
    </>
  );
}

export default ArticalCard;
