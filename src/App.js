import "./App.css";
import Main from "./Main/Main";
import Contact from "./Contact/Contact";
import { Route, Routes, Navigate } from "react-router-dom";
import Projects from "./Main/Projects/Projects";
import Prices from "./Main/Prices/Prices";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
