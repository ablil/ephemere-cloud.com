import React from "react";
import PageWrapper from "../components/layouts/pagewrapper";

const faq = () => {
  return (
    <PageWrapper>
      <div className="h-72 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
        <h1 className="text-white text-5xl">FAQ</h1>
      </div>

      <section className="relative -top-12 w-8/12 p-8 max-w-96 shadow-lg bg-black mx-auto">
        <h1 className="text-center text-white text-3xl">
          Fequently Asked Questions
        </h1>

        <article>
          <div>
            <article className="question">How do I use EphemereCloud ?</article>
            <article className="answers">
              Upload a file, set a password to protected it, set a timer for the
              file before it got removed, click on upload and share the
              generated link with your friends.
            </article>
          </div>

          <div>
            <article className="question">
              How long does a file remain stored in the cloud ?
            </article>
            <article className="answers">
              Each file is deleted after 1 hour if you do not specify a timer
              for it.
            </article>
          </div>

          <div>
            <article className="question">
              What is the file size limit ?
            </article>
            <article className="answer">You can upload up to 100Mb.</article>
          </div>
        </article>
      </section>
    </PageWrapper>
  );
};

export default faq;
