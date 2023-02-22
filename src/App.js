import "./App.css";
import AllCountries from "./components/views/AllCountries";
import ByRegion from "./components/views/ByRegion";
import ByName from "./components/views/ByName";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import OneCountry from "./components/views/OneCountry";

function App() {
  return (
    <div className="App">
      <Header />
      {/* show the Header component, then add the routes to the pages components*/}
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/by-region" element={<ByRegion />} />
        <Route path="/by-name" element={<ByName />} />
        <Route path="/country/:code" element={<OneCountry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
