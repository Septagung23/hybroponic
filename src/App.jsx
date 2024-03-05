import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/history" exact element={<History />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
