// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersistentDrawerLeft from './Compnents/Drawer';
import Fli from './Compnents/flip';
import Sign from './Compnents/sign';
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleGetStarted = () => {
    setDrawerOpen(true);
  };

  return (
    <Router>
      {drawerOpen && <PersistentDrawerLeft />} {/* Render the persistent drawer if open */}
      <Routes>
        <Route
          index
          element={<Fli handleGetStarted={handleGetStarted} />} // Pass the handler to the landing page
        />
      </Routes>
    </Router>
    
    // <Sign/>
  );
}

export default App;
