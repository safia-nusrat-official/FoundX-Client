import { PostCard } from "@/src/components/modules/post/postCard";
import { title } from "@/src/components/primitives";
import getRecentPosts from "@/src/services/recentPosts";
import { TItem } from "@/src/types/item.interface";

export default async function FoundItemsPage() {
  const data = await getRecentPosts();
  // throw new Error("data fetch failed!")
  return (
    <div className="text-center p-8 md:px-16 md:pb-12 w-full">
      <h1 className={title()}>Found Items</h1>
      <p className="mt-2 max-w-xl mx-auto text-sm text-[#ffffff51]">
        List of all items that have been found and reported.
      </p>

      <div className="grid mt-8 gap-4 grid-cols-1 md:grid-cols-3">
        {data &&
          data?.data?.length > 0 &&
          data?.data.map((item: TItem) => (
            <PostCard data={item} key={item._id}></PostCard>
          ))}
      </div>
    </div>
  );
}
