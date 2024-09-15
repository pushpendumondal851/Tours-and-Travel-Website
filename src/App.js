import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import BookNow from './Pages/BookNow/BookNow';
import Bookings from './Pages/BookNow/Bookings';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="item/:state/:name" element={<ItemDetails />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="booknow" element={<BookNow />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
