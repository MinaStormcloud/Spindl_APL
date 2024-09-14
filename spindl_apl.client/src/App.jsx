import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";
import About from "./pages/about/About";
import NavBar from "./components/navbar/NavBar";
import "./index.css";

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/about" element={<About />} />           
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;