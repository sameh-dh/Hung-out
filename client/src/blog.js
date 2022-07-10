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
      //add blog
      const [user, setUser] = useState('');
      const [userImage, setUserImage] = useState('');
      const [blog, setBlog] = useState('');
      const [pictures, setPictures] = useState('');
      const [picture2, setPicture2] = useState('');
      const [picture3, setPicture3] = useState('');
      const [picture4, setPicture4] = useState('');

      const saveTrips = () =>{
     
        Axios.post('http://localhost:1337/add/blog', {
            user: user,
            userImage:userImage,
            blog: blog,
            picture: pictures,
            picture2: picture2,
            picture3: picture3,
            picture4: picture4

        })
            .then(response => console.log(response))
            .catch(err => console.log(err))
      

    }
    //check if there is more than one picture
    const picture = (item) => {
        if ((item.picture2 === undefined|| item.picture2 ==="") && (item.picture3 ===undefined ||item.picture3 ==="" )&& (item.picture4 === undefined || item.picture4==="")) {
            return (
                <div>
                    <img src={item.picture} alt={item.blog} className="image-blog" />
                </div>
            )
        } else if ((item.picture3 ===undefined ||item.picture3 ==="" )&& (item.picture4 === undefined || item.picture4==="")) {
            return (
                <div>
                    <img src={item.picture} alt={item.blog} className="image-blog" />
                    <img src={item.picture2} alt={item.blog} className="image-blog" />
                </div>
            )
        } else if ( (item.picture4 === undefined || item.picture4==="")) {
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
    //onchange trick
    const newblog =(e,use)=>{
        return use(e.target.value)
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
                <input type="text" placeholder="your user name" onChange={(e)=>{
                    console.log(user)
                   return  newblog(e,setUser)
                }}/>  <br />
                <input type="text" placeholder="user image" onChange={(e)=>{
                   return  newblog(e,setUserImage)
                }}/>  <br />
                <input type="text" placeholder="add your blog here" className="blog-input"onChange={(e)=>{
                   return  newblog(e,setBlog)
                }} />  <br />
                <input type="text" placeholder="image1" onChange={(e)=>{
                   return  newblog(e,setPictures)
                }}/>  <br />
                <input type="text" placeholder="image2" onChange={(e)=>{
                   return  newblog(e,setPicture2)
                }} />  <br />
                <input type="text" placeholder="image3" onChange={(e)=>{
                   return  newblog(e,setPicture3)
                }}/>  <br />
                <input type="text" placeholder="image4" onChange={(e)=>{
                   return  newblog(e,setPicture4)
                }}/>  <br />
                <button className="button" onClick={()=>{return  saveTrips()}}>Add Blog</button>

            </div>

        </div>

    )
}

export default Blog;