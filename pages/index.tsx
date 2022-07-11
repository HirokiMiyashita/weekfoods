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
          <WeeksData name={FoodNameSunday} hour={hour} make={FoodMakeSunday} />
        );
      case "月":
        return (
          <WeeksData name={FoodNameMonday} hour={hour} make={FoodMakeMonday} />
        );
      case "火":
        return (
          <WeeksData
            name={FoodNameTuesday}
            hour={hour}
            make={FoodMakeTuesday}
          />
        );
      case "水":
        return (
          <WeeksData
            name={FoodNameWednesDay}
            hour={hour}
            make={FoodMakeWednesDay}
          />
        );
      case "木":
        return (
          <WeeksData
            name={FoodNameThursday}
            hour={hour}
            make={FoodMakeThursday}
          />
        );
      case "金":
        return (
          <WeeksData name={FoodNameFriday} hour={hour} make={FoodMakeFriday} />
        );
      case "土":
        return (
          <WeeksData
            name={FoodNameSaturday}
            hour={hour}
            make={FoodMakeSaturday}
          />
        );
    }
  };
  return <div>{Weeks()}</div>;
};

export default Home;
