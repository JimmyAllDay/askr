import React from "react";
import LeaderboardUser from "./LeaderboardUser";

function Leaderboard(props) {
  const users = [...props.users];
  const sortedUsers = users.sort((a, b) => {
    return b.totalPoints - a.totalPoints;
  });

  console.log(sortedUsers);

  const mapRankings = sortedUsers.map((user) => {
    return (
      <LeaderboardUser
        key={user.id}
        name={`${user.firstName} ${user.lastName}`}
        id={user.id}
        avatar={user.avatar}
        questionsAsked={user.questionsAsked}
        questionsAnswered={user.questionsAnswered}
      />
    );
  });

  return (
    // Container
    <div className="w-50 mt-5 main-col home-background d-flex flex-column">
      <div className="w-100 main-header-background new-q-header-border">
        <h6 className="new-q-header-background my-auto">Leaderboard</h6>
      </div>
      <div className="px-2 pb-2 home-background">
        {/* Card Border */}
        {mapRankings}
      </div>
    </div>
  );
}

export default Leaderboard;
