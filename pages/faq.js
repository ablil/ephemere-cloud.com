import React from "react";
import MainWrapper from "../components/layouts/mainwrapper";
import PageHeader from "../components/layouts/PageHeader";

const faq = () => {
  return (
    <MainWrapper>
      <PageHeader className="bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="pb-24">
          <h1 className="text-center font-bold text-3xl">FAQ</h1>
          <p>Frequently Asked Questions !</p>
        </div>
      </PageHeader>

      <section className="max-w-md bg-white text-black relative -top-8 p-12 mx-auto shadow-2xl rounded-lg">
        <article>
          <div className="my-8">
            <strong>How do I use EphemereCloud ?</strong>
            <article className="text-gray-500">
              Upload a file, set a password to protected it, set a timer for the
              file before it got removed, click on upload and share the
              generated link with your friends.
            </article>
          </div>

          <div className="my-8">
            <strong>How long does a file remain stored in the cloud ?</strong>
            <article className="text-gray-500">
              Each file is deleted after 1 hour if you do not specify a timer
              for it.
            </article>
          </div>

          <div className="my-8">
            <strong>What is the file size limit ?</strong>
            <article className="text-gray-500">
              You can upload up to 100Mb.
            </article>
          </div>
        </article>
      </section>
    </MainWrapper>
  );
};

export default faq;
