"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";
import webinarsData from "@/data/webinars.json";

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Development Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={webinarsData.webinars
              .filter((webinar) => webinar.isFeatured)
              .map((featuredWebinar) => ({
                title: featuredWebinar.title,
                description: featuredWebinar.description,
                link: featuredWebinar.slug,
              }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All webinars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
