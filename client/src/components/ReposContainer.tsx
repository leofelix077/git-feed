import React, { useState, useEffect } from "react";
import { useGetReposQuery, Repository } from "../graphql/graphql";
import { SearchBar } from "./SearchBar";
import { makeStyles, Typography, Link, Grid, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
import { useTranslation } from "react-i18next";
import { GITHUB_OAUTH_URL } from "../constants";
import GitHubIcon from "@material-ui/icons/GitHub";
import { RootState } from "../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { requestLogout, requestLogin } from "../redux/authState";

interface ReposContainerProps {
  queryStringProp?: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
  loadingText: {
    fontSize: 12,
    color: "white",
  },
  loginButton: {
    backgroundColor: "white",
    padding: theme.spacing(1),
    color: "black",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  loginText: {
    marginLeft: theme.spacing(1),
    color: "black",
  },
}));

const ReposContainer: React.FC<ReposContainerProps> = ({
  queryStringProp,
}): ReturnType<React.FC<ReposContainerProps>> => {
  const [queryString, setQueryString] = useState(queryStringProp || "");
  const classes = useStyles();
  const { t } = useTranslation("repoContainer");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(
    (state: RootState) => state.authState.isLoggedIn
  );
  const userInfo = useSelector((state: RootState) => state.authState.user);

  const { data, error, loading } = useGetReposQuery({
    variables: {
      repos: 10,
      queryString: `${
        userInfo ? `user:${userInfo.user.login}` : ""
      } ${queryString}`,
    },
    skip: !isLoggedIn,
    errorPolicy: "all",
  });

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    if (hasCode) {
      const splitUrl = url.split("?code=");
      window.history.pushState({}, "", splitUrl[0]);
      dispatch(requestLogin(splitUrl[1].slice(0, 20)));
    }
  }, [dispatch]);

  const handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): any => {
    setQueryString(event.target.value);
  };

  return (
    <div className={classes.container} key="repo-container">
      <SearchBar handleChange={handleTextChange} value={queryString} />
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ display: "flex" }}
      >
        {isLoggedIn ? (
          <Button onClick={() => dispatch(requestLogout())}>Logout</Button>
        ) : (
          <Link
            href={GITHUB_OAUTH_URL}
            type="button"
            className={classes.loginButton}
          >
            <GitHubIcon />
            <Typography className={classes.loginText}>
              Login with GitHub
            </Typography>
          </Link>
        )}
      </Grid>
      {loading && !error && (
        <Typography className={classes.loadingText}>{t("loading")}</Typography>
      )}
      {error && (
        <Typography className={classes.loadingText}>{error.message}</Typography>
      )}
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
