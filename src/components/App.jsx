import { Portfolio } from "./Portfolio/Portfolio";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import {TransactionHistory} from "./Transaction/TransactionHistory";

import userInfo from "./data-json/user.json";
import data from "./data-json/data.json";
import friends from "./data-json/friends.json";
import  transactions from "./data-json/transactions.json";

export const App = () => {
  return <div>
    <Portfolio userInfo={userInfo} />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
};


