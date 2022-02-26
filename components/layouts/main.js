import Link from "next/link";
import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <main className="w-11/12 max-w-6xl mx-auto">
      <header className="text-center my-8">
        <h1 className="flex justify-center italic text-6xl my-4">
          <span className="text-white">Ephemere</span>
          <span className="text-sky-600 font-bold">Cloud</span>
        </h1>
        <article className="text-white text-xl">
          <p>Share files with your friend in a volatile cloud.</p>
          <p>Protect your files with a password and set a timer for removal.</p>
        </article>
      </header>

      <section
        style={{
          margin: "auto",
        }}
      >
        {children}
      </section>

      <footer className="text-center m-auto">
        <article className="my-4">
          <a className="px-2 underline" href="#">privacy policy</a>
          <a className="px-2 underline" href="#">contact us</a>
          <a className="px-2 underline" href="#">FAQ</a>
        </article>
        <article>&copy; 2022 ephemere, All rights reserverd.</article>
      </footer>
    </main>
  );
};

export default PageWrapper;
