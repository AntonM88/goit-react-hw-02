import userData from "data/userData.json";
import friends from "data/friends.json";
import transactions from "data/transactions.json";
import { Profile, FriendList, TransactionHistory } from "components";

const App = () => {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
