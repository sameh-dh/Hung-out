
import AddTrips from './AddTrips';
import './App.css'
// import data from './data';
import Home from './homePage';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Register from './signUp';


function App() {

  const [showHome, setShowHome] = useState(true);
  const [showAddTrips, setShowAddTrips] = useState(false);
  const [signUp, setSignUp] = useState(false)

  const onHomeClick = function () {
    setShowHome( true)
    setShowAddTrips( false)
    setSignUp( false)

  }
  const onAddTripsClick = function () {
    setShowHome(false)
    setShowAddTrips(true)
    setSignUp( false)

  }
  const onSignUpClick = function () {
    setShowHome( false)
    setShowAddTrips( false )
    setSignUp( true )

  }


  //get data from the database
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
          {/* home page button */}
          <div className="navBarLink" onClick={onHomeClick}><h1>Home</h1></div>
          {/* add trips page button */}
          <div className="navBarLink" onClick={onAddTripsClick}><h1>Add Trips</h1></div>
          {/* sign up âge button */}
          <div className="navBarLink" onClick={onSignUpClick}><h1>Sign Up</h1></div>
        </nav>
      </div>
      {/* home page*/}
      {showHome && <Home data={data} setData={setData} />}
{/* add trips page */}
      {showAddTrips && <AddTrips />}
    {/* sign up page */}
    {signUp && <Register />}

    </div>
  )
}

export default App;
