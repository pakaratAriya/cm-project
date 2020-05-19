import React from "react";
import classes from "./Team.module.css";
import fonts from "../../../globalCss/Fonts.module.css";

const teamMember = [
  {
    image: "team-member-0.png",
    name: "Team Members",
    info: "Finding the best home for you.",
  },
  {
    image: "team-member-1.png",
    name: "Team Members",
    info: "Finding the best home for you.",
  },
  {
    image: "team-member-2.png",
    name: "Team Members",
    info: "Finding the best home for you.",
  },
  {
    image: "team-member-3.png",
    name: "Team Members",
    info: "Finding the best home for you.",
  },
  {
    image: "team-member-4.png",
    name: "Team Members",
    info: "Finding the best home for you.",
  },
  {
    image: "team-member-5.png",
    name: "Team Members",
    info: "Finding the best home for you.",
  },
];

const team = (props) => {
  return (
    <div className={classes.Team}>
      <div className={classes.TeamContainer}>
        {teamMember.map((g, index) => (
          <div
            key={index}
            className={[classes.TeamItem, fonts.Subtitle, fonts.Black].join(
              " "
            )}
            style={{
              backgroundImage:
                "url('/images/CastroTeam/" + teamMember[index].image + "')",
              backgroundSize: "cover",
            }}
          >
            {/* to replace the placeholder text in the image */}
            {/* <p className={classes.Name}>{teamMember[index].name}</p>
            <p className={classes.Info}>{teamMember[index].info}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default team;
