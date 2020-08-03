/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

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

export const SearchBar: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();

  const { t } = useTranslation("feed");

  return (
    <div className={classes.searchFieldContainer}>
      <TextField
        className={classes.searchField}
        id="place"
        label="URL"
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
        onChange={(event) => console.log(event)}
        value="dummy"
      />
    </div>
  );
};
