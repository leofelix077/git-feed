import React, { useState } from "react";
import { useGetReposQuery, Repository } from "../graphql/graphql";
import { SearchBar } from "./SearchBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: { flex: 1 },
}));

const ReposContainer: React.FC = (): ReturnType<React.FC> => {
  const [queryString, setQueryString] = useState("");
  const classes = useStyles();

  const { data, error, loading } = useGetReposQuery({
    variables: {
      repos: 10,
      queryString,
    },
    skip: !queryString,
  });

  console.log(loading, data);

  const handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): any => {
    setQueryString(event.target.value);
  };

  return (
    <div className={classes.container}>
      {loading && <div> loading ....</div>}
      {error && <div> error ....</div>}
      <SearchBar handleChange={handleTextChange} value={queryString} />
      {data &&
        data.search.edges &&
        data.search.edges.map((repo) => (
          <div>
            {repo && repo.node ? (repo.node as Repository).forkCount : ""}
          </div>
        ))}
    </div>
  );
};

export default ReposContainer;
