import RightSideBar from "@/components/RightSideBar";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Ankit", lastName: "Tiwari", email:"ankitiwari26@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access or manage your account and transaction efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.53}
          />
        </header>
        Recent Transactions
      </div>
      <RightSideBar user={loggedIn} 
      transactions={[]} 
      banks={[{},{}]}/>
      
    </section>
  );
};

export default Home;
