import React,{useState,useEffect} from 'react';
import Axios from 'axios';

const Home= (props)=>{
    const [data, setData] = useState(0)
    const deleteData = (id) => {
        Axios.delete(`http://localhost:/delete/:id${id}`)
      }
    return(
        <div className="home">
            {
                props.data.map((element,key)=>{
                    return <div key={element._id} className="block">
                        <img src={element.img} alt={element.destination} />
                        <h1>{element.destination}</h1>
                        <h1>{element.price}</h1>


                    </div>
                })
            }
        </div>
    )
}
export default Home 