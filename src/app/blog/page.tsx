"use client"; // 👈 use it here

import React from "react";

export default function Page() {

  const basicFunction = () => {};

  React.useEffect(() => {
    basicFunction();
  }, []);

  return (
    <div>
      <h1> Hi Anupama </h1>
    </div>
  );
}
