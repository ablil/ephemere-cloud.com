import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { downloadFile, listfiles, lookupfile } from "../../services/storage";

const Download = () => {
  const router = useRouter();
  const { identifier } = router.query;

  const [files, setFiles] = useState({
    password: "",
    locked: false,
    identifier: "",
    files: [],
    ttl: 15,
    description: "n/a",
    toExpire: new Date().toLocaleDateString(),
  });
  const [loading, setLoading] = useState(true);
  const [locked, setLocked] = useState(true);
  const [password, setPassword] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  const getDownloadLink = (file) => {
    return `https://firebasestorage.googleapis.com/v0/b/temporary-drive.appspot.com/o/${identifier}%2F${file.replaceAll(
      " ",
      "%20"
    )}?alt=media`;
  };

  useEffect(() => {
    if (identifier && identifier.length) {
      lookupfile(identifier)
        .then(async (res) => {
          const data = res.data();
          setFiles(data);
          setLocked(data.locked);
          setAttempts(0);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setNotFound(true);
          setAttempts(0);
          setLoading(false);
        });
    }
  }, [identifier]);

  const unlock = (evt) => {
    evt.preventDefault();
    if (password) {
      if (password === files.password) {
        setLocked(false);
        setAttempts(0);
        setShowWarning(false);
      } else {
        setLocked(true);
        setAttempts((old) => old + 1);
        setPassword("");
      }

      if (attempts >= 3) {
        setShowWarning(true);
      }
    }
  };

  return (
    <main
      id="upload"
      className="w=screen h-screen text-white bg-gradient-to-r from-sky-500 to-indigo-500"
    >
      <Navbar />

      <header className="text-center py-4">
        <h1 className="font-semibold text-5xl tracking-wide">
          Share your files with friends
        </h1>
        <h2 className="text-3xl">Simple, fast and secure</h2>
      </header>
      <div className="mx-auto max-w-5xl flex text-black px-2">
        <section className="bg-white rounded-xl p-4 max-w-xl mx-auto m-4 w-full shadow-xl">
          <h1 className="text-center text-2xl te">
            {loading
              ? "Loading ..."
              : locked
              ? "Unlock to access !"
              : "You have access to shared files !"}
          </h1>

          {!loading && locked && (
            <form onSubmit={unlock}>
              <p className="text-gray-500">
                This file(s) is protected with a password, type correct one to
                access.
              </p>
              <div className="border-b my-12 mx-4">
                <input
                  type="password"
                  placeholder="unlock"
                  className="block w-full py-1 outline-none"
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                  required={true}
                  minLength={6}
                />
              </div>
              <div className="w-full">
                <button
                  disabled={attempts >= 5}
                  type="submit"
                  className="m-auto block px-8 py-2 tracking-wide text-white ml-auto rounded-lg bg-black hover:opacity-80 shadow-lg"
                >
                  unlock
                </button>
              </div>
              {showWarning && (
                <div className="text-xs text-center pt-4 text-red-400">
                  You have {5 - attempts} before you get banned !
                </div>
              )}
            </form>
          )}

          {!loading && !locked && (
            <>
              <article className="py-2">
                <article>Total files:</article>
                <article className="text-gray-500">
                  {files.files.length} files
                </article>
              </article>
              <article className="py-2">
                <article>Available Until:</article>
                <article className="text-gray-500">{files.toExpire}</article>
              </article>
              <article className="py-2">
                <article>Description</article>
                <article className="text-gray-500">{files.description}</article>
              </article>
              <article className="py-2">
                <article>Files</article>
                <article className="text-gray-500">
                  {files.files.map((file) => (
                    <article key={file.size} className="flex items-center my-2">
                      <div className="w-10/12">
                        <div className="truncate" title={file.filename}>
                          {file.filename}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </div>
                      </div>
                      <div className="cursor-pointer flex-center inline-block ml-auto w-2/12">
                        <a
                          href={getDownloadLink(file.filename)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            title="click to download"
                            src="/icons/download.svg"
                            height={20}
                            width={20}
                            alt="remove"
                          />
                        </a>
                      </div>
                    </article>
                  ))}
                </article>
              </article>
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default Download;
