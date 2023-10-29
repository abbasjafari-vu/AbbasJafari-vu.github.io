"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function Logo() {
  const { lang } = useParams();
  return (
    <Link
      href={"/" + lang}
      className="font-moirai text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest me-auto"
    >
      <span className="text-primary-green">A</span>bbas
      <span className="text-primary-green ml-3">J</span>afari
    </Link>
  );
}
