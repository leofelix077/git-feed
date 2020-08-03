import Home from "./components/Home";
import ReposContainer from "./components/ReposContainer";

export interface RouteConfig {
  public: boolean;
  exact?: boolean;
  icon?: any;
  path: string;
  search?: string;
  label?: string;
  component: any;
  key: string;
  topLevel?: boolean;
  translate: string;
  children?: { [key: string]: RouteConfig };
}

export interface Routes {
  [key: string]: RouteConfig;
}
const ROUTES: Routes = {
  home: {
    component: Home,
    path: "/home",
    public: true,
    label: "Home",
    exact: true,
    translate: "home",
    key: "home",
  },
  repos: {
    component: ReposContainer,
    path: "/repos",
    public: true,
    label: "Repos",
    exact: true,
    translate: "repos",
    key: "repos",
  },
};

export default ROUTES;
