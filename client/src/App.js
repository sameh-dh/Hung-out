import './App.css'
// import data from './data';
import Home from './homePage';
import React,{useEffect,useState} from 'react';
import Axios from 'axios';

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    Axios.get('http://localhost:1337/read').then(response =>
    {
      setData(response.data)
    })

  })
  return (
    <div className="App">
    <Home data={data} />
    </div>
  );
}

export default App;
