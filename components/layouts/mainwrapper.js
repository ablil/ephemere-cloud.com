import Link from "next/link";
import React from "react";
import { trackVisitFooterLinks } from "../../lib/gtm";

const MainWrapper = ({ children }) => {
  return (
    <main className="w-full h-full font-light">
      <section className="">{children}</section>
      <footer className="p-12 font-light max-w-7xl mx-auto">
        <section className="mx-auto flex-center">
          <ul className="flex items-center">
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
        </section>
        <section className="flex flex-col md:flex-row items-center justify-between">
          <article>&copy; 2022 Copyright, All rights reserved.</article>
          <article>
            <strong>Ephemerecloud</strong>
          </article>
        </section>
      </footer>
    </main>
  );
};

export default MainWrapper;
