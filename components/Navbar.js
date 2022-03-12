import Link from "next/link";
import React from "react";
import Brand from "./Brand";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full p-8">
      <article>
        <Brand />
      </article>
      <ul className="hidden md:flex items-center">
        <li className="px-2 hover:underline">
          <Link href="/faq">FAQ</Link>
        </li>
        <li className="px-2 hover:underline">
          <Link href="/privacypolicy">Privacy Policy</Link>
        </li>
        <li className="px-2 hover:underline">
          <Link href="/contactus">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
