import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Sidebar({ swipe, setSwipe }) {
  console.log(swipe);
  // const{swipe}=props;
  return (
    <>
      <div
        className={` bg-white fixed right-[-2000px] top-0 h-full pb-10 w-[400px]    shadow overflow-auto border transition-all duration-[0.9s] ${swipe}`}
      >
        <div className="text-right p-5">
          <i onClick={() => setSwipe()} className="fa-solid fa-xmark "></i>
        </div>
        <div className="px-16">
          <div className=" border-b pb-6">
            <img className="w-[120px]" src={Logo} alt="" />
          </div>
          <ul className="py-7 leading-9 font-bold border-b">
            <li>
              <Link to="/cat/business">Business</Link>
            </li>
            <li>
              <Link to="/cat/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link to="/cat/crime">Crime</Link>
            </li>
            <li>
              <Link to="/cat/health">Health</Link>
            </li>
            <li>
              <Link to="/cat/science">Science</Link>
            </li>
            <li>
              <Link to="/cat/business">Business</Link>
            </li>
            <li>
              <Link to="/cat/sports">Sports</Link>
            </li>
            <li>
              <Link to="/cat/health">Health</Link>
            </li>
            <li>
              <Link to="/cat/crime">Crime</Link>
            </li>
            <li>
              <Link to="/cat/science">Science & Technology</Link>
            </li>
            <li>
              <Link to="/cat/entertainment">Entertainment & Lifestyle</Link>
            </li>
            <li>
              <Link to="/cat/health">Health</Link>
            </li>
          </ul>
          <div className="py-6">
            <h3>Published by Nepalnews Pvt Ltd</h3>
            <h3>Editor: Raju Silwal</h3>
            <h3>Information Department Registration No. 1505 / 076-77</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
