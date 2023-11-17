import React from "react";

export const Homepage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-3xl text-white font-semibold w-full h-screen bg-cyan-500 md:text-black md:bg-rose-600 lg:text-[#FACC15] lg:bg-green-500 gap-4">
        Rafani Bardatus Salsabilah
        <div className="flex flex-row gap-4">
          <button className="text-[#FACC15] bg-green-500 rounded-lg text-white w-[7rem] text-xl md:text-black md:bg-cyan-500 lg:text-white lg:bg-rose-600">Surabaya</button>
          <button className="text-[#FACC15] bg-green-500 rounded-lg text-white w-[7rem] text-xl md:text-black md:bg-cyan-500 lg:text-white lg:bg-rose-600">20 Tahun</button>
        </div>
        
      </div>
    </div>
  );
};
