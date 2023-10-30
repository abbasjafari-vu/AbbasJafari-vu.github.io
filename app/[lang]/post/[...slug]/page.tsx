import { PortableText } from "@portabletext/react";
import { getPost, getPosts } from "_appData";
import { Code } from "_components/sanity-block";
import { Params, SearchParams } from "_types";
import React from "react";

export async function generateStaticParams({ params }: Params) {
  return (await getPosts(params.lang)).map(({ title }: any) => ({
    slug: [title],
  }));
}

type Props = Params & SearchParams;
export default async function PostPage(props: Props) {
  const { params } = props;

  const postTitle = decodeURI(params.slug[1]);

  const post = await getPost(params.lang, postTitle);

  return (
    <PortableText
      value={post?.body}
      components={{
        types: {
          code: ({ value }) => <Code value={value} />,
        },
      }}
    />
  );
}
