import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx"; // Import the About page
import Navbar from "./components/Navbar.jsx"; // Import the Navbar component
import Footer from "./components/Footer.jsx"; // Import the Footer component

function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component here */}
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/about" element={<About />} /> {/* Add the About route */}
      </Routes>
    <Footer /> {/* Add the Footer component here */}
    </Router>
  );
}

export default App;
