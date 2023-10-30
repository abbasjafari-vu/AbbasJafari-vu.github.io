import { client } from "_sanity/lib/client";

export const getCategories = (lang: string) => {
  const query = `*[_type=="category_${lang}"]|order(number asc)`;
  return client.fetch(query);
};

export const getPosts = (lang: string) => {
  const query = `*[_type=="post_${lang}"]|order(number asc){title,number}`;
  return client.fetch(query);
};

export const getPost = (lang: string, postTitle: string) => {
  const query = `*[_type=="post_${lang}" && title=="${postTitle}"][0]`;
  return client.fetch(query);
};
