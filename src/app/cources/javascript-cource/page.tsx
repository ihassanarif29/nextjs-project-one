import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

import courcesData from "@/data/dev_cources.json";

function page() {
  return (
    <div className="h-full md:h-full w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-8  relative z-10 w-full text-center">
        <h1 className="mt-120 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400">
          {courcesData.courses[0].title}
        </h1>
        <p className="p-8 mt-4 font-normal text-base md:text-lg text-neutral-100  mx-auto">
          {courcesData.courses[0].courseDetails}
        </p>
        <div className="mt-4">
          <Link href={"/cources"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
