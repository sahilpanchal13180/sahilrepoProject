import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry The Page You Are Looking For Does Not Exit</p>
      <Link href="/">return Home</Link>
    </div>
  );
};

export default NotFound;
