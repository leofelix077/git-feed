import React from "react";
import { Repository } from "../graphql/graphql";
import PropTypes from "prop-types";

interface RepoItemProps {
  repo: Repository;
}

const RepoItem: React.FC<RepoItemProps> = ({
  repo,
}): ReturnType<React.FC<RepoItemProps>> => {
  return <div>{JSON.stringify(repo)}</div>;
};

RepoItem.propTypes = {
  repo: PropTypes.any.isRequired,
};
