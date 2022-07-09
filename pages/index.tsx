import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as Sunday from "../src/data/weeksdata/Sunday";
import * as Monday from "../src/data/weeksdata/Monday";
import * as Tuesday from "../src/data/weeksdata/Tuesday";
import * as WednesDay from "../src/data/weeksdata/Wednesday";
import * as Thursday from "../src/data/weeksdata/Thursday";
import * as Friday from "../src/data/weeksdata/Friday";
import * as Saturday from "../src/data/weeksdata/Saturday";
import { WeeksData } from "../src/component/WeeksData/WeeksData";

const Home: NextPage = () => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  var hour = date.getHours(); // 時
  const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
  console.log(dayOfWeekStr);
  const Weeks = () => {
    switch (dayOfWeekStr) {
      case "日":
        return <WeeksData day={Sunday} hour={hour} />;
      case "月":
        return <WeeksData day={Monday} hour={hour} />;
      case "火":
        return <WeeksData day={Tuesday} hour={hour} />;
      case "水":
        return <WeeksData day={WednesDay} hour={hour} />;
      case "木":
        return <WeeksData day={Thursday} hour={hour} />;
      case "金":
        return <WeeksData day={Friday} hour={hour} />;
      case "土":
        return <WeeksData day={Saturday} hour={hour} />;
    }
  };
  return <div>{Weeks()}</div>;
};

export default Home;
