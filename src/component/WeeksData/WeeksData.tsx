import React from "react";
import { MenuType } from "../../data/TypeData";
import Image from "next/image";
// import { Dinner, Morning, Lunch } from '../../../.history/src/data/weeksdata/Saturday_20220710013028';

export const WeeksData = (props: any) => {
  const morning = 3 <= props.hour || props.hour >= 10;
  console.log(morning);
  const lunch = 11 | 12 | 13 | 14 | 15;
  const dinner = 16 | 17 | 18 | 19 | 20;
  const MoningMenu = props.day.Morning.menu;

  const Morning = () => {
    return (
      <>
        <p key={props.day.Morning.id}>{MoningMenu.main}</p>
        <div style={{ position: "relative", width: "100px", height: "100px" }}>
          <Image src={MoningMenu.img} width={100} height={100} layout="fill" />
        </div>
      </>
    );
  };
  const Lunch = () => {
    return (
      <>
        <p key={props.day.Morning.id}>{MoningMenu.main}</p>
        <div style={{ position: "relative", width: "100px", height: "100px" }}>
          <Image src={MoningMenu.img} width={100} height={100} layout="fill" />
        </div>
      </>
    );
  };
  const Dinner = () => {
    return (
      <>
        <p key={props.day.Morning.id}>{MoningMenu.main}</p>
        <div style={{ position: "relative", width: "100px", height: "100px" }}>
          <Image src={MoningMenu.img} width={100} height={100} layout="fill" />
        </div>
      </>
    );
  };
  // 4 <= hour && hour < 10
  console.log(props.hour);
  const Foodtime = () => {
    switch (true) {
      case 4 <= props.hour || props.hour >= 9:
        return <Morning />;
      case 10 <= props.hour || props.hour >= 14:
        return <Lunch />;
      case 15 <= props.hour || props.hour >= 20:
        return <Dinner />;
      default:
        return <p>食べるな殺すぞ</p>;
    }
  };
  return <div>{Foodtime()}</div>;
};
