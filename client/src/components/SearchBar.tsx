import React, { FormEvent } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

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

  const dispatch = useDispatch();

  const { t } = useTranslation("feed");

  return (
    <div className={classes.searchFieldContainer}>
      <form
        onSubmit={() => console.log("changeplace")}
        className={classes.form}
      >
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
        <div className={classes.buttonContainer}>
          <Button
            variant="outlined"
            type="submit"
            classes={{
              root: classes.buttonRoot,
            }}
          >
            {t("send")}
          </Button>
        </div>
      </form>
    </div>
  );
};
