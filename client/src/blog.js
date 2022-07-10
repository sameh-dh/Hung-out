import React, { useState } from 'react';
import blogData from './dataBlog';

function Blog (){
return (
    <div className="blog-container" >
      
      { blogData.map((item, index) => {
        return <div className="blog-item" key={index}>
            <h1>{item.user}</h1>
            <h2>{item.blog}</h2>
         <img src={item.picture} alt={item.blog} className="image" />
        
        </div>;
       }
    )}
    </div>

)
}

export default Blog;