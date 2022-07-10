import React, { useState } from 'react';
import blogData from './dataBlog';

function Blog() {
    //like button
    //check if there is more than one picture
    const picture = (item) => {
        if (item.picture2 === undefined && item.picture3 === undefined && item.picture4 === undefined) {
            return (
                <div>
                    <img src={item.picture} alt={item.blog} className="image-blog" />
                </div>
            )
        } else if (item.picture3 === undefined && item.picture4 === undefined) {
            return (
                <div>
                    <img src={item.picture} alt={item.blog} className="image-blog" />
                    <img src={item.picture2} alt={item.blog} className="image-blog" />
                </div>
            )
        } else if ( item.picture4 === undefined) {
            return (
                <div>
                    <img src={item.picture} alt={item.blog} className="image-blog" />
                    <img src={item.picture2} alt={item.blog} className="image-blog" />
                    <img src={item.picture3} alt={item.blog} className="image-blog" />
                </div>
            )
        } else {
            return (
                <div>
                    <img src={item.picture} alt={item.blog} className="image-blog" />
                    <img src={item.picture2} alt={item.blog} className="image-blog" />
                    <img src={item.picture3} alt={item.blog} className="image-blog" />
                    <img src={item.picture4} alt={item.blog} className="image-blog" />
                </div>
            )
        }
    }
    
    return (
        <div className="blog-container" >

            {blogData.map((item, index) => {
                return <div className="blog-item" key={index} >
                   
                    <img src={item.userImage} alt={item.user}  className="user-image"/>
                    <h1 className="user-name">{item.user}</h1>
                    <div className='user-block'>
                    <h2>{item.blog}</h2>
                    {picture(item)}
                    {/* like button */}
                    <div>
                    <button class="btn-secondary like-review" key={index} onClick={() => {if (blogData[index]['like']==="Like"){
                     return blogData[index]['like']="You liked this post"
                    }else {
                        return blogData[index]['like']="Like"
                    }
                        }}>
                        <i class="fa fa-heart" ></i> {blogData[index]['like']}</button>
               </div>
                    </div>
                </div>;
            }
            )}
            <div className="blog-add">

                {/* add blog */}
                <h1>Add Blog</h1>
                <input type="text" placeholder="your user name" />  <br />
                <input type="text" placeholder="add your blog here" className="blog-input" />  <br />
                <input type="text" placeholder="image1" />  <br />
                <input type="text" placeholder="image2" />  <br />
                <input type="text" placeholder="image3" />  <br />
                <input type="text" placeholder="image4" />  <br />
                <button className="button">Add Blog</button>

            </div>

        </div>

    )
}

export default Blog;