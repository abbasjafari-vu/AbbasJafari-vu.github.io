import { PortableText } from "@portabletext/react";
import { getPost } from "_appData";
import { Code } from "_components/sanity-block";
import { Params, SearchParams } from "_types";
import React from "react";

type Props = Params & SearchParams;
export default async function PostPage(props: Props) {
  const { params } = props;

  const postTitle = decodeURI(params.slug[1]);

  const post = await getPost(params.lang, postTitle);
  console.log(params);

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
