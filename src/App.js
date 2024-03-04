import About from "./components/About";
import AddRestaurant from "./components/AddRestaurant";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import RestaurantDetails from "./components/RestaurantDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<RestaurantDetails />} />
        <Route path="/add" element={<AddRestaurant />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
