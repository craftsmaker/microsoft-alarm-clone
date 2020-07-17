import React from "react";
import store from "./store";
import {
  HashRouter,
  Route,
  Redirect,
  useLocation,
  Switch,
} from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Provider } from "react-redux";
import Footer from "./Footers";
import Header from "./Headers";
import Global from "./globalStyles";

const Alarm = React.lazy(() => import("./screens/Alarm"));
const Timer = React.lazy(() => import("./screens/Timer"));
const Clock = React.lazy(() => import("./screens/Clock"));
const Stopwatch = React.lazy(() => import("./screens/Stopwatch"));
const Add = React.lazy(() => import("./screens/Add"));

const ORDER = ["/Alarm", "/Clock", "/Timer", "/Stopwatch"];

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AnimatedRoute />
      </HashRouter>
    </Provider>
  );
}

function AnimatedRoute() {
  let location = useLocation();
  
  let toScreenIndex = location?.state?.screenIndex;
  let fromScreen = location?.state?.fromScreen;

  let fromScreenIndex = 0;
  ORDER.forEach((value, index) => {
    if (value === fromScreen) {
      fromScreenIndex = index;
    }
  });

  const transitionLeft = {
    from: { transform: "translate3d(0%,0%,0)" },
    enter: { transform: "tranlate3d(0%,0%,0)" },
    leave: { transform: "translate3d(-100%,0%,0)" },
  };

  const transitionRight = {
    from: { transform: "translate3d(0%,0%,0)" },
    enter: { transform: "translate3d(0%,0%,0)" },
    leave: { transform: "translate3d(100%,0%,0)" },
  };
  let transitionConfig = transitionLeft;

  if (toScreenIndex < fromScreenIndex) transitionConfig = transitionRight;

  const transitions = useTransition(
    location,
    (location) => location.pathname,
    transitionConfig
  );
  return (
    <div className="container">
      <Global/>
      <Header />
      <div>
        {location.pathname !== "/Add" ? (
          transitions.map(({ item: location, props, key }) => (
            <animated.div key={key} style={props}>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Switch location={location}>
                  <Route exact path="/">
                    <Redirect to="/Timer" />
                  </Route>
                  <Route path="/Timer" component={Timer} />
                  <Route path="/Clock" component={Clock} />
                  <Route path="/Stopwatch" component={Stopwatch} />
                  <Route path="/Alarm" component={Alarm} />
                </Switch>
              </React.Suspense>
            </animated.div>
          ))
        ) : (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/Add" component={Add} />
            </Switch>
          </React.Suspense>
        )}
      </div>
      <Footer />
    </div>
  );
}
