import { enableIndexedDbPersistence } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Container from "../../components/layouts/container";
import PageWrapper from "../../components/layouts/pagewrapper";
import { getdownloadUrl, lookupfile } from "../../services/storage";

const File = () => {
  const router = useRouter();
  const { identifier } = router.query;

  const [locked, setLocked] = useState(true);
  const [removed, setRemoved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [password, setPassword] = useState("");
  const [metadata, setMetadata] = useState({
    name: "",
    created: new Date(),
    size: 0,
    contentType: "application/octet-stream",
    link: "#",
    password: "",
    isSecured: false,
  });

  useEffect(() => {
    setError(undefined);
    if (identifier) {
      lookupfile(identifier)
        .then((res) => {
          console.log("metadata", res);
          return res;
        })
        .then((res) => {
          setMetadata({
            name: res.customMetadata.filename,
            created: new Date(res.timeCreated) || new Date(),
            ttl: parseInt(res.customMetadata.ttl),
            size: res.size,
            contentType: res.contentType,
            password: res.customMetadata.password,
            isSecured: res.customMetadata.isSecured === "true",
          });
          setLocked(res.customMetadata.isSecured === "true");
          setRemoved(
            calcualtettl(res.customMetadata.ttl, new Date(res.timeCreated)) <= 0
          );
        })
        .then((_) => getdownloadUrl(identifier))
        .then((url) => setMetadata((old) => ({ ...old, link: url })))
        // .catch(() => router.push("/404"))
        .finally(() => setLoading(false));
    } else {
      setError("sorry there is not file, it seems you are lost !");
      setLoading(false);
    }
    return () => {
      setError("");
      setLoading(true);
    };
  }, [identifier]);

  const unlockFile = (evt) => {
    evt.preventDefault();
    setError("");
    if (password === metadata.password) {
      setLocked(false);
    } else {
      setError("Invalid password !");
    }
  };
  const calcualtettl = (ttl, created) => {
    const now = new Date().getTime();
    const expiration = created.getTime() + ttl * 60000;
    console.log("now:", now.toString());
    console.log("expiration: ", expiration.toString());

    console.log(expiration - now);

    return Math.floor(expiration - now) / 60000;
  };

  if (loading) {
    return (
      <PageWrapper>
        <Container>loading ...</Container>
      </PageWrapper>
    );
  } else {
    if (locked) {
      return (
        <PageWrapper>
          <Container>
            <header
              style={{
                fontSize: "1.5rem",
              }}
            >
              <strong className="text-sky-600">File is locked !</strong>
            </header>
            <form onSubmit={unlockFile}>
              <section>
                <h1
                  style={{
                    fontWeight: "normal",
                    maxWidth: "25rem",
                    margin: "auto",
                  }}
                >
                  This file is protected with a password, you need to type
                  correct password to unlock
                </h1>
                <input
                  style={{
                    borderBottom: "1px solid white",
                  }}
                  className="outline-none border-none p-4 border-b-2 bg-transparent"
                  type="password"
                  value={password}
                  placeholder="**************"
                  onChange={(evt) => setPassword(evt.target.value)}
                />
                {error && (
                  <div
                  className="text-center text-red-400"
                  >
                    {error}
                  </div>
                )}
              </section>

              <footer>
                <div>
                  <button className="custom-button">Unlock</button>
                </div>
              </footer>
            </form>
          </Container>
        </PageWrapper>
      );
    } else if (removed) {
      return (
        <PageWrapper>
          <Container>
            <header
              style={{
                fontSize: "1.5rem",
              }}
            >
              <strong>Not found !</strong>
            </header>
            <section>
              <h1
                style={{
                  fontWeight: "normal",
                  maxWidth: "25rem",
                  margin: "auto",
                }}
              >
                This file has been removed after reaching its end of life !
              </h1>
            </section>
            <footer>
              <div>
                <a href="/" className="custom-button">
                  Upload new file
                </a>
              </div>
            </footer>
          </Container>
        </PageWrapper>
      );
    } else {
      return (
        <PageWrapper>
          <Container>
            <header
              style={{
                fontSize: "1.5rem",
              }}
            >
              <strong>Congratulations ! </strong>
              <span style={{ fontWeight: "normal" }}>
                You have access to shared file
              </span>
            </header>
            <section>
              <article className="info">
                <span>Filename</span>
                <strong>{metadata.name}</strong>
              </article>
              <article className="info">
                <span>File Size</span>
                <strong>{metadata.size} bytes</strong>
              </article>
              <article className="info">
                <span>Content Type</span>
                <strong>{metadata.contentType}</strong>
              </article>
              <article className="info">
                <span>Uploaded</span>
                <strong>{metadata.created.toString()}</strong>
              </article>
              <article className="info">
                <span>Time left before removal</span>
                <strong>
                  {calcualtettl(metadata.ttl, metadata.created)} minutes
                </strong>
              </article>
            </section>

            <footer>
              <div>
                <a
                  href={metadata.link}
                  className="custom-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to download
                </a>
              </div>
              <div>
                <Link href={"/"}>Upload new file</Link>
              </div>
            </footer>
          </Container>
        </PageWrapper>
      );
    }
  }
};

export default File;
