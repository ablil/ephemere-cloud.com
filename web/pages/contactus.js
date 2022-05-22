import { NextSeo } from "next-seo";
import React, { useState } from "react";
import MainWrapper from "../components/layouts/mainwrapper";
import PageHeader from "../components/layouts/PageHeader";
import { trackSubmitForm } from "../lib/gtm";
import { submitform } from "core";

const Contactus = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
    trackSubmitForm();

    submitform(data)
      .then((res) => {
        setMessage("submited, thank you for you input.");
        // setData({ name: "", email: "", subject: "", description: "" });
      })
      .catch((err) => {
        // setError("failed to submit, please try again");
      });
  };
  return (
    <>
      <NextSeo
        title="Contact us - Ephemere cloud"
        description="You can get in touch with us by submitting to a form"
      />
      <MainWrapper>
        <PageHeader className="bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="pb-24">
            <h1 className="text-center font-bold text-3xl">Contact Us !</h1>
            <p>Do you wanna get in touch or request a new feature ... !</p>
          </div>
        </PageHeader>

        <section className="max-w-md bg-white text-black relative -top-8 p-12 mx-auto md:shadow-2xl rounded-lg">
          <article>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="border-b py-2">
                <input
                  className="outline-none w-full pt-2"
                  type="text"
                  placeholder="name"
                  value={data.name}
                  onChange={(evt) =>
                    setData((old) => ({ ...old, name: evt.target.value }))
                  }
                />
              </div>
              <div className="border-b py-2">
                <input
                  type="email"
                  placeholder="email"
                  className="outline-none w-full pt-2"
                  required={true}
                  value={data.email}
                  onChange={(evt) =>
                    setData((old) => ({ ...old, email: evt.target.value }))
                  }
                />
              </div>
              <div className="border-b py-2">
                <input
                  type="text"
                  placeholder="subject"
                  required={true}
                  className="outline-none w-full pt-2"
                  value={data.subject}
                  onChange={(evt) =>
                    setData((old) => ({ ...old, subject: evt.target.value }))
                  }
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
                  value={data.description}
                  onChange={(evt) =>
                    setData((old) => ({
                      ...old,
                      description: evt.target.value,
                    }))
                  }
                />
              </div>

              <button
                type="submit"
                className="mx-auto mt-8 inline-block px-8 py-2 tracking-wide text-white ml-auto rounded-lg bg-black hover:opacity-80 shadow-lg"
              >
                submit
              </button>
            </form>
          </article>
        </section>
      </MainWrapper>
    </>
  );
};

export default Contactus;
