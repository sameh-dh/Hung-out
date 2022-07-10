import React, { useState } from 'react';
import blogData from './dataBlog';

function Blog() {
    //like button
    const [liked, setLiked] = useState(false)
    //check if there is picture 2 
    const picture = (item) => {
        if (item.picture2 === undefined) {
            return (
                <div>
                    <img src={item.picture} alt={item.blog} className="image-blog" />
                </div>
            )
        } else if (!item.picture2 === undefined && item.picture3 === undefined) {
            return (
                <div>
                    <img src={item.picture} alt={item.blog} className="image-blog" />
                    <img src={item.picture2} alt={item.blog} className="image-blog" />
                </div>
            )
        } else if (!item.picture3 === undefined && item.picture4 === undefined) {
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
    // like button function
 const like = (item,key) => {
        if (liked === false) {
            return (
                <div>
                    <button class="btn-secondary like-review" key={key} onClick={() => setLiked(true)}>
                        <i class="fa fa-heart" ></i> {item.like}</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button class="btn-secondary like-review" key={key} onClick={() => setLiked(false)}>
                        <i class="fa fa-heart" ></i> {item.liked}</button>
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
                    {like(item,index)}
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