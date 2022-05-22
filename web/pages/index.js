import Image from "next/image";
import Link from "next/link";
import MainWrapper from "../components/layouts/mainwrapper";
import PageHeader from "../components/layouts/PageHeader";
import Socialmedia from "../components/Socialmedia";
import * as gtag from "../lib/gtag";
import { trackUpload } from "../lib/gtm";

export default function Home() {
  const ghandleUploadClick = (evt) => {
    console.log("click on upload");
    gtag.event({
      action: "click_upload",
      category: "",
      label: "",
      value: "",
    });
  };

  return (
    <MainWrapper>
      <PageHeader>
        <h1 className="text-7xl font-bold tracking-widest py-2">
          Volatile cloud drive
        </h1>
        <Socialmedia />
        <p className="text-3xl max-w-lg mx-auto">
          a place where you can share files with people, temporarly, securely
          and automatically deleted
        </p>
        <article className="my-12">
          <button
            onClick={ghandleUploadClick}
            className="inline-block px-8 py-2 tracking-wide text-black ml-auto rounded-lg bg-white hover:opacity-80 shadow-lg"
          >
            <Link
              href="/upload"
              onClick={() => trackUpload("click_upload", "")}
            >
              upload!
            </Link>
          </button>
        </article>
      </PageHeader>

      <section className="mt-16 max-w-6xl mx-auto">
        <header className="text-center text-4xl mb-12">How it works !</header>
        <div className="flex flex-col md:flex-row justify-evenly text-gray-500">
          <article className="max-w-xs mx-auto md:mx-2 my-2">
            <div className="h-16 flex items-center">
              <Image src="/icons/file.svg" height={80} width={80} alt="" />
            </div>
            <h1 className="text-black mb-4">
              1. <strong>Upload</strong>
            </h1>
            <p className="mb-4">
              You can upload any type of file, and number of files and up to{" "}
              <u>100MB</u>
            </p>
          </article>
          <article className="max-w-xs mx-auto md:mx-2 my-2">
            <div className="h-16 flex items-center">
              <Image src="/icons/lock.svg" height={80} width={80} alt="" />
            </div>
            <h1 className="text-black">
              2. <strong>Secure</strong>
            </h1>
            <p>
              You can protect your uploaded files with a <u>password</u>, so
              only the people who have it, can access !
            </p>
          </article>
          <article className="max-w-xs mx-auto md:mx-2 my-2">
            <div className="h-16 flex items-center">
              <Image src="/icons/timer.svg" height={80} width={80} alt="" />
            </div>
            <h1 className="text-black">
              3. <strong>Remove</strong>
            </h1>
            <p>
              If you are afraid that you will forget about your uploaded file,
              you can set a timer when it should be removed automatically and no
              longer accessible.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-16 mb-12 p-16 text-center text-white bg-gradient-to-r from-sky-500 to-indigo-500 max-w-6xl mx-auto ">
        <header className="text-center text-3xl mb-12">
          Upload using out Bot !
        </header>
        <Image src="/icons/telegram.svg" height={50} width={50} alt="" />
        <p className="max-w-md mx-auto text-xl">
          Send your files to Telegram bot account{" "}
          <strong>@ephemerecloud</strong> and we will reply with a link
          instantly
        </p>
      </section>
    </MainWrapper>
  );
}
