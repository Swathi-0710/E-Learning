import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PersistentDrawerLeft from './Drawer';
import Contact from './Contact';
import Courses from './Courses';
import Teachers from './Teachers';
import Playlist from './Playlist';
import About from './About';
import Update from './Update';
import Fli from './flip';
import Summer from './Summer';

const RouterNew = () => {
  return (
    <div>
      {/* <PersistentDrawerLeft /> Render the persistent drawer */}
      <Routes>
         <Route index element={<Fli />} />
        <Route path="/*" element={<PersistentDrawerLeft />} />
        <Route path="/home" element={<Summer/>} />
        <Route path="/profile" element={<Update />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default RouterNew;
