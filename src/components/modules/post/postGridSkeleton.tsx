import React from "react";
import { PostCardSkeleton } from "./postCardSkeleton";

const PostGridSkeleton = () => (
  <div className="grid mt-8 gap-4 grid-cols-1 md:grid-cols-3">
    {[...Array(6)].fill(1).map((item, index) => (
      <PostCardSkeleton key={index + item}></PostCardSkeleton>
    ))}
  </div>
);

export default PostGridSkeleton;
