import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import StocksPage from "./pages/StocksPage";
import Navbar from "./components/Navbar";
import RegistrationPage from "./pages/RegistrationPage";
import StockDetailsPage from './pages/StockDetailsPage';

function App() {
  return (

    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stocks" element={<StocksPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/stocks/:stockSymbol" element={<StockDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
