import './App.css'
import data from './data';
import Home from './homePage';

function App() {
  return (
    <div className="App">
    <Home data={data} />
    </div>
  );
}

export default App;
