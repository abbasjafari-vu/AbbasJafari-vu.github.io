"use client";
import MyDocuments from "_components/details/MyDocuments";
import Header from "_components/Header";
import { Children, Params } from "_types";
import { ReactNode, useState } from "react";
import tw from "tailwind-styled-components";

type Props = Children & Params & { homeNavigation: ReactNode };
export default function HomeLayout(props: Props) {
  const { children, params, homeNavigation } = props;

  const [more, setMore] = useState(false);

  return (
    <>
      <Header />

      <HomePage
        className={more ? "max-h-[2000px] pb-10" : "h-screen sm:h-author"}
      >
        {children}
        <ReadMore
          className={
            params.lang === "fa" ? "translate-x-1/2" : "-translate-x-1/2"
          }
          onClick={() => setMore(!more)}
        >
          {more ? "مطالب کمتر" : "مطالب بیشتر"}
        </ReadMore>
      </HomePage>

      <nav id="nav">
        <NavContainer>
          <MyDocuments />
          {homeNavigation}
        </NavContainer>
      </nav>
    </>
  );
}

const HomePage = tw.div` max-w-content my-5 sm:my-10 overflow-hidden relative duration-500`;
const NavContainer = tw.div`max-w-content py-5 grid grid-cols-2 sm:grid-cols-3 md:flex gap-3 items-center`;

const ReadMore = tw.button`absolute bottom-0 max-w-4xl w-full start-1/2 flex justify-center bg-gradient-to-t from-primary-dark2 to-primary-green/10 py-2.5 rounded-t-2xl `;
