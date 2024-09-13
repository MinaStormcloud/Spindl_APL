import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";
import "./index.css";

const App = () => {
  
  return (
    <>      
      <Routes>
        <Route path="/" element={<Home />} />        
      </Routes>      
    </>
  );
};

export default App;