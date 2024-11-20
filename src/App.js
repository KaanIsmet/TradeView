import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import StocksPage from "./pages/StocksPage";
import Navbar from "./components/Navbar";

function App() {
  return (

    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stocks" element={<StocksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
