"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Navigations = () => {
  const Router = useRouter();
  const HandleClick = () => {
    Router.replace("/");
    console.log(Router);
  };
  return (
    <div>
      <button onClick={HandleClick}>go to Home page</button>
    </div>
  );
};

export default Navigations;
