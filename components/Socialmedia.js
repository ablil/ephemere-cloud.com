import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { trackShareOnSocialMedia } from "../lib/gtm";

const quote = "Use Ephemere cloud to share files with your friends";
const url = "https://ephemere-cloud.com/";
const hashtag = "#ephemerecloud";
const Socialmedia = () => {
  return (
    <section id="socialmedia" className="fixed flex flex-col">
      <WhatsappShareButton
        url={url}
        title={quote}
        onClick={() => trackShareOnSocialMedia("whatsapp")}
      >
        <WhatsappIcon size={40} />
      </WhatsappShareButton>
      <FacebookShareButton
        url={url}
        quote={quote}
        hashtag={hashtag}
        onClick={() => trackShareOnSocialMedia("facebook")}
      >
        <FacebookIcon size={40} />
      </FacebookShareButton>
      <RedditShareButton
        url={url}
        title={quote}
        onClick={() => trackShareOnSocialMedia("reddit")}
      >
        <RedditIcon size={40} />
      </RedditShareButton>
      <TwitterShareButton
        url={url}
        title={quote}
        onClick={() => trackShareOnSocialMedia("twitter")}
      >
        <TwitterIcon size={40} />
      </TwitterShareButton>
      <TelegramShareButton
        url={url}
        title={quote}
        onClick={() => trackShareOnSocialMedia("telegram")}
      >
        <TelegramIcon size={40} />
      </TelegramShareButton>
    </section>
  );
};

export default Socialmedia;
