import { Portfolio } from "./Portfolio/Portfolio";
import { Statistics } from "./Statistics/Statistics";
import userInfo from "./data-json/user.json";
import data from "./data-json/data.json";

export const App = () => {
  return <div>
    <Portfolio userInfo={userInfo} />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
  </div>
};


