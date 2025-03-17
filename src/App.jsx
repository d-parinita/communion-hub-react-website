import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./pages/Event";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import EventDetails from "./pages/EventDetails";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/eventDetails/:id" element={<EventDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
