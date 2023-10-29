"use client";

import tw from "tailwind-styled-components";

export default function Loading() {
  return (
    <>
      <Shimmer className="w-28">...</Shimmer>
      <Shimmer className="w-32">...</Shimmer>
      <Shimmer className="w-40">...</Shimmer>
      <Shimmer className="w-20">...</Shimmer>
      <Shimmer className="w-16">...</Shimmer>
    </>
  );
}

const Shimmer = tw.div`shimmer rounded-full px-5 py-1 mb-1 bg-primary-brown text-white flex items-center`;
