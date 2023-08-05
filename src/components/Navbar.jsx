import React, { useState } from "react";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import crypto from "../assets/cryptocurrency.png";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${open ? "w-72" : "w-20"
        } duration-300 h-screen bg-purple-900 relative p-5 pt-8 font-serif`}
    >
      <FastRewindIcon
        onClick={() => setOpen(!open)}
        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-purple-900 bg-white text-purple-950 ${!open && "rotate-180"
          } `}
      />
      <Link to={"/"}>
        <div className="flex gap-x-4 items-center">
          <img
            src={crypto}
            className={`w-[10vh] h-[10vh] ${!open && "h-[8vh] rotate-[360deg]"
              }`}
            alt=""
          />
          <h1
            className={`text-white font-medium text-3xl origin-left duration-200 ${!open && "scale-0"
              }`}
          >
            CryptoMania
          </h1>
        </div>
      </Link>
      <ul className="pt-6 ">
        <Link to={"/"}>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-xl font-medium items-center gap-3 hover:bg-purple-700 hover:duration-300`}
          >
            <HomeIcon />
            <h1 className={`${!open && "hidden"}`}>Home</h1>
          </li>
        </Link>
        <Link to={"/Crypto"}>

          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-xl font-medium items-center gap-3 hover:bg-purple-700 hover:duration-300`}
          >
            <CurrencyBitcoinIcon />
            <h1 className={`${!open && "hidden"}`}>Cryptocurrency</h1>
          </li>
        </Link>
        <Link to={"/News"}>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-xl font-medium items-center gap-3 hover:bg-purple-700 hover:duration-300`}
          >
            <NewspaperIcon />
            <h1 className={`${!open && "hidden"}`}>News</h1>
          </li>
        </Link>
        <Link to={"/Exchange"}>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-xl font-medium items-center gap-3 hover:bg-purple-700 hover:duration-300`}
          >
            <CurrencyExchangeIcon />
            <h1 className={`${!open && "hidden"}`}>Exchange</h1>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
