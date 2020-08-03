import React from "react";
import { useGetReposQuery } from "../graphql/graphql";
import { SearchBar } from "./SearchBar";

const ReposContainer: React.FC = (): ReturnType<React.FC> => {
  const { data, error, loading } = useGetReposQuery({
    variables: {
      repos: 10,
      queryString: "10",
    },
  });

  console.log(data);
  console.log(error);
  console.log(loading);

  return <SearchBar />;
};

export default ReposContainer;
