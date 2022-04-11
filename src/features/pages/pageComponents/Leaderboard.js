import React from "react";

import CardHeader from "../cardComponents/CardHeader";
import Awards from "../cardComponents/Awards";
import LeaderboardCard from "../cardComponents/LeaderboardCard";

import { useSelector } from "react-redux";
import { getUserPointsArr } from "../../users/usersSlice";

import { Container } from "react-bootstrap";

function Leaderboard() {
  const users = useSelector(getUserPointsArr);

  //Sort Users into ranking
  const sortedUsers = users.sort((a, b) => {
    return b.totalPoints - a.totalPoints;
  });

  const mapRankings = sortedUsers.map((user, i) => {
    const ranking = i + 1;
    const {
      id,
      firstName,
      lastName,
      avatar,
      questions,
      answers,
      likes,
      totalPoints,
    } = user;

    return (
      <Container
        fluid
        key={id}
        className="p-0 blur-bg text-light mb-1 rounded-3"
      >
        <CardHeader
          avatar={avatar}
          name={`${firstName} ${lastName}`}
          text={null}
          subComp={<Awards ranking={ranking} />}
        />
        <LeaderboardCard
          questions={questions}
          answers={answers}
          likes={likes}
          totalPoints={totalPoints}
        />
      </Container>
    );
  });

  return (
    <Container fluid className="p-0">
      {mapRankings}
    </Container>
  );
}

export default Leaderboard;
