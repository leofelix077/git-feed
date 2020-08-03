import React from "react";
import { Repository } from "../graphql/graphql";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";

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
  return (
    <Grid
      container
      item
      style={{
        display: "flex",
        padding: 8,
        flexDirection: "column",
        borderRadius: 3,
        backgroundColor: "rgba(64,64,64,0.3)",
        margin: 8,
      }}
    >
      <Typography component="h6">Name: {repo.name}</Typography>
      <Typography component="h6">Description: {repo.description}</Typography>
      <Typography component="h6">Forks: {repo.forkCount}</Typography>
      <Typography component="h6">URL: {repo.url}</Typography>
    </Grid>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.any.isRequired,
};

export default RepoItem;
