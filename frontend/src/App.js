import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Offers from './components/Offers/Offers';
import Hotels from './components/Hotels/Hotels';  // Import Hotels
import About from './components/Main/About';
import Contact from './components/Main/Contact';
import Booking from './components/Main/Booking';
import DestinationDetails from './components/Main/DestinationDetails';
import SignIn from './components/authenticator/SignIn';
import NotFound from './components/NotFound';
import SignUp from './components/authenticator/SignUp';
import  Packages from './components/Packages/Packages';
import Book from "./pages/Book/Book";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/hotels" element={<Hotels />} />  {/* Add Hotels route */}
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book" element={<Book />} />
    
        
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;