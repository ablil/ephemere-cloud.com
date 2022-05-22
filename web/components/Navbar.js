import Link from "next/link";
import React from "react";
import { trackVisitFooterLinks } from "../lib/gtm";
import Brand from "./Brand";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full p-8">
      <article>
        <Brand />
      </article>
      <ul className="hidden md:flex items-center">
        <li className="px-2 hover:underline">
          <Link href="/faq" onClick={() => trackVisitFooterLinks("faq")}>
            FAQ
          </Link>
        </li>
        <li className="px-2 hover:underline">
          <Link
            href="/privacypolicy"
            onClick={() => trackVisitFooterLinks("privacy-policy")}
          >
            Privacy Policy
          </Link>
        </li>
        <li className="px-2 hover:underline">
          <Link
            href="/contactus"
            onClick={() => trackVisitFooterLinks("contact-us")}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
