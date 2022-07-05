import React from "react";
import { useState } from "react";
import axios from "axios";




function Trips() {
    const [destination, setDestination] = useState("");
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState("");

  
    const [tripList, setTripList] = useState([]);
  
    const addTrips = () => {
      axios.post("http://localhost:1337/get", {
        destination:destination,
        price:price,
        img:img,
      }).then(() => {
        setTripList([
          ...tripList,
          {
            destination:destination,
            price:price,
            img:img,
          },
        ]);
      });
    };
    const deleteData = (id) => {
        axios.delete(`http://localhost:1337/delete/:id/${id}`).then((response) => {
            setTripList(
            tripList.filter((val) => {
              return val.id != id;
            })
          );
        });
      };

return (

    <div className="App">
    <div className="information">
      <label>Destination:</label>
      <input
        type="text"
        onChange={(event) => {
          setDestination(event.target.value);
        }}
      />
      <label>price:</label>
      <input
        type="number"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <label>img:</label>
      <input
        type="text"
        onChange={(event) => {
          setImg(event.target.value);
        }}
      />
     
      <button onClick={addTrips}>Add</button>
    </div>
    </div>


)









}






export default Trips;