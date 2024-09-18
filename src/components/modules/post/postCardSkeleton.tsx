import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export const PostCardSkeleton = () => (
    <Card>
      <CardHeader>
        <div className="w-full flex items-center gap-3">
          <div>
            <Skeleton className="flex rounded-full w-12 h-12" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="space-y-3 mb-4">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
        </div>
        <div className="grid gap-4 grid-cols-2">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <Skeleton className="w-full mt-4 rounded-lg">
          <div className="h-3 w-full rounded-lg bg-default-200"></div>
        </Skeleton>
      </CardBody>
    </Card>
  );