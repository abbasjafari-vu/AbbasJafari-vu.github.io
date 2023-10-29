"use client";
import Button from "_components/details/Button";

export default () => (
  <>
    {[1, 1, 1, 1, 1].map(() => (
      <Button href="" className="shimmer pointer-events-none w-24 ">
        ...
      </Button>
    ))}
  </>
);
