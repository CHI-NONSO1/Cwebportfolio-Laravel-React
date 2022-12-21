import React, { useState,useEffect } from 'react';
import "./Goal.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';




export default function EduQualification() {
  const [qualiobtained, setQualiobtained] = useState('');
  const [institution, setInstitution] = useState('');
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const [country, setCountry] = useState('');
  const [portfolioid, setPortfolioid] = useState('');
  const [sent, setSent] = useState('');
 
  
  
 
 
const {eduqualid} = useParams()
  const history = useNavigate();


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
  await axios.post(`http://localhost:8000/api/addeduquali`,
{

  qualiobtained,
        institution,
        startdate,
        enddate,
        country,
        portfolioid
},
{headers: {
    
  'Access-Control-Allow-Origin': 'http://localhost:3000/'
}}
)
.then((result) => {
  setSent(true);
      setQualiobtained('')
      setInstitution('')
      setStartdate('')
      setEnddate('')
      setCountry('')
})


} catch (error) {
  if (error.data) {   
  }
}

    //-------------
  }

  const updateEduQuali = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8000/api/updateeduquali/`,
    {
      eduqualid,
      qualiobtained,
      institution,
      startdate,
      enddate,
      country,
      portfolioid
    },
    {headers: {
          
      'Access-Control-Allow-Origin': 'http://localhost:3000/'
}}
    
    )
    .then((result) => {
      setQualiobtained('')
      setInstitution('')
      setStartdate('')
      setEnddate('')
      setCountry('')
      setSent(true);
      console.log(result);
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}


useEffect(() => {
  

  const getBiodataById = async (eduqualid) => {
    const resp = await axios.post(`http://localhost:8000/api/oneeduquali/`,
    {eduqualid},
    {headers: {
          
      'Access-Control-Allow-Origin': 'http://localhost:3000/'
}}
)
    setQualiobtained(resp.data.Eduquali.qualiobtained)
      setInstitution(resp.data.Eduquali.institution)
      setStartdate(resp.data.Eduquali.startdate)
      setEnddate(resp.data.Eduquali.enddate)
      setCountry(resp.data.Eduquali.country)
      console.log(resp.data.Eduquali);
  }
  
  getBiodataById(eduqualid);
}, [eduqualid]);


  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return(
    <div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Qualifications Obtained</h2>
        </div>
        <form  method="post" encType="multipart/form-data">
          {eduqualid ? (
            <React.Fragment>
<div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='qualiobtained'
                name="qualiobtained" 
                placeholder='Qualification'
                className="form-control" 
                value={qualiobtained}
                onChange={(e) => setQualiobtained(e.target.value)} 
                />
                <label htmlFor='qualiobtained' className="labText">Qualification</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='institution'
                name="institution" 
                placeholder='Name of Institution'
                className="form-control" 
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                />
                <label htmlFor='institution' className="labText">Name of Institution</label>
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

            </React.Fragment>
          ):(
            <React.Fragment>
              <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='qualiobtained'
                name="qualiobtained" 
                placeholder='Qualification'
                className="form-control" 
                value={qualiobtained}
                onChange={(e) => setQualiobtained(e.target.value)} 
                />
                <label htmlFor='qualiobtained' className="labText">Qualification</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='institution'
                name="institution" 
                placeholder='Name of Institution'
                className="form-control" 
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                />
                <label htmlFor='institution' className="labText">Name of Institution</label>
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

            </React.Fragment>
          )}
            
    
  <div className="form-group-submit-parent">
    {eduqualid ? (
      <input type="submit" className="btn_submit" value="Update"  onClick={updateEduQuali} />
    ):(
      <input type="submit" className="btn_submit" value="Send"  onClick={handleSubmit} />
    )}
  
  <input type="reset" className="btn-reset" value="Reset" />
  </div>


     
        {sent ? (
          <p className="text-success">Your Qualification Was added Successfully</p>
        ) : (
          <p className="text-danger">Your Qualification Was added</p>
        )}
        </form>
    </div>
  );
}