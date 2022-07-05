
import AddTrips from './AddTrips';
import './App.css'
// import data from './data';
import Home from './homePage';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';


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

  const [data, setData] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:1337/read').then(response => {
      setData(response.data)
    })

  })
  return (

    <div className="App">
  

 
      <div className="header">
        <nav className="navbar">
          <div className="navBarLink" onClick={onHomeClick}>Home</div>
          <div className="navBarLink" onClick={onAddTripsClick}>Add Trips</div>
        </nav>
      </div>
      {showHome && <Home data={data} setData={setData} />}

      {showAddTrips && <AddTrips />}
    </div>
  )
}

export default App;
