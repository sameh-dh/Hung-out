import React, { useState } from 'react';
import axios from 'axios'


function AddTrips() {

    const [destination, setDestination] = useState('');
    const [price, setPrice] = useState();
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');


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
    const onDescriptionsChange = function (event) {
        let description= event.target.value
        setDescription(description)
    }

    const saveTrips = function (event) {
        event.preventDefault()
        axios.post('http://localhost:1337/get', {
            destination: destination,
            price: price,
            img: img,
            description:description
        })
            .then(response => console.log(response))
            .catch(err => console.log(err))
        alert('trip added')

    }
    return (

        <form className="register">
            <label >Destination</label><br />
            <input type="text" placeholder='enter your destination' onChange={onDestinationChange} /><br />
            <label >Description</label><br />
            <input type="text" placeholder='enter your destination' onChange={onDescriptionsChange} /><br />
            <label>Price</label><br />
            <input type="number" placeholder='choose price' onChange={onPriceChange} /><br></br>
            <label >Image</label><br />
            <input type="img" placeholder='choose your image' onChange={onImgChange} /><br></br>
            <button className='button' onClick={saveTrips}><i class="fa fa-plus" aria-hidden="true"></i>&nbsp; Add</button>

        </form>

    )

}

export default AddTrips;