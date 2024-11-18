import React from "react";
// import '../App.'
import "../App.css";

const Loader = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center m-auto">
        <div className="w-[50px] h-[50px] border-black border-4 rounded-full border-r-transparent loader animate-spin"></div>
      </div>
    </>
  );
};

export default Loader;
