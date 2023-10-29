import api from "_controls/api";
import { Params } from "_types";
import Link from "next/link";
import React from "react";

type Props = Params;
export default async function PostList(props: Props) {
  const { params } = props;

  const data = await api("/posts", params.lang);

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
