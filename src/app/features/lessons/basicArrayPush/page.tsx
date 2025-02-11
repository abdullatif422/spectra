"use client";
import React from "react";

interface BasicArrayPushPropTypes {}

function BasicArrayPush(props: BasicArrayPushPropTypes) {
  const [array, setArray] = React.useState<string[]>([]);
  const [newFruit, setNewFruit] = React.useState("");

  const handleOnChange = (event: any) => {
    setNewFruit(event.target.value);
  };

  const handleEnter = () => {
    console.log(newFruit);
    setArray((prev) => [...prev, newFruit]);
  };

  return (
    <div
      style={{
        marginLeft: 25,
      }}
    >
      <h1>This is Array Push page</h1>
      <input value={newFruit} onChange={handleOnChange} />
      <button onClick={handleEnter}>Enter</button>

      {array?.map((el: string, index: number) => {
        return (
          <div key={index}>
            <h3>{el}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default BasicArrayPush;
