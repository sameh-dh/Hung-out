
import AddTrips from './AddTrips';
import './App.css'
// import data from './data';
import Home from './homePage';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Register from './signUp';
import Signin from './login';


function App() {

  const [showHome, setShowHome] = useState(true);
  const [showAddTrips, setShowAddTrips] = useState(false);
  const [signUp, setSignUp] = useState(false)
  const [login, setLogin] = useState(false)


  const onHomeClick = function () {
    setShowHome( true)
    setShowAddTrips( false)
    setSignUp( false)
    setLogin(false)
  }
  const onAddTripsClick = function () {
    setShowHome(false)
    setShowAddTrips(true)
    setSignUp( false)
    setLogin(false)
  }
  const onSignUpClick = function () {
    setShowHome( false)
    setShowAddTrips( false )
    setSignUp( true )
    setLogin(false)
  }
  const onLoginClick = function () {
    setShowHome(false)
    setShowAddTrips(false)
    setSignUp(false)
    setLogin(true)

  }

  //get data from the database
  const [data, setData] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:1337/read').then(response => {
      setData(response.data)
    })
})


  return (

    <div >
     {/* <img src="https://images.travelandleisureindia.in/wp-content/uploads/2021/01/14101943/New-Featured-1-3.jpg" alt="imge" className='background'></img> */}

      <div className="header">
       
        <nav className="navbar">
          {/* home page button */}
          <i className="fa-solid fa-person-walking-luggage" id='logo'></i>
          <div className="navBarLink" onClick={onHomeClick}><i className="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</div>
          {/* add trips page button */}
          <div className="navBarLink" onClick={onAddTripsClick}><i className="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp;Add Trips</div>
          {/* sign up âge button */}
          <div className="navBarLink" onClick={onSignUpClick}><i className="fa fa-user fa-fw"></i>&nbsp;SignUp</div>
          {/* login */}
          <div className="navBarLink" onClick={()=>{return onLoginClick()}}><i className="fa fa-user fa-fw"></i>&nbsp;Login</div>
        </nav>
       
      </div>
      {/* home page*/}
      {showHome && <Home data={data} setData={setData} />}
{/* add trips page */}
      {showAddTrips && <AddTrips />}
    {/* sign up page */}
    {signUp && <Register />}
{/* log in */}
{login && <Signin data={data} />}
    </div>
  )
}

export default App;
