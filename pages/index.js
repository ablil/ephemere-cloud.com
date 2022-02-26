import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Upload from "../components/Upload";
import PageWrapper from "../layouts/main";

export default function Home() {
  const [downloadlink, setDownloadlink] = useState();
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const router = useRouter();

  const beforeUpload = () => {
    setUploading(true);
    setUploaded(false);
  };

  const afterUpload = (link) => {
    setDownloadlink(link);
    setUploaded(true);
    setUploading(false);
  };
  return (
    <PageWrapper>
      <Upload beforeUpload={beforeUpload} afterUpload={afterUpload} />

      {!uploading && uploaded && (
        <article id="downloadable-link">
          <h1>Share this link with your friends !</h1>
          <Link href={downloadlink || "/"}>{downloadlink}</Link>
        </article>
      )}
      <section id="how-to-use">
        <h2>What are the key feature of EphemereCloud</h2>
        <section>
          <article className="feature">
            <h3>
              <Image src="/images/filetype.png" height={70} width={70} alt="" />
              <span>File Type</span>
            </h3>
            <p>Share any file type with your friend, and upload up to 100Mb.</p>
          </article>
          <article className="feature">
            <h3>
              <Image src="/images/password.png" height={70} width={70} alt="" />
              <span>Security</span>
            </h3>
            <p>
              Protect your files with password, only people with password can
              access.
            </p>
          </article>
          <article className="feature">
            <h3>
              <Image src="/images/cloud.png" height={70} width={70} alt="" />
              <span>Privacy</span>
            </h3>
            <p>Set a time to remove the uploaded file automatically.</p>
          </article>
        </section>
      </section>
    </PageWrapper>
  );
}
