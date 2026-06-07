"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

function TestimonialCards() {
  return (
    <div className="h-160 w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;

const testimonials = [
  {
    name: "Linus Torvalds",
    title: "Creator of Linux",
    quote: "Talk is cheap. Show me the code.",
  },
  {
    name: "Grace Hopper",
    title: "Computer Scientist",
    quote:
      "The most dangerous phrase in programming is: 'We've always done it this way.'",
  },
  {
    name: "Steve Jobs",
    title: "Co-founder of Apple",
    quote:
      "Everybody should learn to program a computer because it teaches you how to think.",
  },
  {
    name: "Martin Fowler",
    title: "Software Architect",
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code humans can understand.",
  },
  {
    name: "Bjarne Stroustrup",
    title: "Creator of C++",
    quote: "Programming is understanding.",
  },
  {
    name: "Donald Knuth",
    title: "Computer Scientist",
    quote: "Premature optimization is the root of all evil.",
  },
  {
    name: "Kent Beck",
    title: "Software Engineer",
    quote: "Make it work, make it right, make it fast.",
  },
  {
    name: "Robert C. Martin",
    title: "Software Engineer & Author",
    quote: "Truth can only be found in one place: the code.",
  },
  {
    name: "Bill Gates",
    title: "Co-founder of Microsoft",
    quote:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
  },
  {
    name: "Edsger Dijkstra",
    title: "Computer Scientist",
    quote: "Simplicity is prerequisite for reliability.",
  },
];
