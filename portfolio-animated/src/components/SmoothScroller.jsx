"use client";
import { useLenis } from "lenis/react";

const SmoothScroller = ({ children }) => {
  useLenis();
  return <div>{children}</div>;
};

export default SmoothScroller;
