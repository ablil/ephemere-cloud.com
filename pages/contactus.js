import React from "react";
import MainWrapper from "../components/layouts/mainwrapper";
import PageHeader from "../components/layouts/PageHeader";

const contactus = () => {
  return (
    <MainWrapper>
      <PageHeader className="bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="pb-24">
          <h1 className="text-center font-bold text-3xl">Contact Us !</h1>
          <p>Do you wanna get in touch or request a new feature ... !</p>
        </div>
      </PageHeader>

      <section className="max-w-md bg-white text-black relative -top-8 p-12 mx-auto shadow-2xl rounded-lg">
        <article>
          <form className="flex flex-col" onSubmit="javascript;">
            <div className="border-b py-2">
              <input
                className="outline-none w-full pt-2"
                type="text"
                placeholder="name"
              />
            </div>
            <div className="border-b py-2">
              <input
                type="email"
                placeholder="email"
                className="outline-none w-full pt-2"
                required={true}
              />
            </div>
            <div className="border-b py-2">
              <input
                type="text"
                placeholder="subject"
                className="outline-none w-full pt-2"
              />
            </div>
            <div className="border-b py-2">
              <textarea
                className="outline-none w-full pt-2"
                name="description"
                id="description"
                cols="30"
                rows="5"
                placeholder="description"
              />
            </div>

            <button
              disabled={true}
              type="submit"
              className="mx-auto mt-8 inline-block px-8 py-2 tracking-wide text-white ml-auto rounded-lg bg-black hover:opacity-80 shadow-lg"
            >
              submit
            </button>
          </form>
        </article>
      </section>
    </MainWrapper>
  );
};

export default contactus;
