import React, { useState, useEffect } from 'react';
import "./CSS/Post.css";
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

export default function Post() {

  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [imageprev, setImageprev] = useState();
  const [video, setVideo] = useState('');
  const [videoFile, setVideoFile] = useState('');
  const [videoprev, setVideoprev] = useState('');
  const [category, setCategory] = useState('Category');
  const [heading, setHeading] = useState('');
  const [post, setPost] = useState('');
  const [link_post, setLink_post] = useState('');
  const [portfolioid, setPortfolioid] = useState('');
  const [picture, setPicture] = useState('');
  const [msg, setMsg] = useState('');
 
  //const [posted, setPosted] = useState(false);
 
  const {postid} = useParams();
  const history = useNavigate();
 

  const changeCategory = (newCategory) => {
    setCategory(newCategory)
  }

  function handleChange(e) { 
    setImageprev(URL.createObjectURL(e.target.files[0]));
    const img = e.target.files[0]
    setPicture(img);
    setImage(e.target.files[0])
    }

    function handleVideo(e) { 
      setVideoprev(URL.createObjectURL(e.target.files[0]));
      const vid = e.target.files[0]
      setVideoFile(vid);
      setVideo(e.target.files[0])
     
      }
  
  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
   
      const refreshToken = async (token) => {
        try {
            const response = await axios.get('http://localhost:8000/api/profile',{
              headers: {
              Authorization: `Bearer ${token}`
              }
            
            });
            
            setAuthor(response.data.firstname);
          setPortfolioid(response.data.portfolioadminid);
           
            
        } catch (error) {
            if (error.response) {
                history("/login");
                
            }
        }
    }


    refreshToken(token);
   
  }, [portfolioid,history]);

  function clearEntry(){
    setPost('')
    setHeading('')
    setLink_post('')
  }

  const handleSubmit = async (e) => {

    // prevent the form from refreshing the whole page
    
    e.preventDefault();
    // set configurations
    const formData = new FormData()
    formData.append(' post',  post)
    formData.append('image', image)
    formData.append('video', video)
    formData.append('heading', heading)
    formData.append('author', author)
    formData.append('link_post', link_post)
    formData.append('category', category)
    formData.append('portfolioid', portfolioid)
    try{
      await axios.post('http://localhost:8000/api/addpost', 
   formData,
   {headers: {
        
    'Access-Control-Allow-Origin': 'http://localhost:3000/'
}},

 )
 .then((result) => {
  setPost('')
  setHeading('')
  setLink_post('')
      //setGoal(true);
      console.log(result);
    })
  }catch (error)  {
    if (error.response) {
      setMsg(error.response.data.message);
  }
  }

  }

  const updatePost = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('postid', postid)
    formData.append(' post', post)
    formData.append('image', image)
    formData.append('video', video)
    formData.append('heading', heading)
    formData.append('author', author)
    formData.append('link_post', link_post)
    formData.append('category', category)
    formData.append('portfolioid', portfolioid)

    await axios.post(`http://localhost:8000/api/updatepost/`,
    formData,
    {headers: {
      
    'Access-Control-Allow-Origin': 'http://localhost:3000/'
 }},
    )
    .then((result) => {
      setPost('')
      //setGoal(true);
    
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}

useEffect(() => {

  const getPostById = async (postid) => {
    const response = await axios.post(`http://localhost:8000/api/onepost/`,
    {postid},
    {headers: {
      
      'Access-Control-Allow-Origin': 'http://localhost:3000/'
   }},
    );
    setPost(response.data.post.post);
    setHeading(response.data.post.heading);
    setAuthor(response.data.post.author);
    setLink_post(response.data.post.link_post);
    
  }
  
  getPostById(postid);
}, [postid]);


  return (
    <div className="post__wrapper-flex">
        <div className="h2parent">
            <h2 className="login_header">Create A Post</h2>
        </div>
    <form  method="post" encType="multipart/form-data">
         
  <div className="form-group-parent1">
  
  <div className="input_parent">
    <select 
    onChange={(event) => changeCategory(event.target.value)}
    value={category}
    >
    <option value="">Select Category</option>
    <option value="TechTack">Tech Stack</option>
    <option value="Education">Education</option>
    <option value="Physics">Physics</option>
    </select>
    </div>

    <div className="help_parent">
      <span className="help-block">{msg}</span>
      </div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text" 
    id='pheading'
    name="heading" 
    placeholder='Post Heading'
    className="form-control" 
    value={heading}
    onChange={(e) => setHeading(e.target.value)} 
    />
    <label htmlFor='pheading' className="labText">Post Heading </label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text" 
    id='link'
    name="link" 
    placeholder='Add External Link'
    className="form-control" 
    value={link_post}
    onChange={(e) => setLink_post(e.target.value)} 
    />
    <label htmlFor='link' className="labText"> Add External Link</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>


<div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="message__parent">
                  
                  {postid? (
                    <>
                     <textarea
                     name="post"
                      form="post" 
                      id="post__label"
                       required placeholder= "Write Your Post Here"
                       value={post}
                       onChange={(e) => setPost(e.target.value)}
                       ></textarea>
                    <label htmlFor="post__label" className="form__label">Update Post</label>
                    </>
                  ):(
                    <>
                    <textarea
                    name="post"
                     form="post" 
                     id="post2__label"
                      required placeholder="Write Your Post Here"
                      value={post}
                      onChange={(e) => setPost(e.target.value)}
                      ></textarea>
                   <label htmlFor="post2__label" className="form__label">Write Your Post Here</label>
                   </>
                  )}
           
          </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>



<div className="form-group-parent--image-file">
  <div className="fileBtn_parent">
    <input  type="file" name='file' onChange={handleChange} /> 
 
    </div>

    <div className="img_parent">
    <img
    className="img_content"
    alt='avatarimg' 
    src={imageprev}
    id="profileDisplay" />
    
    </div>
  </div>

  <div className="form-group-parent--video-file">
  <div className="fileBtn_parent">
    <input  type="file" name='file' onChange={handleVideo} /> 
 
    </div>

    <div className="video_parent">
    <video  id="videoDisplay"  className="video_content"  width={300} height={300} controls>
   
    <source src={videoprev} type = "video/mp4" />
   </video>
    
    </div>
  </div> 

  <div className="form-group-submit-parent">
    {postid ? (
      <input type="submit" className="btn_submit" value="Update"  onClick={updatePost} />
    ):(
      <input type="submit" className="btn_submit" value="Save"  onClick={handleSubmit} />
    )}
  
  

  <input type="reset" className="btn-reset" value="Reset" onClick={clearEntry}  />
  </div>
</form>
</div>
  )
}
