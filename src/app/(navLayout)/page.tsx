import ErrorBoundary from "@/src/components/ErrorBoundary";
import Landing from "@/src/components/modules/home/Landing";
import RecentPosts from "@/src/components/modules/home/RecentPosts";
import PostCardError, {
  PostErrorGrid,
} from "@/src/components/modules/post/postCardError";
import PostGridSkeleton from "@/src/components/modules/post/postGridSkeleton";
import { title } from "@/src/components/primitives";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Landing></Landing>
      <ErrorBoundary
        fallback={
          <div className="px-8 w-full text-center py-8 md:p-20">
            <h1 className={title()}>Recently Found Items</h1>
            <p className="mt-2 mx-auto max-w-xl text-sm text-[#ffffff51]">
              A list of items that have been found and reported recetly.
            </p>
            <PostErrorGrid></PostErrorGrid>
          </div>
        }
      >
        <Suspense
          fallback={
            <div className="px-8 w-full text-center py-8 md:p-20">
              <h1 className={title()}>Recently Found Items</h1>
              <p className="mt-2 mx-auto max-w-xl text-sm text-[#ffffff51]">
                A list of items that have been found and reported recetly.
              </p>
              <PostGridSkeleton></PostGridSkeleton>
            </div>
          }
        >
          <RecentPosts></RecentPosts>
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
