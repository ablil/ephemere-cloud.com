import Link from "next/link";
import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <main>
      <header id="main">
        <h1 href="/" id="brand">
          <span>Ephemere</span>
          <span>Cloud</span>
        </h1>
        <article id="little-description">
          <p>Share files with your friend in a volatile cloud.</p>
          <p>
            Protect your files with a password and set a timer for removal.
          </p>
        </article>
      </header>

      <section>{children}</section>

      <footer>
        <article>
          <a href="#">privacy policy</a>
          <a href="#">contact us</a>
          <a href="#">FAQ</a>
        </article>
        <article>&copy; 2022 ephemere, All rights reserverd.</article>
      </footer>
    </main>
  );
};

export default PageWrapper;
