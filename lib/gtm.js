import * as gtag from "./gtag";

export function trackVisitFooterLinks(link) {
  gtag.event({
    action: "visit_footer_link",
    category: "link",
    label: link,
    value: "",
  });
}

export function trackSubmitForm() {
  gtag.event({
    action: "submit_form",
    category: "form",
    label: "",
    value: "",
  });
}

export function trackUpload(action, data) {
  gtag.event({
    action,
    category: "upload_process",
    label: "",
    value: data || "",
  });
}

export function trackDownload(action, data) {
  gtag.event({
    action,
    category: "download_process",
    label: "",
    value: data || "",
  });
}

export function trackShareOnSocialMedia(socialmedia) {
  gtag.event({
    action: "share",
    category: "social_media",
    label: "",
    value: socialmedia,
  });
}
