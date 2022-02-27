import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import Brand from "../components/Brand";
import Navbar from "../components/Navbar";

const Upload = () => {
  const [fileChanged, setFileChanged] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [files, setFiles] = useState([]);
  const [password, setPassword] = useState("");
  const [timer, setTimer] = useState(15);
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("ephemerecloud.com/file/jsd98lkas");

  const totalSize = useMemo(
    () =>
      files.map((f) => f.size).reduce((a, b) => a + b, 0) / (1024 * 1024) || 0,
    [files]
  );
  const expiration = useMemo(
    () =>
      new Date(new Date().getTime() + timer * 60000).toLocaleDateString(
        "en-US",
        {
          hour: "numeric",
          minute: "numeric",
        }
      ),
    [timer]
  );

  const handleFilechange = (evt) => {
    const files = evt.target.files;
    if (files && files.length) {
      setFiles((old) => old.concat(Array.from(files)));
      setFileChanged(true);
    }
  };

  const handleUpload = (evt) => {
    evt.preventDefault();
    setUploaded(true);
    setFileChanged(false);
  };

  const calcFileSize = (siteInBytes) => {
    return siteInBytes ? siteInBytes / (1024 * 1024) : 0;
  };

  const removeFile = (file) => {
    setFiles((old) => old.filter((f) => f !== file) || []);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link || "");
  };
  return (
    <main
      id="upload"
      className="w=screen h-screen text-white bg-gradient-to-r from-sky-500 to-indigo-500"
    >
      <Navbar />

      {/* hidden file input start */}
      <input
        type="file"
        id="file"
        name="file"
        className="hidden"
        onChange={handleFilechange}
        multiple={true}
      />
      {/* hidden file input end */}

      <header className="text-center py-4">
        <h1 className="font-semibold text-5xl tracking-wide">
          Share your files with friends
        </h1>
        <h2 className="text-3xl">Simple, fast and secure</h2>
      </header>

      {!fileChanged && !uploaded && (
        <div className="border-4 border-dashed border-white max-w-2xl rounded-3xl mx-auto">
          <section className="bg-white text-indigo-900 text-center max-w-2xl m-4 p-36 rounded-3xl shadow-xl">
            <label
              className="cursor-pointer"
              title="click to upload"
              htmlFor="file"
            >
              <Image
                src="/icons/upload.svg"
                height={70}
                width={70}
                alt="click to upload"
              />
            </label>
            <h2 className="font-semibold text-gray-900 text-3xl">
              Drop it here !
            </h2>
            <h3 className="font-semibold text-gray-500">Up to 100Mb</h3>
          </section>
        </div>
      )}

      {fileChanged && (
        <div className="mx-auto max-w-5xl flex text-black">
          <section className="bg-white rounded-xl p-4 max-w-sm m-4 w-full shadow-xl">
            <header className="border border-gray-500 rounded-lg p-2 flex items-center">
              <span className="text-xl text-black">{files.length} Files</span>
              <span className="text-gray-500 pl-2">
                {totalSize.toFixed(2)} MB
              </span>
              <label
                htmlFor="file"
                className="inline-block ml-auto cursor-pointer"
              >
                <Image src="/icons/plus.svg" height={30} width={30} alt="add" />
              </label>
            </header>

            <article className="hide-scrollbar overflow-y-scroll max-h-96">
              {files.map((f) => (
                <article
                  key={f.lastModified}
                  className="flex items-center my-2"
                >
                  <div className="w-10/12">
                    <div>{f.name}</div>
                    <div className="text-gray-500 text-xs">
                      {calcFileSize(f.size).toFixed(2)} MB
                    </div>
                  </div>
                  <div className="cursor-pointer inline-block ml-auto w-2/12">
                    <Image
                      onClick={() => removeFile(f)}
                      src="/icons/minus.svg"
                      height={20}
                      width={20}
                      alt="remove"
                    />
                  </div>
                </article>
              ))}
            </article>
          </section>

          <form
            onSubmit={handleUpload}
            className="bg-white rounded-xl h-96 p-4 max-w-ls text-black m-4 w-full shadow-xl"
          >
            <article className="py-4">
              <label htmlFor="password" className="block">
                Protect with a password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*****"
                className="outline-none border-b-2 w-72 border-gray-500"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                minLength={6}
                maxLength={50}
              />
            </article>
            <article className="py-4">
              <label htmlFor="timer" className="block">
                Set a timer (minute)
              </label>
              <input
                type="number"
                id="timer"
                placeholder="15"
                className="border-b-2 w-72 border-gray-500"
                min={5}
                max={60}
                value={timer}
                onChange={(evt) => setTimer(parseInt(evt.target.value))}
                required={true}
              />
            </article>
            <article className="py-4">
              <label htmlFor="message" className="block">
                Description
              </label>
              <textarea
                id="message"
                placeholder="type a message for the file reciever"
                className="outline-none border-b-2 w-full border-gray-500"
                min={5}
                height={60}
                value={description}
                onChange={(evt) => setDescription(evt.target.value)}
              />
            </article>
            <footer className="w-full p-4 bg-indigo-100 rounded-lg flex items-center">
              <span className="text-gray-500">Expires on {expiration}</span>
              <button
                type="submit"
                className="inline-block px-4 py-2 font-semibold text-white ml-auto rounded-lg bg-indigo-500 hover:bg-indigo-600"
              >
                Upload
              </button>
            </footer>
          </form>
        </div>
      )}

      {uploaded && (
        <div className="mx-auto max-w-md flex text-black">
          <section className="bg-white rounded-xl p-10 max-w-sm m-4 w-full shadow-xl text-center">
            <Image src="/images/uploaded.png" height={100} width={100} alt="" />
            <h1 className="text-black text-3xl my-4">Uploaded !</h1>
            <p className="text-gray-500">
              Your files has been uploaded successfully. Share the link with
              your friend so they can access them ;)
            </p>
            <footer className="w-full my-4 p-4 bg-indigo-100 rounded-lg flex items-center">
              <span className="font-semibold text-gray-500 text-sm">
                {link}
              </span>
              <span
                className="inline-block ml-auto cursor-pointer"
                onClick={copyToClipboard}
              >
                <Image
                  src="/icons/clipboard.svg"
                  height={25}
                  width={25}
                  alt="copy"
                />
              </span>
            </footer>
          </section>
        </div>
      )}
    </main>
  );
};

export default Upload;