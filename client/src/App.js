import React, { useState } from 'react';
import AddTrips from './AddTrips';
import './App.css'
import data from './data';
import Home from './homePage';


function App() {

  const [showHome, setShowHome] = useState(true);
  const [showAddTrips, setShowAddTrips] = useState(false);

  const onHomeClick = function () {
    setShowHome(showHome => true)
    setShowAddTrips(showAddTrips => false)

  }
  const onAddTripsClick = function () {
    setShowHome(showHome => false)
    setShowAddTrips(showAddTrips => true)

  }

  return (
    <div className="App">
      <div className="header">
        <nav className="navbar">
          <div className="navBarLink" onClick={onHomeClick}>Home</div>
          <div className="navBarLink" onClick={onAddTripsClick}>Add Trips</div>
        </nav>
      </div>
      {showHome && <Home data={data} />}
      {showAddTrips && <AddTrips />}
    </div>
  );
}

export default App;
