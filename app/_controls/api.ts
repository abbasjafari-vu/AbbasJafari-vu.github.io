const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const site_url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const api = (url: string, lang: string, option?: object) =>
  fetch(`${site_url}/${lang}/api${url}`, { headers, ...option }).then((res) =>
    res.json()
  );

export default api;
