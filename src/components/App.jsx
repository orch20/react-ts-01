import { Portfolio } from "./Portfolio/Portfolio";
import userInfo from "user.json";

export const App = () => {
  return <div>
    <Portfolio userInfo= { userInfo } />
  </div>
};
