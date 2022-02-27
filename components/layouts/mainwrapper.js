import Link from "next/link";
import React from "react";

const MainWrapper = ({ children }) => {
  return (
    <main className="w-full h-full font-light">
      <section className="">{children}</section>
      <footer className="p-12 font-light">
        <section className="mx-auto flex-center">
          <ul className="flex items-center">
            <li className="px-2 hover:underline">
              <Link href="/features">Features</Link>
            </li>
            <li className="px-2 hover:underline">
              <Link href="/privacypolicy">Privacy Policy</Link>
            </li>
            <li className="px-2 hover:underline">
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </section>
        <section className="flex items-center justify-between">
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
