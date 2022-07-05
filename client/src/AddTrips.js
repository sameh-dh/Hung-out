import React, { useState } from 'react';
import axios from 'axios'


function AddTrips() {

    const [destination, setDestination] = useState('');
    const [price, setPrice] = useState();
    const [img, setImg] = useState('');

    const onDestinationChange = function (event) {
        let text = event.target.value
        setDestination(text)
    }
    const onPriceChange = function (event) {
        let number = event.target.value
        setPrice(number)
    }
    const onImgChange = function (event) {
        let img = event.target.value
        setImg(img)
    }

    const saveTrips = function (event) {
        event.preventDefault()
        let tripsData = {
            destination,
            price,
            img,
        }
        axios.post('http://localhost:3000/get', tripsData)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        alert('trip add')
    }
    return (
        <form className="form">
            <label >Destination</label><br />
            <input type="text" onChange={onDestinationChange} /><br />
            <label>Price</label><br />
            <input type="price" onChange={onPriceChange} /><br></br>
            <label >Image</label><br />
            <input type="img" onChange={ onImgChange} /><br></br>
            <button className="button" onClick={saveTrips} >Submit</button>
        </form>
    )

}

export default AddTrips;