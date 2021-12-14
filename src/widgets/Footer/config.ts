import { GITHUB, INSTAGRAM, TELEGRAM, TWITTER } from "../../constants/images";

export const aboutData = {
  title: "About",
  links: [{ name: "Docs", url: "/" }],
};

export const tokenData = {
  title: "Token",
  links: [
    { name: "Token Metrics", url: "/" },
    { name: "Litepapper", url: "/" },
    { name: "Claim YAY", url: "/" },
  ],
};

export const companyData = {
  title: "Company",
  links: [
    { name: "Backers & Partners", url: "/" },
    { name: "Help Center", url: "/" },
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
