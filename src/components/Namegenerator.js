import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { Results, fetchData } from "./Results";
import Navbar2 from "./Navbar2";
// import "./style.css";
// import '../newStyle.css'

function Namegenerator({ setTerm }) {
 
  return (
    <div className="flex flex-col max-w-full mx-auto min-h-screen max-h-screen gap-10">
      <Navbar2 />
      <div className="flex flex-col items-center min-w-full mx-auto">
        <h1 className="text-[#00008b] font-bold text-[1.2cm]">DRUG NAME GENERATOR</h1>
        <p className="text-[#828bdb] font-bold text-[0.6cm] font-serif">
           generate brandable drug name using artificial intelligence
        </p>

        <form className="grid grid-cols-2 justify-items-center gap-x-[20px]" >
          <div className="flex flex-col w-full text-[#312eab]">
            <label for="fn" className="mt-5 text-xl">
              <b>Input:</b>
            </label>
            <input
            className="w-full px-2 py-1 border-2 border-[#312eab] rounded-[6px]"
              type="text"
              placeholder="Name"
              name="fn"
              id="fn"
              required
            />

            <label for="ln" className="mt-5 text-xl">
              <b>Country Name:</b>
            </label>
            <input
             className="w-full px-2 py-1 border-2 border-[#312eab] rounded-[6px]"
              type="text"
              placeholder="Country Name"
              name="ln"
              id="ln"
              required
            />
          </div>

          <div className="flex flex-col mt-3 justify-center mb-12 ">
            <select id="sel" name="sel" className="px-2 py-1 border-2 border-[#312eab] rounded-[6px]">
              <option value="select">Choose</option>
              <option value="prefix">List of strings prefix</option>
              <option value="suffix">List of strings suffix</option>
            </select>
          </div>

          <button className="btn-primary text-[20px] rounded-[6px] drop-shadow-xl mt-6 hover:drop-shadow-sm px-2 py-1 flex text-white " type="submit" >
              Generate
            </button>
        </form>
      </div>
    </div>
  );
}

export default Namegenerator;
