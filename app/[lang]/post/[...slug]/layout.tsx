import Header from "_components/Header";
import { Children, Params } from "_types";
import React, { ReactNode } from "react";
import tw from "tailwind-styled-components";
import PostNavigation from "_components/post-navigation";

type Props = Children &
  Params & { categoryList: ReactNode; postList: ReactNode };
export default function PostLayout(props: Props) {
  const { children, categoryList, postList, params } = props;

  return (
    <>
      <Header />
      <PostNavigation
        params={params}
        postList={postList}
        categoryList={categoryList}
      />
      <PostPage>
        <PostContainer>{children}</PostContainer>
      </PostPage>
    </>
  );
}

const PostPage = tw.div`max-w-content lg:ps-64`;
const PostContainer = tw.div`min-h-screen p-5 bg-primary-dark2`;
