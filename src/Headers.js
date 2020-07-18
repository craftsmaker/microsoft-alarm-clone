import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
const WindowMenu = React.lazy(() => import("./components/WindowMenu"));

export default () => {
  const modal = useSelector((state) => state.timer.modal);
  const location = useLocation();

  if (location.pathname === "/Add") {
    return (
      <Header>
        <React.Suspense fallback={<div></div>}>
          <WindowMenu />
        </React.Suspense>
      </Header>
    );
  }
  
  if (modal[0]) {
    return (
      <Header>
        <React.Suspense fallback={<div></div>}>
          <WindowMenu backgroundColor="black"/>
        </React.Suspense>
      </Header>
    );
  }

  return <Header />;
};
