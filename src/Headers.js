import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import WindowMenu from "./components/WindowMenu";
const Header = React.lazy(() => import("./components/Header"));

export default () => {
  const modal = useSelector((state) => state.timer.modal);
  const location = useLocation();

  if (location.pathname === "/Add") {
    return (
      <header>
        <WindowMenu />
      </header>
    );
  }

  if (modal[0]) {
    return (
      <header style={{ backgroundColor: "unset" }}>
        <WindowMenu />
      </header>
    );
  }

  return (
    <React.Suspense fallback={<div>Loading..</div>}>
      <Header />
    </React.Suspense>
  );
};
