'use client'
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";


type Props = {}

const Scrollbar = (props: Props) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <ProgressBar
      style={{
        width: `${Math.round((100 * scrollY) / document.body.scrollHeight)}%`,
        height: "3px",
        backgroundColor: "blue",
      }}
    />
  );
}

export default Scrollbar