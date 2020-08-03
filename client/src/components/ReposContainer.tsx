import React, { useState } from "react";
import { useGetReposQuery, Repository } from "../graphql/graphql";
import { SearchBar } from "./SearchBar";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

interface ReposContainerProps {
  queryStringProp?: string;
}

const useStyles = makeStyles(() => ({
  container: { flex: 1 },
}));

const ReposContainer: React.FC<ReposContainerProps> = ({
  queryStringProp,
}): ReturnType<React.FC<ReposContainerProps>> => {
  const [queryString, setQueryString] = useState(queryStringProp || "");
  const classes = useStyles();

  const { data, error, loading } = useGetReposQuery({
    variables: {
      repos: 10,
      queryString,
    },
    skip: !queryString,
  });

  const handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): any => {
    setQueryString(event.target.value);
  };

  return (
    <div className={classes.container} key="repo-container">
      {loading && <div> loading ....</div>}
      {error && <div> error ....</div>}
      <SearchBar handleChange={handleTextChange} value={queryString} />
      {data &&
        data.search.edges &&
        data.search.edges.map(
          (
            repo: any & {
              node: Pick<
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
          ) => <RepoItem key={repo.node.url} repo={repo.node} />
        )}
    </div>
  );
};

ReposContainer.propTypes = {
  queryStringProp: PropTypes.string,
};

ReposContainer.defaultProps = {
  queryStringProp: "",
};

export default ReposContainer;
