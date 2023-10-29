"use client";
import Link from "next/link";
import React from "react";

import { BsWhatsapp, BsGithub } from "react-icons/bs";

export default function SocialIcons() {
  return (
    <div className="flex gap-3 items-center text-xl md:text-2xl">
      <Link href="https://github.com/abbasjafari-vu">
        <BsGithub />
      </Link>
      <Link href="">
        <BsWhatsapp />
      </Link>
    </div>
  );
}
