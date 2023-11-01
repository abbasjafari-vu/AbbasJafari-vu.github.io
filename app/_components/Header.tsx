"use client";

import React from "react";
import Logo from "./Logo";
import LocateSwicher from "./LocateSwicher";
import SocialIcons from "./SocialIcons";

export default function Header() {
  return (
    <header className="bg-primary-dark1">
      <div className="max-w-content flex flex-wrap items-center gap-4 py-5">
        <Logo />

        <LocateSwicher />

        <SocialIcons />
      </div>
    </header>
  );
}
