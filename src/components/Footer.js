import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        icon={<GitHubIcon />}
        className={classes.root}
        target="_blank"
        href="https://github.com/TylerPMatthews"
      />
      <BottomNavigationAction
        icon={<LinkedInIcon />}
        className={classes.root}
        target="_blank"
        href="https://www.linkedin.com/in/tylerpmatthews/"
      />
      <BottomNavigationAction
        icon={<AccountBoxIcon />}
        className={classes.root}
        target="_blank"
        href="https://drive.google.com/file/d/1fGhma0pjn2N6onLNWB7xMyhE1wpJptb3/view?usp=sharing"
      />
    </BottomNavigation>
  );
};
export default Footer;
