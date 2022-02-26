import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "../layouts/container";
import { generateIdentifier, uploadFile } from "../services/storage";

const Upload = ({ beforeUpload, afterUpload }) => {
  const router = useRouter();
  const [filename, setFilename] = useState("");
  const [file, setFile] = useState();
  const [ttl, setTtl] = useState(15);
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (evt) => {
    const file = evt.target.files ? evt.target.files[0] : undefined;
    setFile(file);
    setFilename(file.name);
    setFlag(true);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    beforeUpload();

    if (!file) return setError("no file is uploaded !");
    if (file.size > 100 * 1024 * 1024)
      return setError("file is larger than 100Mb");

    setError("");
    setUploading(true);

    const identifier = generateIdentifier(7);
    uploadFile(file, { identifier, password: password || "", ttl: ttl || 15 })
      .then((res) => afterUpload(generateLink(identifier)))
      .then(() => setFlag(false))
      .catch((err) => console.error(err))
      .catch((err) => setError("failed to upload file"))
      .finally(() => {
        setUploading(false);
      });
  };

  const generateLink = (identifier) => {
    const protocol = window.location.protocol;
    const hostname = window.location.host;

    return `${protocol}//${hostname}/file/${identifier}`;
  };

  return (
    <Container>
      <form id="upload" onSubmit={onSubmit}>
        {flag ? (
          <section>
            <article className="info">
              <span>Filename</span>
              <strong>{filename || "n/a"}</strong>
            </article>
            <article className="info">
              <span>Protect with a Password</span>
              <input
                id="password"
                type="password"
                placeholder="***********"
                minLength={6}
                maxLength={30}
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </article>
            <article className="info">
              <span>Set timer for removal (minutes)</span>
              <input
                id="ttl"
                type="number"
                placeholder="15"
                max={60}
                min={0}
                value={ttl}
                onChange={(evt) => setTtl(evt.target.value)}
              />
            </article>

            {uploading && <article>uploading ...</article>}
            {!uploading && (
              <footer>
                <div>
                  <button className="custom-button" type="submit">
                    Upload
                  </button>
                </div>
                <div>
                  <a
                    onClick={(evt) => {
                      evt.preventDefault();
                      setFilename(undefined);
                      setPassword("");
                      setTtl(15);
                      setFlag(false);
                    }}
                  >
                    Upload another file !
                  </a>
                </div>
                {error && error.length && (
                  <div style={{ color: "red", textTransform: "capitalize" }}>
                    {error}
                  </div>
                )}
              </footer>
            )}
          </section>
        ) : (
          <section>
            <article>
              <Image
                src="/images/file.png"
                height={100}
                width={100}
                alt="upload file"
              />
              <p>Drag your documents, photos, or videos here.</p>
            </article>
            <article>- OR -</article>
            <article>
              <input
                id="file-upload"
                style={{
                  display: "none",
                }}
                type="file"
                onChange={handleChange}
                required={true}
                name="upload"
              />
              <label className="custom-button" htmlFor="file-upload">
                Browse files
              </label>
            </article>
          </section>
        )}
      </form>
    </Container>
  );
};

export default Upload;
