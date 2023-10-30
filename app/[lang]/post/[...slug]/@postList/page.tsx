import { getPosts } from "_appData";
import { Params } from "_types";
import Link from "next/link";
import React from "react";

type Props = Params;
export default async function PostList(props: Props) {
  const { params } = props;

  console.log(params);

  const data = await getPosts(params.lang);

  return (
    <>
      {data.map((item: any) => (
        <Link
          key={"post-title-" + item.number}
          href={`/${params.lang}/post/${params.slug[0]}/${item.title}`}
          className="py-2 flex flex-wrap"
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}
