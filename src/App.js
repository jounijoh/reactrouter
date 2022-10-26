import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutComponent from "./components/about";
import HomeComponent from "./components/home";
import ContactComponent from "./components/contact";
import NotFoundComponent from "./components/NotFoundComponent";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "black", color: "white" }}>
        <h1>Welcome to React Router</h1>
      </div>
      <BrowserRouter>
        <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
