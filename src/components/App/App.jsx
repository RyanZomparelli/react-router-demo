import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import AboutMe from "../AboutMe/AboutMe";
import AboutUs from "../AboutUs/AboutUs";
import MyStory from "../AboutMe/MyStory";
import Hobbies from "../AboutMe/Hobbies";
import Contact from "../AboutMe/Contact";
import SiteHistory from "../AboutUs/SiteHistory";
import SiteMission from "../AboutUs/SiteMission";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/AboutMe" element={<AboutMe />}>
          <Route path="MyStory" element={<MyStory />} />
          <Route path="Hobbies" element={<Hobbies />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
        <Route path="/AboutUs" element={<AboutUs />}>
          <Route path="SiteHistory" element={<SiteHistory />} />
          <Route path="SiteMission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
