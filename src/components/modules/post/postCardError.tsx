import { Card, CardBody } from "@nextui-org/card";
import React from "react";

const PostCardError = () => {
  return (
    <Card className="border-red-500 p-4 border-2">
      <CardBody className="p-6 bg-[#49171787] rounded-lg flex flex-col items-center justify-center text-center">
        <AlertCircle />
        <h2 className="text-xl font-semibold text-gray-200 mt-4">
          Failed to Load Item
        </h2>
        <p className="text-gray-400 text-sm">
          There was an error loading this item's data. Please try again later.
        </p>
      </CardBody>
    </Card>
  );
};

const AlertCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="#49171787"
    stroke="#ef4444"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

export const PostErrorGrid = () => {
  return (
    <div className="grid mt-8 gap-4 grid-cols-1 md:grid-cols-3">
      {[...Array(6)].fill(1).map((item, index) => (
        <PostCardError key={index + item}></PostCardError>
      ))}
    </div>
  );
};
export default PostCardError;
