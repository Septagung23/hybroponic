import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/history" exact element={<History />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
