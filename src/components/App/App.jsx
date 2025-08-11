import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import AboutMe from "../AboutMe/AboutMe";
import AboutUs from "../AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
