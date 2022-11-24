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
  const [count, setCount] = useState(0);

  return (
    <DataContext.Provider value={{ data, isLoading, setYear, year }}>
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
        <footer className="">
          <Footer />
        </footer>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
