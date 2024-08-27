import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Details from "../pages/Details";



function Header() {
  const [swipe, setSwipe] = useState("");
  const current = new Date();
  const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date= current.getDate();
  const monthIndex=months[current.getMonth()];
  const year=current.getFullYear();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day=days[current.getDay()];
 const formattedDate = `${day} ${monthIndex} ${date}, ${year}`;

  return (
    <>
      {/* toppest part */}
      <section className="container px-20 flex justify-between py-3">
        <h3 className="search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </h3>
        <div className="flex items-center gap-3">
          <h3>{formattedDate}</h3>
          <button onClick={() => setSwipe("slide")}>
            <i class="fa-solid fa-bars text-3xl"></i>
          </button>
        </div>
        <Sidebar swipe={swipe} setSwipe={setSwipe}/>
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

      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path="/cat/:cid" element={<Category/>}/>
        <Route path="/details/:cid?/:id" element={<Details/>}/>

        

      </Routes>
    </>
  );
}

export default Header;
