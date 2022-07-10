import React from "react";

export const MorningMake = (props: any) => {
  const MoningMenu = props.make;
  console.log(MoningMenu);
  return (
    <div>
      <h1>作り方</h1>
      <p style={{ textAlign: "center", fontSize: "1.8rem" }}>{MoningMenu}</p>
    </div>
  );
};

export const LunchMake = (props: any) => {
  const LunchMenu = props.make;
  return (
    <div>
      <h1>作り方</h1>
      <p style={{ textAlign: "center", fontSize: "1.8rem" }}>{LunchMenu}</p>
    </div>
  );
};
export const DinnerMake = (props: any) => {
  const DinnerMenu = props.make;
  console.log(DinnerMenu);
  return (
    <div>
      <h1>作り方</h1>
      <p style={{ textAlign: "center", fontSize: "1rem" }}>{DinnerMenu}</p>
    </div>
  );
};
