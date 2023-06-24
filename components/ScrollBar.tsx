"use client"
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

type Props = {};

const Scrollbar = (props: Props) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  let progressBarWidth = "0%";

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    progressBarWidth = `${Math.round(
      (100 * scrollY) / document.body.scrollHeight
    )}%`;
  }

  return (
    <ProgressBar
      style={{
        width: progressBarWidth,
        height: "3px",
        backgroundColor: "blue",
      }}
    />
  );
};

export default Scrollbar;
