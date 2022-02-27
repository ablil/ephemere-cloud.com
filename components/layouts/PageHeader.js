import Link from "next/link";
import React from "react";
import Navbar from "../Navbar";

const PageHeader = ({ children, className }) => {
  return (
    <section
      className={`pb-12 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white ${
        className || ""
      }`}
    >
      <Navbar />
      <section className="pt-20 pb-18">{children}</section>
    </section>
  );
};

export default PageHeader;