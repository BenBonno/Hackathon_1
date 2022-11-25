import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  matchPath,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="w-full fixed top-0 left-0 right-0 z-50">
        <Header />
      </header>
      <main className="">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/list" exact element={<MyList />} />
        </Routes>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
