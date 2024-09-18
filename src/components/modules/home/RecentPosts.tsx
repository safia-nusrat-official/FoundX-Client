import React, { Suspense } from "react";
import { title } from "../../primitives";
import getRecentPosts from "@/src/services/recentPosts";
import { PostCard } from "../post/postCard";
import { TItem } from "@/src/types/item.interface";
import PostGridSkeleton from "../post/postGridSkeleton";

const RecentPosts = async () => {
  const data = await getRecentPosts();
  // throw new Error("Data fetch failed!");
  return (
    <div className="px-8 py-8 md:p-20  text-center">
      <h1 className={title()}>Recently Found Items</h1>
      <p className="mt-2 mx-auto max-w-xl text-sm text-[#ffffff51]">
        A list of items that have been found and reported recetly.
      </p>

      {data && (
        <div className="grid mt-8 grid-cols-1 md:grid-cols-3">
          {data?.data?.length > 0 &&
            data?.data.map((item: TItem) => (
              <PostCard data={item} key={item._id}></PostCard>
            ))}
        </div>
      )}
    </div>
  );
};

export default RecentPosts;
