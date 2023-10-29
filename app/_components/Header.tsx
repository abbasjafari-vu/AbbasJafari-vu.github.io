import Logo from "_components/details/Logo";
import React from "react";
import LocaleSwitcher from "./local-switcher";
import SocialIcons from "./SocialIcons";

export default function Header() {
  return (
    <header>
      <div className="max-w-content py-5 flex flex-wrap gap-2 sm:gap-5 items-center">
        <Logo />
        <LocaleSwitcher />
        <SocialIcons />
      </div>
    </header>
  );
}
