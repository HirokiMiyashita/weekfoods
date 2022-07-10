import React from "react";
import Image from "next/image";

export const MorningName = (props: any) => {
  const MoningMenu = props.name;
  return (
    <>
      <h1>料理名</h1>
      <p style={{ textAlign: "center", fontSize: "1.8rem" }}>
        {MoningMenu.main}
      </p>
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          margin: "0 auto",
        }}
      >
        <Image src={MoningMenu.img} width={100} height={100} layout="fill" />
      </div>
    </>
  );
};

export const LunchName = (props: any) => {
  const LunchMenu = props.name;
  return (
    <>
      <h1>料理名</h1>
      <p style={{ textAlign: "center", fontSize: "1.8rem" }}>
        {LunchMenu.main}
      </p>
      <div style={{ position: "relative", width: "100px", height: "100px" }}>
        <Image src={LunchMenu.img} width={100} height={100} layout="fill" />
      </div>
    </>
  );
};
export const DinnerName = (props: any) => {
  const DinnerMenu = props.name;
  return (
    <>
      <h1>料理名</h1>
      <div>
        <p style={{ textAlign: "center", fontSize: "1rem" }}>
          {DinnerMenu.main}
        </p>
        <p style={{ textAlign: "center", fontSize: "1rem" }}>
          {DinnerMenu.appetizer}
        </p>
        <p style={{ textAlign: "center", fontSize: "1rem" }}>
          {DinnerMenu.soup}
        </p>
      </div>
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          margin: "0 auto",
        }}
      >
        <Image src={DinnerMenu.img} width={100} height={100} layout="fill" />
      </div>
    </>
  );
};
