import { useState } from "react";
import { BrowserRouter, Routes, Route, matchPath, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import DataContext from "./contexts/DataContext";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [cityList, setCityList] = useState([]);

  return (
    <DataContext.Provider value={{ city, cityList,setCityList}}>
      <BrowserRouter>
        <header className="w-full">
          <Header />
        </header>
        <main className="">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/favorite" exact element={<Favorite />} />
          </Routes>
        </main>
        {cityList && JSON.stringify(cityList)}
        <footer className="">
          <Footer />
        </footer>
      </BrowserRouter>
      </DataContext.Provider>
  );
}

export default App;
