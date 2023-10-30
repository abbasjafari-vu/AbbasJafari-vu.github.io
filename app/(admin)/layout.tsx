"use client";
import { Children } from "_types";
import React from "react";

export const dynamic = "force-static";

export default function AdminLayuot({ children }: Children) {
  return <>{children}</>;
}
