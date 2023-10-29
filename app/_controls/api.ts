const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const site_url = process.env.SITE_URL ?? "http://localhost:3000";

export default (url: string, lang: string, option?: object) =>
  fetch(site_url + "/" + lang + "/api" + url, { headers, ...option }).then(
    (res) => res.json()
  );