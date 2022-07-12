import type { NextPage } from "next";
import * as FoodMakeSunday from "../src/data/weeksFoodMakeData/Sunday";
import * as FoodMakeMonday from "../src/data/weeksFoodMakeData/Monday";
import * as FoodMakeTuesday from "../src/data/weeksFoodMakeData/Tuesday";
import * as FoodMakeWednesDay from "../src/data/weeksFoodMakeData/Wednesday";
import * as FoodMakeThursday from "../src/data/weeksFoodMakeData/Thursday";
import * as FoodMakeFriday from "../src/data/weeksFoodMakeData/Friday";
import * as FoodMakeSaturday from "../src/data/weeksFoodMakeData/Saturday";
import * as FoodNameSunday from "../src/data/weeksFoodNameData/Sunday";
import * as FoodNameMonday from "../src/data/weeksFoodNameData/Monday";
import * as FoodNameTuesday from "../src/data/weeksFoodNameData/Tuesday";
import * as FoodNameWednesDay from "../src/data/weeksFoodNameData/Wednesday";
import * as FoodNameThursday from "../src/data/weeksFoodNameData/Thursday";
import * as FoodNameFriday from "../src/data/weeksFoodNameData/Friday";
import * as FoodNameSaturday from "../src/data/weeksFoodNameData/Saturday";
import * as FoodMaterialSunday from "../src/data/weeksFoodMaterialData/Sunday";
import * as FoodMaterialMonday from "../src/data/weeksFoodMaterialData/Monday";
import * as FoodMaterialTuesday from "../src/data/weeksFoodMaterialData/Tuesday";
import * as FoodMaterialWednesDay from "../src/data/weeksFoodMaterialData/Wednesday";
import * as FoodMaterialThursday from "../src/data/weeksFoodMaterialData/Thursday";
import * as FoodMaterialFriday from "../src/data/weeksFoodMaterialData/Friday";
import * as FoodMaterialSaturday from "../src/data/weeksFoodMaterialData/Saturday";
import { WeeksData } from "../src/component/WeeksData/WeeksData";

const Home: NextPage = () => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  var hour = date.getHours(); // 時
  const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
  const Weeks = () => {
    switch (dayOfWeekStr) {
      case "日":
        return (
          <WeeksData
            name={FoodNameSunday}
            hour={hour}
            make={FoodMakeSunday}
            material={FoodMaterialSunday}
          />
        );
      case "月":
        return (
          <WeeksData
            name={FoodNameMonday}
            hour={hour}
            make={FoodMakeMonday}
            material={FoodMaterialMonday}
          />
        );
      case "火":
        return (
          <WeeksData
            name={FoodNameTuesday}
            hour={hour}
            make={FoodMakeTuesday}
            material={FoodMaterialTuesday}
          />
        );
      case "水":
        return (
          <WeeksData
            name={FoodNameWednesDay}
            hour={hour}
            make={FoodMakeWednesDay}
            material={FoodMaterialWednesDay}
          />
        );
      case "木":
        return (
          <WeeksData
            name={FoodNameThursday}
            hour={hour}
            make={FoodMakeThursday}
            material={FoodMaterialThursday}
          />
        );
      case "金":
        return (
          <WeeksData
            name={FoodNameFriday}
            hour={hour}
            make={FoodMakeFriday}
            material={FoodMaterialFriday}
          />
        );
      case "土":
        return (
          <WeeksData
            name={FoodNameSaturday}
            hour={hour}
            make={FoodMakeSaturday}
            material={FoodMaterialSaturday}
          />
        );
    }
  };
  return (
    <div style={{ backgroundColor: "red" }}>
      {/* <ParallaxHorizontalScrollPage /> */}
      <p>hesder</p>
      {Weeks()}
    </div>
  );
};

export default Home;
