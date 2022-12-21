import React, { useState,useEffect } from 'react';
//import { Link } from 'react-router-dom';
// import useToken from '../App/useToken';
// import Login from '../Login/Login';
import "./Goal.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';




export default function WorkExperence() {
  const [organisation, setOrganisation] = useState('');
  const [position, setPosition] = useState('');
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [portfolioid, setPortfolioid] = useState('');
 
  const [sent, setSent] = useState();
  const [senter, setSenter] = useState();


  const {workexperienceid} = useParams();
  const history = useNavigate();
  //const { token, setToken } = useToken();

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
  await axios.post(`http://localhost:8000/api/addworkexperience/`,
{

  organisation,
  position,
  startdate,
  enddate,
  description,
  country,
  portfolioid
},
{headers: {
    
  'Access-Control-Allow-Origin': 'http://localhost:3000/'
}}
)
.then((res) => {

  setOrganisation('')
      setPosition('')
      setStartdate('')
      setEnddate('')
      setDescription('')
      setCountry('')
  setSent(true);
  
})

 
  
} catch (error) {
  if (error.data) { 
    setSenter(error.data);  
  }
}

    //-------------
   
  }

  const updateWorkexperience = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8000/api/updateworkexperience/`,{
      workexperienceid,
      organisation,
      position,
      startdate,
      enddate,
      description,
      country,
      portfolioid
    },
    {headers: {
    
      'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }}
    
    )
    .then((result) => {
      setOrganisation('')
      setPosition('')
      setStartdate('')
      setEnddate('')
      setDescription('')
      setCountry('')
      setSent(true);
      
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}



useEffect(() => {
  

  const getWorkexperienceById = async (workexperienceid) => {
    const response = await axios.post(`http://localhost:8000/api/oneworkexperience/`,
    {
      workexperienceid
      },
      {headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }}
    
    
    
    )
    setOrganisation(response.data.wpx.organisation)
      setPosition(response.data.wpx.position)
      setStartdate(response.data.wpx.startdate)
      setEnddate(response.data.wpx.enddate)
      setDescription(response.data.wpx.description)
      setCountry(response.data.wpx.country)
  
  }
  
  getWorkexperienceById(workexperienceid);
}, [workexperienceid]);



  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return(
    <div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Organisation Worked</h2>
        </div>
       
        <form  method="post" encType="multipart/form-data">
       {workexperienceid ? 
       (<React.Fragment>
         <div className="form-group ">{senter}</div>
     <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='organisation'
                name="organisation" 
                placeholder='Organisation'
                className="form-control" 
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)} 
                />
                <label htmlFor='organisation' className="labText">Organisation</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>


            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='position'
                name="position" 
                placeholder='Position Held'
                className="form-control" 
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                />
                <label htmlFor='position' className="labText">Position Held</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

      

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='startdate'
                name="startdate" 
                placeholder='Start Date'
                className="form-control" 
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                />
                
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
               
                name="enddate" 
                placeholder='End Date'
                className="form-control" 
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                />
                
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
            <div className="form-group "></div>
            <textarea
                    name="description"
                     form="description" 
                     id="description__label"
                      required placeholder="Describe Your Job"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                   <label htmlFor="description__label" className="form__label">Describe Your Job </label>
            </div>


            <div className="form-group-parent1">
                <div className="form-group"></div>
                
                <div className="input_parent">
                <input
                type="text"
                name=" country" 
                id=' country'
                placeholder=' Country'
                className="form-control"
                value={ country}
                onChange={(e) => setCountry(e.target.value)}
                />
                <label htmlFor=' country' className="labText"> country</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>
       </React.Fragment>):(
       <React.Fragment>
     <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='organisation'
                name="organisation" 
                placeholder='Organisation'
                className="form-control" 
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)} 
                />
                <label htmlFor='organisation' className="labText">Organisation</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='position'
                name="position" 
                placeholder='Position Held'
                className="form-control" 
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                />
                <label htmlFor='position' className="labText">Position Held</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

      

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='startdate'
                name="startdate" 
                placeholder='Start Date'
                className="form-control" 
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                />
                
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
               
                name="enddate" 
                placeholder='End Date'
                className="form-control" 
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                />
                
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
            <div className="form-group "></div>
            <textarea
                    name="description"
                     form="description" 
                     id="description__label"
                      required placeholder="Describe Your Job"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                   <label htmlFor="description__label" className="form__label">Describe Your Job </label>
            </div>

            <div className="form-group-parent1">
                <div className="form-group"></div>
                
                <div className="input_parent">
                <input
                type="text"
                name=" country" 
                id=' country'
                placeholder=' Country'
                className="form-control"
                value={ country}
                onChange={(e) => setCountry(e.target.value)}
                />
                <label htmlFor=' country' className="labText"> country</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>
       </React.Fragment>)}
    
  <div className="form-group-submit-parent">
    {workexperienceid ? (
      <input type="submit" className="btn_submit" value="Update"  onClick={updateWorkexperience} />
    ):(
      <input type="submit" className="btn_submit" value="Save"  onClick={handleSubmit} />
    )}
  
  <input type="reset" className="btn-reset" value="Reset" />
  </div>


     
        {sent ? (
          <p className="text-success">Your work Experence Was sent Successfully</p>
        ) : (
          <p className="text-danger"></p>
        )}
        </form>
    </div>
  );
}