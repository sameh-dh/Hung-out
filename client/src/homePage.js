import React, { useState } from "react";
import Axios from "axios";

const Home = (props) => {
  //update trip
  const [destination, setDestination] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);
  const [showUpdate, setShowUpdate] = useState(false);
  const updateTrip = (_id) => {
    Axios.put("http://localhost:1337/update", {
      _id: _id,
      destination: destination,
      price: price,
      img: img,
    }).then((response) => {
      console.log("trip updated successfully ");

    });
  }

  //show input update
  const showUp=(element)=>{
    if (showUpdate) {
return( <div >
  <input className="put" type="text" placeholder="destination" onChange={(e) => {
    setDestination(e.target.value);
  }}></input>
<input className="put" type="number"placeholder="price" onChange={(e) => {
    setPrice(e.target.value);
  }}></input>
<input className="put" type="text" placeholder="img" onChange={(e) => {
    setImg(e.target.value);
  }}></input>
<button className="button" onClick={() => {
  setShowUpdate(false);
    return updateTrip(element);
  }}>Update</button>
</div>
)
    }else {
      
      return <div className="btn-homepage">
        <button className="button" onClick={() => setShowUpdate(true)}>Update content</button>
        </div>
    }
  }
  

 
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
        
        
          <div key={element._id}  className="container-boxs" >
              
              <div className="container-box">
            <img src={element.img}  title={element.destination}  alt={element.destination} className="image" />
           
          
            <h1>{element.destination}</h1>
            <h1>{element.price} DT </h1>
            {/* update trip */}
           
            {showUp(element._id)}
            {/* delete trip */}
            <button className="button" onClick={() => {
              return  deletTrip(element._id);
              }}>Delete</button>
            </div> 
      
       
  
    </div>
    )})}
 
 </div>

)
};
export default Home;
