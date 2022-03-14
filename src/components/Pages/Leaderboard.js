import React from "react";

import CardHeader from "../CardComponents/CardHeader";
import Awards from "../CardComponents/Awards";
import LeaderboardCard from "../CardComponents/LeaderboardCard";

import { Container } from "react-bootstrap";

function Leaderboard(props) {
  const { users } = props;
  const usersArray = [...users];
  const sortedUsers = usersArray.sort((a, b) => {
    return b.totalPoints - a.totalPoints;
  });

  const mapRankings = sortedUsers.map((user, i) => {
    const {
      id,
      firstName,
      lastName,
      avatar,
      questionsAsked,
      questionsAnswered,
      totalLikes,
    } = user;
    const ranking = i + 1;
    return (
      <Container fluid key={id} className="p-0 bg-dark text-light mb-1">
        <CardHeader
          avatar={avatar}
          name={`${firstName} ${lastName}`}
          text={null}
          subComp={<Awards ranking={ranking} />}
        />

        <LeaderboardCard
          questionsAsked={questionsAsked}
          questionsAnswered={questionsAnswered}
          totalLikes={totalLikes}
        />
      </Container>
    );
  });

  return (
    // Container
    <Container fluid className="p-0">
      {mapRankings}
    </Container>
  );
}

export default Leaderboard;
