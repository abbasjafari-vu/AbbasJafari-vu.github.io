"use client";
import Button from "_components/details/Button";

export default function Loading() {
  return (
    <>
      {[1, 1, 1, 1, 1].map((item, index) => (
        <Button
          key={`categoryList-loading-${index}`}
          href=""
          className="shimmer pointer-events-none w-24 "
        >
          ...
        </Button>
      ))}
    </>
  );
}
