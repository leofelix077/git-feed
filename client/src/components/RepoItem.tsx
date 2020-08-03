import React from "react";
import { Repository } from "../graphql/graphql";
import PropTypes from "prop-types";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: theme.spacing(1),
    flexDirection: "column",
    borderRadius: 3,
    backgroundColor: "rgba(32,32,32,0.3)",
    margin: theme.spacing(1),
  },
  header: {
    fontSize: 16,
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: 10,
    color: "EDEDED",
  },
  url: {},
}));

interface RepoItemProps {
  repo: Pick<
    Repository,
    | "name"
    | "url"
    | "description"
    | "forkCount"
    | "createdAt"
    | "pushedAt"
    | "updatedAt"
  >;
}

const RepoItem: React.FC<RepoItemProps> = ({
  repo,
}): ReturnType<React.FC<RepoItemProps>> => {
  const classes = useStyles();

  return (
    <Grid container item className={classes.container}>
      <Link href={repo.url} target="_blank">
        {repo.name}
      </Link>
      <Typography className={classes.description} component="h6">
        {repo.description}
      </Typography>
    </Grid>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.any.isRequired,
};

export default RepoItem;
