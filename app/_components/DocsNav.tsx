"use client";
import React, { useState } from "react";
import tw from "tailwind-styled-components";
import MyDocuments from "./MyDocuments";
import NavCategories from "./NavCategories";
import { categories, posts } from "_appData";
import Button from "./Button";
import { useParams } from "next/navigation";
import Link from "next/link";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";

export default function DocsNav() {
  const { lang, category, post } = useParams();
  const [openMenu, setOpenMenu] = useState(false);

  const categoriesData = categories(lang.toString());
  const postsData = posts;

  return (
    <nav className={`sticky top-0 z-50 ${category ? "" : "hidden"}`}>
      <div className="max-w-content relative">
        <NavContainer className={openMenu ? "start-0" : "-start-64"}>
          <MyDocuments />

          <NavCategories>
            {categoriesData.map(({ title, slug }, index) => (
              <Button key={"category-" + index} href={`/${lang}/docs/${slug}`}>
                {title}
              </Button>
            ))}
          </NavCategories>

          <NavPosts>
            {postsData.map(({ title, slug }, index) => (
              <Link
                key={"post-" + index}
                href={`/${lang}/docs/${category}/${slug}`}
                className={`py-3 ${
                  post === slug
                    ? "bg-primary-dark2 rounded-s-full px-5 -me-4"
                    : ""
                }`}
                onClick={() => setOpenMenu(false)}
              >
                {title}
              </Link>
            ))}
          </NavPosts>
        </NavContainer>
        <button
          className={`fixed bottom-5 text-2xl text-primary-green duration-300 lg:hidden ${
            openMenu ? "start-52" : "start-5"
          } ${lang === "en" ? "rotate-180" : ""}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
        </button>
      </div>
    </nav>
  );
}

const NavContainer = tw.div`w-64 duration-300 absolute lg:start-4 xl:start-0 h-screen py-5 px-4 lg:ps-0 xl:ps-0 flex flex-col gap-5 bg-primary-dark1`;
const NavPosts = tw.div`flex flex-col`;
