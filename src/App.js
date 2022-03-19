import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import UponLogin from "./containers/UponLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/uponlogin" element={<UponLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
