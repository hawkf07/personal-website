import Link from "next/link";
import {useState} from 'react'

import { FaBars } from "react-icons/fa/";

function NavbarList() {
  return (
    <>
      <li className="mx-3">
        {" "}
        <a href="#">About Me</a>{" "}
      </li>
      <li className="mx-3 bg-blue-400 py-1 px-2 rounded">
        {" "}
        <a href="#">Contact Info</a>{" "}
      </li>
    </>
  );
}

export function Navbar() {
  const [isOpen,setIsOpen] = useState(false)


  const navbarOpenHandler = () => setIsOpen(!isOpen)

  return (
    <div className="h-[10vh]  shadow p-5" name="navbar">
      <nav className="flex justify-around  items-center w-full ">
        <a href="#" className="text-2xl">
          {" "}
          FIKRI{" "}
        </a>
        <section className="mobile:block hidden" onClick={() => navbarOpenHandler()} name="navbar-btn-toggle">
          <button>
            {" "}
            <FaBars />{" "}
          </button>
        </section>
        <section name="navbar-links" className="mobile:hidden block">
          <ul className="flex w-96 justify-end items-center ">
         <NavbarList/> 
          </ul>
        </section>
      </nav>
     <ul className={`${isOpen ? "" : "hidden"} text-center bg-gray-700 bg-opacity-50 absolute left-5 w-[90vw] overflow-x-none p-5 flex flex-col gap-3`}>
    <NavbarList/>
    </ul>
    </div>
  );
}
