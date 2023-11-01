"use client";

import React from "react";
import Logo from "./Logo";
import LocateSwicher from "./LocateSwicher";
import SocialIcons from "./SocialIcons";
import { useParams } from "next/navigation";

export default function Header() {
  const { lang } = useParams();
  return (
    <header className="bg-primary-dark1" dir={lang === "fa" ? "rtl" : "ltr"}>
      <div className="max-w-content flex flex-wrap items-center gap-4 py-5">
        <Logo />

        <LocateSwicher />

        <SocialIcons />
      </div>
    </header>
  );
}
