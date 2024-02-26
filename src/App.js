import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import RestaurantDetails from "./components/RestaurantDetails";
import { BrowserRouter as Router, Routes, Route, createHashRouter, RouterProvider } from "react-router-dom";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "details/:id",
//         element: <RestaurantDetails />,
//       },
//     ],
//   },
// ]);

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<RestaurantDetails />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
