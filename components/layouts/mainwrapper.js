import React from "react";
import PageWrapper from "./pagewrapper";

const MainWrapper = ({ children }) => {
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
    </main>
  );
};

export default MainWrapper
