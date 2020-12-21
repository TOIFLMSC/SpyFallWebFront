import React from "react";
import { Redirect, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { ApplicationState } from "../../store/";
import { AppRoute } from "../../const";

interface Props {
  path: string;
  render: (props: any) => any;
}

const PrivateRoute = ({ path, render }: Props) => {
  console.log(path);
  const isAuthenticated = localStorage.getItem('token');
  // const isAuthenticated = useSelector(
  //   (state: ApplicationState) => state.user.isAuthenticated
  // );
  console.log(isAuthenticated);
  return (
    <Route
      path={path}
      exact
      render={(routeProps) =>
        isAuthenticated ? render(routeProps) : <Redirect to={AppRoute.LOGIN} />
      }
    />
  );
};

export default PrivateRoute;
