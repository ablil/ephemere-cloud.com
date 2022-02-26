import React from "react";
import PageWrapper from "../components/layouts/pagewrapper";

const contactus = () => {
  return (
    <PageWrapper>
      <div className="h-72 bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center">
        <h1 className="text-white text-5xl">Contact Us</h1>
      </div>

      <section className="relative -top-12 w-8/12 p-8 max-w-96 shadow-lg bg-black mx-auto">
        <h1 className="text-center text-white text-3xl">Contact Us</h1>

        <article>
          <form className="flex flex-col" onSubmit="typescript;">
            <input
              className="border-b-2 outline-none border-white bg-transparent w-96 p-4 mx-auto"
              type="text"
              placeholder="name"
            />
            <input
              type="email"
              placeholder="email"
              className="border-b-2 outline-none border-white bg-transparent w-96 p-4 mx-auto"
            />
            <input
              type="text"
              placeholder="subject"
              className="border-b-2 outline-none border-white bg-transparent w-96 p-4 mx-auto"
            />
            <textarea
              className="border-b-2 outline-none border-white bg-transparent w-96 p-4 mx-auto"
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="description"
            />

            <button className="custom-button w-56 mx-auto" disabled={true}>
              submit
            </button>
          </form>
        </article>
      </section>
    </PageWrapper>
  );
};

export default contactus;
