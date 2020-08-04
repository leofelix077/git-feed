/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

interface SearchBarProps {
  handleChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  value: string;
}

const useStyles = makeStyles((theme) => ({
  searchField: {
    padding: theme.spacing(2),
  },
  searchFieldContainer: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textFieldRoot: {
    padding: 0,
  },
  input: {
    color: "white",
  },
  buttonContainer: {
    height: 24,
  },
  buttonRoot: {
    height: 28,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export const SearchBar: React.FC<SearchBarProps> = ({
  handleChange,
  value,
}): ReturnType<React.FC<SearchBarProps>> => {
  const classes = useStyles();
  const isLoggedIn = useSelector(
    (state: RootState) => state.authState.isLoggedIn
  );

  return (
    <div className={classes.searchFieldContainer}>
      <TextField
        className={classes.searchField}
        id="queryString"
        label="Search"
        type="search"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          className: classes.input,
        }}
        classes={{
          root: classes.textFieldRoot,
        }}
        onChange={handleChange}
        value={value}
        disabled={!isLoggedIn}
      />
    </div>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
