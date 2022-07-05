import React,{useState,useEffect} from 'react';

const Home= (props)=>{
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