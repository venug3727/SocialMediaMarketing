import React from "react";

function ProfileCard({
  image,
  name,
  designation,
  discription = "Lorem Ipsum dolor sit amet,dolore magna aliquy a ante. Ut enim ad minim veniam, quis nostr place wither. Duis aute irure dolor in reprehender it in voluptate velit esse cillum dolore magna.",
}) {
  return (
    <>
      <div className=" w-[300px] items-center text-left justify-center p-[20px] rounded-lg mt-[50px] sm:text-left  hover:bg-slate-700 hover:text-white">
        <h1 className="text-6xl text-left font-bold">"</h1>
        <p className="c">{discription}</p>
        <div className="flex items-center mt-[20px] gap-4">
          <img src={image} className="h-[40px] w-[40px] rounded-full bg-slate-500" alt="" />
          <div className="">
            <h1 className="font-semibold">{name}</h1>
            <p className="c">{designation}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
