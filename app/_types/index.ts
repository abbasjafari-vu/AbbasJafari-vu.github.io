import { ReactNode } from "react";

export type Children = { children: ReactNode };

export type Params = {
  params: { lang: "en" | "fa"; slug: string[] };
};

export type SearchParams = { searchParams: { id: string } };
