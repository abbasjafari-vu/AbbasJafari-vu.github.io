"use client";

import "_styles/globals.css";
import { Children } from "_types";

type Props = Children;
export default function AdminLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
