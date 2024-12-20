import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Header() {
  const [swipe, setSwipe] = useState("");
  const current = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = current.getDate();
  const monthIndex = months[current.getMonth()];
  const year = current.getFullYear();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[current.getDay()];
  const formattedDate = `${day} ${monthIndex} ${date}, ${year}`;

  return (
    <>
      {/* toppest part */}
      <section className="container px-20 flex justify-between py-3">
        <div className="flex gap-10 items-center">
          <h3 className="search">
            <Link to="/">
              <i class="fa-solid fa-magnifying-glass text-[20px] font-light  hover:text-[#30448b]"></i>
            </Link>
          </h3>
          <ul className="flex gap-3 text-[18px]">
            <li>
              <Link to="/">
                <i class="bi bi-facebook  hover:text-[#30448b]"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="bi bi-instagram  hover:text-[#30448b]"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="bi bi-twitter  hover:text-[#30448b]"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="bi bi-youtube  hover:text-[#30448b]"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <h3>{formattedDate}</h3>
          <button onClick={() => setSwipe("slide")}>
            <i class="fa-solid fa-bars text-3xl"></i>
          </button>
        </div>
        <Sidebar swipe={swipe} setSwipe={setSwipe} />
      </section>
      {/* logo part */}
      <section className="py-6 border-b-[6px] border-[#222222] ">
        <img className="w-[280px] mx-auto " src={Logo} alt="" />
      </section>

      {/* header starts  */}

      <header className="py-5 border-b-2">
        <nav className="container ">
          <ul className="flex justify-center gap-10 items-center">
            <li>
              {" "}
              <Link to="/">
                <i class="fa-solid fa-house text-2xl"></i>
              </Link>
            </li>

            <li>
              <Link to="/cat/business">Business</Link>
            </li>
            <li>
              <Link to="/cat/entertainment">Entertaiment</Link>
            </li>
            <li>
              <Link to="/cat/crime">crime</Link>
            </li>
            <li>
              <Link to="/cat/health">Health</Link>
            </li>
            <li>
              <Link to="/cat/science">Science</Link>
            </li>
            <li>
              <Link to="/cat/sports">Sports</Link>
            </li>
            <li>
              <Link to="/cat/technology">Technology</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
