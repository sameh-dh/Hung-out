import React, { useEffect,useState } from 'react';
import Axios from 'axios'
// import blogData from './dataBlog';

function Blog() {

    //get blogs from the database
    const [blogData, setBlogData] = useState([])
    useEffect(() => {
      Axios.get('http://localhost:1337/read/blog').then(response => {
        setBlogData(response.data)
      })
    })
    //update like 
    const [like, setLike] = useState("");
    const updateLike = (_id) => {
        Axios.put("http://localhost:1337/update/like", {
          _id: _id,
          like: like,
         
        }).then((response) => {
          console.log("like updated successfully ");
    
        });
      }
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
                    <button className="btn-secondary like-review" key={index} onClick={() => {
                        if (blogData[index]['like']==="Like"){
                            setLike("You liked this post")
                      return  updateLike(item._id)
                    }else {
                         setLike("Like")
                         return    updateLike(item._id)
                    }
                        }}>
                        <i className="fa fa-heart" ></i> {item.like}</button>
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