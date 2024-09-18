import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import dayjs from "dayjs";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { TItem } from "@/src/types/item.interface";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

export const PostCard = ({ data }: { data: TItem }) => {
    return (
      <Card className="">
        <CardHeader className="justify-between gap-4">
          <div className="flex gap-4">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src={data?.user?.profilePhoto}
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-sm font-semibold leading-none text-default-600">
                {data.user.name}
              </h4>
              <h5
                className={`truncate max-w-32  text-xs tracking-tight text-default-400`}
              >
                {data.user.email}
              </h5>
            </div>
          </div>
          <Button
            className={"text-foreground border-default-200"}
            color="primary"
            radius="full"
            size="sm"
            variant={"solid"}
          >
            Claim
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
          <p>{data.description}</p>
          <Link className="pt-2">#{data.category.name}</Link>
          <span className="py-2" aria-label="location" role="img">
            📍{data.location}, {data.city}
          </span>
          <div className="flex items-stretch gap-4 my-2">
            {data.images?.map((image, index) => (
              <div className=" rounded-xl h-full w-full" key={index + 1}>
                <Image
                  alt="img"
                  className="object-cover aspect-square h-full object-center"
                  src={image}
                />
              </div>
            ))}
          </div>
        </CardBody>
        <CardFooter className="gap-3 justify-between flex-wrap">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-xs">
              {data.reportCount}
            </p>
            <p className=" text-default-400 text-xs">Claims</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-xs">
              {dayjs(data.dateFound, "YYYY-MM-DDTHH:mm:ss.000Z").format(
                "DD MMM YYYY"
              )}
            </p>
            {/* <p className="text-default-400 text-small">Date Found</p> */}
          </div>
        </CardFooter>
      </Card>
    );
  };