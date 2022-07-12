import React from "react";
import Image from "next/image";

export const MorningMake = (props: any) => {
  const MoningMenu = props.make;
  console.log(MoningMenu);
  return (
    <div>
      <h1>作り方</h1>
      <p style={{ textAlign: "center", fontSize: "1.8rem" }}>
        {MoningMenu.make}
      </p>
      <dd
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
          margin: "0 auto",
        }}
      >
        <Image src={MoningMenu.img} width={100} height={100} layout="fill" />
      </dd>
    </div>
  );
};

export const LunchMake = (props: any) => {
  const LunchMenu = props.make.make;
  return (
    <div>
      <h1>作り方</h1>
      <dl>
        {LunchMenu.map((item: { first: string; imgfirst: string }) => {
          return (
            <>
              <dt>{item.first}</dt>
              <dd
                style={{
                  position: "relative",
                  width: "200px",
                  height: "200px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={item.imgfirst}
                  width={100}
                  height={100}
                  layout="fill"
                />
              </dd>
            </>
          );
        })}
      </dl>
    </div>
  );
};

export const DinnerMake = (props: any) => {
  const DinnerMenu = props.make.make;
  return (
    <div>
      <h1>作り方</h1>
      <dl>
        {DinnerMenu.map((item: { first: string; imgfirst: string }) => {
          return (
            <>
              <dt>{item.first}</dt>
              <dd
                style={{
                  position: "relative",
                  width: "200px",
                  height: "200px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={item.imgfirst}
                  width={100}
                  height={100}
                  layout="fill"
                />
              </dd>
            </>
          );
        })}
      </dl>
    </div>
  );
};
