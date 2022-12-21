import React, { useState,useEffect } from 'react';
import "./Skills.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';




export default function Skills() {

  const [skillname1, setSkillname1] = useState('');
  const [skillname2, setSkillname2] = useState('');
  const [skillname3, setSkillname3] = useState('');
  const [skillname4, setSkillname4] = useState('');
  const [skillname5, setSkillname5] = useState('');
  const [skillname6, setSkillname6] = useState('');
  const [skillname7, setSkillname7] = useState('');
  const [skillname8, setSkillname8] = useState('');
  const [skillname9, setSkillname9] = useState('');
  const [skillname10, setSkillname10] = useState('');
  const [portfolioid, setPortfolioid] = useState('');
 


  const [sent, setSent] = useState();
  const [senter, setSenter] = useState();
  const {skillid} = useParams();
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
  await axios.post(`http://localhost:8000/api/addskill/`,
{

  skillname1,
  skillname2,
  skillname3,
  skillname4,
  skillname5,
  skillname6,
  skillname7,
  skillname8,
  skillname9,
  skillname10,
  portfolioid
},
{headers: {
    
  'Access-Control-Allow-Origin': 'http://localhost:3000/'
}}
)
.then((res) => {
  setSkillname1('')
  setSkillname2('')
  setSkillname3('')
  setSkillname4('')
  setSkillname5('')
  setSkillname6('')
  setSkillname7('')
  setSkillname8('')
  setSkillname9('')
  setSkillname10('')
  setSent(true);
  
})

 
  
} catch (error) {
  if (error.data) { 
    setSenter(error.data);  
  }
}

    //-------------

  }

  const updateSkills = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8000/api/updateskill/`,{
      skillid,
        skillname1,
        skillname2,
        skillname3,
        skillname4,
        skillname5,
        skillname6,
        skillname7,
        skillname8,
        skillname9,
        skillname10,
        portfolioid
    },
    {headers: {
    
      'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }}
    
    )
    .then((result) => {
    
      setSent(true);
      
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}



useEffect(() => {
  

  const getSkillById = async (skillid) => {
    const response = await axios.post(`http://localhost:8000/api/oneskill/`,
    {skillid},
    {headers: {
    
      'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }}
    )
    setSkillname1(response.data.skillname1)
    setSkillname2(response.data.skillname2)
    setSkillname3(response.data.skillname3)
    setSkillname4(response.data.skillname4)
    setSkillname5(response.data.skillname5)
    setSkillname6(response.data.skillname6)
    setSkillname7(response.data.skillname7)
    setSkillname8(response.data.skillname8)
    setSkillname9(response.data.skillname9)
    setSkillname10(response.data.skillname10)
  
  }
  
  getSkillById(skillid);
}, [skillid]);



 
  return(
    <div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Add Skills Related to Your Job</h2>
        </div>
       
        <form  method="post" encType="multipart/form-data">
        <div className="form-group ">{senter}</div>
    <React.Fragment>
    <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='skillname1'
                name="skillname1" 
                placeholder='Skill No.1 Required*'
                className="form-control" 
                value={skillname1}
                onChange={(e) => setSkillname1(e.target.value)} 
                required/>
                <label htmlFor='skillname1' className="labText">Skill No.1 Required*</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='skillname2'
                name="skillname2" 
                placeholder='Skill No.2 Required*'
                className="form-control" 
                value={skillname2}
                onChange={(e) => setSkillname2(e.target.value)} 
                required/>
                <label htmlFor='skillname2' className="labText">Skill No.2 Required*</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='skillname3'
                name="skillname3" 
                placeholder='Skill No.3 Required*'
                className="form-control" 
                value={skillname3}
                onChange={(e) => setSkillname3(e.target.value)} 
                required/>
                <label htmlFor='skillname3' className="labText">Skill No.3 Required*</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='skillname4'
                name="skillname4" 
                placeholder='Skill No.4 Required*'
                className="form-control" 
                value={skillname4}
                onChange={(e) => setSkillname4(e.target.value)} 
                required/>
                <label htmlFor='skillname4' className="labText">Skill No.4 Required*</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='skillname5'
                name="skillname5" 
                placeholder='Skill No.5 Required*'
                className="form-control" 
                value={skillname5}
                onChange={(e) => setSkillname5(e.target.value)} 
                required/>
                <label htmlFor='skillname5' className="labText">Skill No.5 Required*</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='skillname6'
                name="skillname6" 
                placeholder='Skill No. 6'
                className="form-control" 
                value={skillname6}
                onChange={(e) => setSkillname6(e.target.value)} 
                />
                <label htmlFor='skillname6' className="labText">Skill No. 6</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='skillname7'
                name="skillname7" 
                placeholder='Skill No. 7'
                className="form-control" 
                value={skillname7}
                onChange={(e) => setSkillname7(e.target.value)} 
                />
                <label htmlFor='skillname7' className="labText">Skill No. 7</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='skillname8'
                name="skillname8" 
                placeholder='Skill No. 8'
                className="form-control" 
                value={skillname8}
                onChange={(e) => setSkillname8(e.target.value)} 
                />
                <label htmlFor='skillname8' className="labText">Skill No. 8</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='skillname9'
                name="skillname9" 
                placeholder='Skill No. 9'
                className="form-control" 
                value={skillname9}
                onChange={(e) => setSkillname9(e.target.value)} 
                />
                <label htmlFor='skillname9' className="labText">Skill No. 9</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>
            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='skillname10'
                name="skillname10" 
                placeholder='Skill No. 10'
                className="form-control" 
                value={skillname10}
                onChange={(e) => setSkillname10(e.target.value)} 
                />
                <label htmlFor='skillname10' className="labText">Skill No. 10</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

       </React.Fragment>
     
    
  <div className="form-group-submit-parent">
    {skillid ? (
      <input type="submit" className="btn_submit" value="Update"  onClick={updateSkills} />
    ):(
      <input type="submit" className="btn_submit" value="Save"  onClick={handleSubmit} />
    )}
  
  <input type="reset" className="btn-reset" value="Reset" />
  </div>


     
        {sent ? (
          <p className="text-success">Your Kills Was saved Successfully</p>
        ) : (
          <p className="text-danger"></p>
        )}
        </form>
    </div>
  );
}