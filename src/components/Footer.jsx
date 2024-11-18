import React from "react";
import Footlogo from "../assets/footerlogo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#0B2351] px-32 py-20">
        <div className="flex justify-between border-b pb-3">
          <div className=" text-white">
            <img className="w-[100px]" src={Footlogo} alt="" />
            <h2>Nepal's First Online News Portal</h2>
            <div className="text-[#B6BDCB]">
              <h3>Published by Nepalnews Pvt Ltd</h3>
              <h3>Editor: Raju Silwal</h3>
              <h3>Information Department Registration No. 1505 / 076-77</h3>
            </div>
          </div>
          <div className=" text-white">
            <h2>Contact</h2>
            <div className="py-6 text-[#B6BDCB]">
              <h3> KMC-02, UttarDhoka,</h3>
              <h3>Lazimpat, Nepal</h3>

              <h3>Newsroom</h3>
              <h3>+977–01–4445751 / 4445754</h3>

              <h3>E-mail</h3>
              <h3>info@nepalnews.com editor@nepalnews.com</h3>
            </div>
          </div>
          <div className=" text-white">
            <h2>Social Media</h2>
            <ul className="py-6">
              <li>
                <Link to="">Facebook</Link>
              </li>
              <li>
                <Link to="">Instagram</Link>
              </li>
              <li>
                <Link to="">Twitter</Link>
              </li>
              <li>
                <Link to="">Youtube</Link>
              </li>
            </ul>
            <h2>Exploration</h2>
            <ul className="py-6">
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
              <li>
                <Link to="">Archive</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-5 text-white">
          <h3>
            <Link to="">Terms of Use Disclaimer</Link>
          </h3>
          <h3>
            © NepalNews. 2021 All rights reserved. | Nepal's First News Portal
          </h3>
        </div>
      </footer>
    </>
  );
}

export default Footer;
