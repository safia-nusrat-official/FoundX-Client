import { PostCardSkeleton } from "@/src/components/modules/post/postCardSkeleton";
import { title } from "@/src/components/primitives";
import React from "react";

const loading = () => {
  return (
    <div className="text-center p-8 md:px-16 md:pb-12 w-full">
      <h1 className={title()}>Found Items</h1>
      <p className="mt-2 max-w-xl mx-auto text-sm text-[#ffffff51]">
        List of all items that have been found and reported.
      </p>

      <div className="grid mt-8 gap-4 grid-cols-1 md:grid-cols-3">
        {Array(6)
          .fill(1)
          .map((item, index) => (
            <PostCardSkeleton key={index + item}></PostCardSkeleton>
          ))}
      </div>
    </div>
  );
};

export default loading;
