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
        let image = event.target.value
        setImg(image)
    }

    const saveTrips = function (event) {
        event.preventDefault()
        axios.post('http://localhost:1337/get', {
            destination:destination,
            price:price,
            img:img
        })
            .then(response => console.log(response))
            .catch(err => console.log(err))
        alert('trip added')
       
    }
    return (
        <form className="form">
            <label >Destination</label><br />
            <input type="text" onChange={onDestinationChange} /><br />
            <label>Price</label><br />
            <input type="price" onChange={onPriceChange} /><br></br>
            <label >Image</label><br />
            <input type="img" onChange={ onImgChange} /><br></br>
            <button className='button' onClick={saveTrips}>add</button>
           
        </form>
    )

}

export default AddTrips;