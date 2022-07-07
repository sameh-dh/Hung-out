import React, { useState } from "react";
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
      <div className="home-page">
        <h1 className="home-title"><span>Welcome to </span>&nbsp; HUNG-OUT</h1><br />
      </div>
      {/* show trips */}
      {props.data.map((element) => {
        return (
          <div key={element._id} className="block">

            <img className="img" src={element.img} alt={element.destination} />
            <div className="destination">
              <h1>{element.destination}</h1>
              <h1>{element.price} TND  </h1>
            </div>
            {/* update trip */}
            <input
              className="put"
              type="text"
              placeholder="destination"

              onChange={(e) => {
                setDestination(e.target.value);
              }}
            ></input><br />
            <input
              className="put"
              type="number"
              placeholder="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input><br />
            <input
              className="put"
              type="text"
              placeholder="img"
              onChange={(e) => {
                setImg(e.target.value);
              }}
            ></input><br />
            <button
              className="update"
              onClick={() => {
                return updateTrip(element._id);
              }}><i class="fas fa-edit"></i>&nbsp;
              Update
            </button>
            {/* delete trip */}
            <button
              className="delete"
              onClick={() => {
                return deletTrip(element._id);
              }}
            ><i class="fa fa-trash" aria-hidden="true"></i>&nbsp;
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
