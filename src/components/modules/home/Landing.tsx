import React from "react";
import homeBg from "@/src/assets/home-bg.jpg";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";
import { title } from "../../primitives";

const Landing = () => {
  return (
    <div style={{
      backgroundImage:`url("${homeBg.src}")`
    }} className="bg-fixed w-full  bg-no-repeat bg-cover">
      <div className="flex flex-col items-center px-8 py-8 md:p-20 w-full text-center justify-center backdrop-blur-sm bg-[#0000006b] selection:bg-[#ffffff1a]">
        <h1 className={title()}>Search Lost Items!</h1>
        <p className="mt-2 mb-8 max-w-2xl text-sm text-[#ffffff51]">Discover FoundX – the platform where lost items are reported and reunited with their owners. Whether you've misplaced something or found a valuable item, we're here to help connect the dots and bring it back to where it belongs. Report, search, and find – all in one place!</p>
      <Input
          classNames={{
            base: "max-w-full w-1/2 h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </div>
    </div>
  );
};

export default Landing;
