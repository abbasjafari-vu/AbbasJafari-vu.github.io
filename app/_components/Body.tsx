"use client";

import { Children } from "_types";
import { useParams } from "next/navigation";
import React from "react";

type Props = Children;
export default function Body(props: Props) {
  const { children } = props;
  const { lang } = useParams();

  return (
    <body
      className={`relative w-screen overflow-x-hidden flex flex-col min-h-screen ${
        lang === "fa" ? "font-dana" : "font-marko"
      }`}
      dir={lang === "fa" ? "rtl" : "ltr"}
    >
      {children}
    </body>
  );
}
