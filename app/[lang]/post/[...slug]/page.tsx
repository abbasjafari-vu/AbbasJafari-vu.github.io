import { PortableText } from "@portabletext/react";
import { Code } from "_components/sanity-block";
import api from "_controls/api";
import { Params, SearchParams } from "_types";
import React from "react";

type Props = Params & SearchParams;
export default async function PostPage(props: Props) {
  const { params } = props;

  const post = await api(`/post/${params.slug[1]}`, params.lang);
  console.log(post);

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
