import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <header className="w-full">
        <NavBar />
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
  );
}

export default App;
