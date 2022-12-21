import React, { useState,useEffect } from 'react';
//import { Link } from 'react-router-dom';
// import useToken from '../App/useToken';
// import Login from '../Login/Login';
import "./Goal.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';




export default function Philosophy() {
  const [body, setBody] = useState('');
  const [portfolioid, setPortfolioid] = useState('');
  const [sent, setSent] = useState(false);
  

  const {philosophyid} = useParams();
  const history = useNavigate();
 
 
 // const { token, setToken } = useToken();

 useEffect(() => {

  const token = JSON.parse(localStorage.getItem('token'))
 
    const refreshToken = async (token) => {
      try {
          const response = await axios.get('http://localhost:8000/api/profile',{
            headers: {
            Authorization: `Bearer ${token}`
            }
          
          });
          
         
        setPortfolioid(response.data.portfolioadminid);
         
          
      } catch (error) {
          if (error.response) {
              history("/login");
              
          }
      }
  }


  refreshToken(token);
 
}, [portfolioid,history]);

  

  const handleSubmit = async(e) => {
    // prevent the form from refreshing the whole page
   
    e.preventDefault();
    // set configurations

            //----------------------------
try {
  await axios.post(`http://localhost:8000/api/addphilosophy/`,
{

  body,
  portfolioid
},
{headers: {
    
  'Access-Control-Allow-Origin': 'http://localhost:3000/'
}}
)
.then((result) => {

  setBody('')
  setSent(true);
})

 
  
} catch (error) {
  if (error.data) {   
  }
}

    //-------------
  
  }

  const updatePhilosophy = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8000/api/updatephilosophy/`,
    {
      philosophyid,
      body,
      portfolioid
    },
    {headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }}
    )
    .then((result) => {
      setBody('')
      setSent(true);
      
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}

useEffect(() => {

  const getPhilosophyById = async (philosophyid) => {
    const response = await axios.post(`http://localhost:8000/api/onephilosophy/`,
    
    {
    philosophyid
    },
    {headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }}
    
    
    );
    setBody(response.data.philosophy.body);
  
  }
  
  getPhilosophyById(philosophyid);
}, [philosophyid]);



  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return(
    <div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Add Philosophy</h2>
        </div>
        <div className="paraparent">
            <p className="para_details"></p>
        </div>
        <form  method="post" encType="multipart/form-data">
          {philosophyid ? 
          (<React.Fragment>
  <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="message__parent">
            <textarea
             name="message"
              form="contact" 
              id="message__label"
               required placeholder="Write Your Philosophy Here"
               value={body}
               onChange={(e) => setBody(e.target.value)}
               ></textarea>
            <label htmlFor="message__label" className="form__label">Your Philosophy Here</label>
          </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>
          </React.Fragment>):
          (<React.Fragment>
            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="message__parent">
            <textarea
             name="message"
              form="contact" 
              id="message__label"
               required placeholder="Write Your Philosophy Here"
               value={body}
               onChange={(e) => setBody(e.target.value)}
               ></textarea>
            <label htmlFor="message__label" className="form__label">Your Philosophy Here</label>
          </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>
          </React.Fragment>)}

         
    
  <div className="form-group-submit-parent">
  {philosophyid ? (
    <input type="submit" className="btn_submit" value="Update"  onClick={updatePhilosophy} />
  ):(
    <input type="submit" className="btn_submit" value="Save"  onClick={handleSubmit} />
  )}
  <input type="reset" className="btn-reset" value="Reset" />
  </div>


     
        {sent ? (
          <p className="text-success">Your Entry Was saved Successfully</p>
        ) : (
          <p className="text-danger">Your Entry Was Not saved</p>
        )}
        </form>
    </div>
  );
}