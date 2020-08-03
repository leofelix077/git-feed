import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 16,
    padding: 16,
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
  },
  headerAnimation: {
    animation: `$nothingAnimation 3000ms ${theme.transitions.easing.easeInOut}`,
    fontSize: 64,
    color: "white",
  },
  subHeader: {
    opacity: 0,
    transform: "translateX(0)",
    fontSize: 32,
    color: "white",
    paddingTop: 32,
    padding: 4,
  },
  subHeaderAnimation: {
    animation: `$subHeaderAnimation 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
    opacity: 1,
    transform: "translateX(0) scale(1)",
  },
  "@keyframes nothingAnimation": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes subHeaderAnimation": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "85%": {
      opacity: 0.1,
      transform: "scale(1)",
    },
    "90%": {
      transform: "scale(1.95)",
    },
    "95%": {
      transform: "scale(2)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  textContainer: {
    padding: 16,
    borderRadius: 6,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    boxShadow: "rgba(0,0,0, 0.3) 0px 5px 2px",
  },
}));

const Home: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();

  const { t } = useTranslation("home");

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <Typography className={classes.headerAnimation}>
          {t("title")}
        </Typography>
      </div>
    </div>
  );
};

export default Home;
