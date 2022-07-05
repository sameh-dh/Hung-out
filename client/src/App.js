import './App.css'
import data from './data';
import Home from './homePage';
import Trips from  './Trips';

import axios from 'axios'

function App() {
  return (
    <div className="App">
    <Home data={data} />
    <Trips data ={data}/>
    </div>
  );
  
}

export default App;
