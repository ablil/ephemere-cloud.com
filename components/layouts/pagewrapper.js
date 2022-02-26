import Link from "next/link";
import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <>
      <nav className="bg-black flex justify-center items-center text-white w-screen py-6 shadow-lg">
        <div>
          <h1 className="flex justify-center italic font-bold text-xl pr-56">
            <span className="text-white">Ephemere</span>
            <span className="text-sky-600 font-bold">Cloud</span>
          </h1>
        </div>
        <div className="pl-56 underline">
          <Link href="/">Home</Link>
          <span className="px-2"></span>
          <Link href="/contactus">Contact us</Link>
          <span className="px-2"></span>
          <Link href="/privacyppolicy">Privacy Policy</Link>
          <span className="px-2"></span>
          <Link href="/faq">FAQ</Link>
        </div>
      </nav>

      <section
        style={{
          margin: "auto",
        }}
      >
        {children}
      </section>

      <footer className="text-center m-auto">
        <article className="my-4">
          <a className="px-2 underline" href="#">
            privacy policy
          </a>
          <a className="px-2 underline" href="#">
            contact us
          </a>
          <a className="px-2 underline" href="#">
            FAQ
          </a>
        </article>
        <article>&copy; 2022 ephemere, All rights reserverd.</article>
      </footer>
    </>
  );
};

export default PageWrapper;
