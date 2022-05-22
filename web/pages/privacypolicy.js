import Link from "next/link";
import React from "react";
import MainWrapper from "../components/layouts/mainwrapper";
import PageHeader from "../components/layouts/PageHeader";
import { NextSeo } from "next-seo";

const privacypolicy = () => {
  return (
    <>
      <NextSeo
        title="Privacy Policy - Ephemere cloud"
        description=" Our Privacy Policy explains how we collect, use, disclose, and protect information that applies to our Service"
      />
      <MainWrapper>
        <PageHeader className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <div className="pb-24">
            <h1 className="text-center font-bold text-3xl">Privacy Policy</h1>
            <p></p>
          </div>
        </PageHeader>

        <section className="max-w-md bg-white text-black relative -top-8 p-12 mx-auto md:shadow-2xl rounded-lg">
          <strong className="py-2 block">
            We do not read your data or collect personal information
          </strong>
          <strong className="py-2 block">
            We do not use cookies or user profiles
          </strong>
          <article className="text-gray-500 py-2">
            We do however reserve the right to track usage with web analytics
            software such as Google Analytics using a cookies-free
            implementation.
          </article>
          <article className="text-gray-500 py-2">
            If you have any questions about the Privacy Policy, please{" "}
            <Link href="/contactus">Contact Us</Link>
          </article>
        </section>
      </MainWrapper>
    </>
  );
};

export default privacypolicy;
