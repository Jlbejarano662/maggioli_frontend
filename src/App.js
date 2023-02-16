import React from "react";
import { BrowserRouter } from "react-router-dom";
// styles
import "./App.css"

// Components
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

// Routes
import AllRoutes from "./routes/Routes";

function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
