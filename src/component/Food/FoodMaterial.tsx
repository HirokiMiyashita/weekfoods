import React from "react";
import Image from "next/image";

export const MorningMaterial = (props: any) => {
  const Morning = props.material;
  console.log(Morning);
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: "2rem",
        borderRadius: "15px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        材料
      </h1>
      {Morning.material.map((item: any) => {
        return (
          <dl
            key={item.name}
            style={{
              width: "100%",
              borderBottom: "solid 1px black",
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "1rem",
            }}
          >
            <dt>{item.name}</dt>
            <dd>{item.num}</dd>
          </dl>
        );
      })}
      <dl></dl>
    </div>
  );
};

export const LunchMaterial = (props: any) => {
  const Lunch = props.material;
  console.log(Lunch);
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: "2rem",
        borderRadius: "15px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        材料
      </h1>
      {Lunch.material.map((item: any) => {
        return (
          <dl
            key={item.name}
            style={{
              width: "100%",
              borderBottom: "solid 1px black",
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "1rem",
            }}
          >
            <dt>{item.name}</dt>
            <dd>{item.num}</dd>
          </dl>
        );
      })}
      <dl></dl>
    </div>
  );
};

export const DinnerMaterial = (props: any) => {
  const Dinner = props.material;
  console.log(Dinner);
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: "2rem",
        borderRadius: "15px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        材料
      </h1>
      {Dinner.material.map((item: any) => {
        return (
          <dl
            key={item.name}
            style={{
              width: "100%",
              borderBottom: "solid 1px black",
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "1rem",
            }}
          >
            <dt>{item.name}</dt>
            <dd>{item.num}</dd>
          </dl>
        );
      })}
      <dl></dl>
    </div>
  );
};
