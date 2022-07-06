import React,{useState} from 'react';
import Axios from 'axios'

const Home= (props)=>{
    const [destination,setDestination] = useState("")
    const [img,setImg]  = useState("")
    const [price,setPrice] = useState(0)
    const [_id,setId]=useState("")
    const  updateTrip= ()=>{
        Axios.put('http://localhost:1337/update',{_id:_id,destination:destination,price:price,img:img}).then((response)=>{
        console.log("updateTrip ")
        })

    }
    return(
        <div className="home">
            {
                props.data.map((element)=>{
                    return <div key={element._id} className="block">
                        <img src={element.img} alt={element.destination} />
                        <h1>{element.destination}</h1>
                        <h1>{element.price}</h1>
                        <input type="text" placeholder='destination' onChange={(e)=>{
                            console.log(_id)
                            setId(element._id)
                              setDestination(e.target.value);
                              
                        }}></input>
                        <input type="number" placeholder='price' onChange={(e)=>{
                              setPrice(e.target.value);
                        }} ></input>
                        <input type="text" placeholder='img' onChange={(e)=>{
                              setImg(e.target.value);
                        }}></input>
                        <button onClick={()=>{
                            
                            return updateTrip()
                        }} >Update</button>


                    </div>
                })
            }
        </div>
    )
}
export default Home 