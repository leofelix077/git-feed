import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

interface ErrorProps {
  error: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  textContainer: {
    justifyContent: "center",
    display: "flex",
    padding: theme.spacing(2),
  },
  text: {
    color: "red",
  },
  innerContainer: {
    padding: theme.spacing(2),
  },
  imageContainer: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
}));

export const Error: React.FC<ErrorProps> = ({
  error,
}): ReturnType<React.FC<ErrorProps>> => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.innerContainer}>
        <div className={classes.imageContainer}>
          <img
            src="https://img.icons8.com/cute-clipart/64/000000/error.png"
            alt="error"
          />
        </div>
        <div className={classes.textContainer}>
          <Typography className={classes.text}>{error}</Typography>
        </div>
      </div>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};
