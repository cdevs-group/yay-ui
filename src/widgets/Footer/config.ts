import { GITHUB, INSTAGRAM, TELEGRAM, TWITTER } from "../../constants/images";

export const aboutData = {
  title: "About",
  links: [{ name: "Docs", url: "/", out: false }],
};

export const tokenData = {
  title: "Token",
  links: [
    { name: "Token Metrics", url: "/", out: false },
    { name: "Litepapper", url: "/", out: false },
    { name: "Claim YAY", url: "/", out: true },
  ],
};

export const companyData = {
  title: "Company",
  links: [
    { name: "Backers & Partners", url: "/", out: true },
    { name: "Help Center", url: "/", out: true },
  ],
};

export const socialData = {
  title: "Join the community",
  links: [
    { img: TWITTER, url: "/" },
    { img: TELEGRAM, url: "/" },
    { img: INSTAGRAM, url: "/" },
    { img: GITHUB, url: "/" },
  ],
};
