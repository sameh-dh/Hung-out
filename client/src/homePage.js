import React, { useState} from "react";
import Axios from "axios";

const Home = (props) => {
  //update trip
  const [destination, setDestination] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);
  const updateTrip = (_id) => {
    Axios.put("http://localhost:1337/update", {
      _id: _id,
      destination: destination,
      price: price,
      img: img,
    }).then((response) => {
      console.log("trip updated successfully ");
  
    });
  
  };
  //delete trip 
  const deletTrip = (id) => {
    Axios.delete(`http://localhost:1337/delete/${id}`)
  };
  return (
    <div className="home">
      {/* show trips */}
      {props.data.map((element) => {
        return (
          <div key={element._id} className="block">
            
            <img src={element.img} alt={element.destination} />
            <h1>{element.destination}</h1>
            <h1>{element.price}  </h1>
            {/* update trip */}
            <input
              className="put"
              type="text"
              placeholder="destination"
           
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            ></input>
            <input
              className="put"
              type="number"
              placeholder="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input>
            <input
              className="put"
              type="text"
              placeholder="img"
              onChange={(e) => {
                setImg(e.target.value);
              }}
            ></input>
            <button
              className="button"
              onClick={() => {
                return updateTrip(element._id);
              }}>
              Update
            </button>
{/* delete trip */}
            <button
              className="button"
              onClick={() => {
              return  deletTrip(element._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
