import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Auth from "./components/Auth";

function App() {
  return (
    <>
      <div className="login-content">
        <Routes>
          <Route path="/*" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
