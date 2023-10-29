"use client";
import MyDocuments from "_components/details/MyDocuments";
import Header from "_components/Header";
import { Children, Params } from "_types";
import React, { ReactNode, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Button from "_components/details/Button";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

type Props = Children &
  Params & { categoryList: ReactNode; postList: ReactNode };
export default function PostLayout(props: Props) {
  const { children, categoryList, postList, params } = props;
  const [openCategory, setOpenCategory] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => setOpenCategory(false));
  }, []);

  return (
    <>
      <Header />
      <nav className="sticky top-0 bg-primary-dark1">
        <div className="max-w-content relative md:py-5">
          <Aside className={openMenu ? "start-4 pt-5" : "-start-64"}>
            <MyDocuments />

            <Categories onClick={() => setOpenCategory(!openCategory)}>
              <Button href="" className="pointer-events-none">
                {decodeURI(params.slug[0].toString())}
              </Button>
              <Icon>{openCategory ? <BsChevronUp /> : <BsChevronDown />}</Icon>
              <ListContainer className={openCategory ? "" : "h-0"}>
                <List>{categoryList}</List>
              </ListContainer>
            </Categories>

            <PostList>{postList}</PostList>
          </Aside>
        </div>
      </nav>
      <PostPage className="lg:ps-64">
        <div className="min-h-screen p-5 bg-primary-dark2">{children}</div>
      </PostPage>

      <ButtonMenu
        className={` ${openMenu ? "start-[14.5rem]" : "start-5"}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
      </ButtonMenu>
    </>
  );
}

const PostPage = tw.div`max-w-content`;
const Aside = tw.aside`w-64 lg:start-4 xl:start-0 bg-primary-dark1 pe-4 pb-10 absolute h-screen flex flex-col gap-5 duration-300`;
const Categories = tw.div`relative flex items-center justify-between cursor-pointer z-20`;
const Icon = tw.div`text-xl`;
const ListContainer = tw.div`absolute start-4 lg:start-0 w-full top-full overflow-hidden`;
const List = tw.div`bg-primary-dark2 p-4 rounded-xl grid grid-cols-2 gap-2`;
const PostList = tw.div`flex flex-col overflow-y-auto relative`;
const ButtonMenu = tw.button`fixed bottom-5 text-2xl duration-300 lg:hidden`;
