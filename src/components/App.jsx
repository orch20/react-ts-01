import { InfoThumb } from "./InfoThumb/InfoThumb";
import userInfo from "user.json";

export const App = () => {
  return <div>
    <InfoThumb userInfo= { userInfo } />
  </div>
};
