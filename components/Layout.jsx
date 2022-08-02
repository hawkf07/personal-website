import React from "react";
import { Navbar } from "./Navbar";
import {Footer} from './Footer'
export function Layout({ children }) {
  return (
    <div className="dark:bg-gray-800 min-h-[100vh] dark:text-white">
      <Navbar />
      {children}
    <Footer/>
    </div>
  );
}
