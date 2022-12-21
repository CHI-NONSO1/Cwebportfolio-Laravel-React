import React, { useState,useEffect, useRef,forwardRef } from 'react';
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import './custom/Print.css'

export default function PrintPortfolio() {


  let ref = useRef();
  const history = useNavigate();

  const [coverPage, setCoverPage] = useState([]);
  const [biodata, setBiodata] = useState([]);
  const [goal, setGoal] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [[...motto], setMotto] = useState([]);
  const [philosophy, setPhilosophy] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [reference, setReference] = useState([]);
 
  const [portfolioadminid, setPortfolioadminid] = useState(" ");
 


 

  useEffect(() => {

    const token = JSON.parse(localStorage.getItem('token'))
  
 
    const refreshToken = async (token) => {
      try {
          const response = await axios.get('http://localhost:8000/api/profile',{
            headers: {
            Authorization: `Bearer ${token}`
            }
          
          });
          
         
        setPortfolioadminid(response.data.portfolioadminid);
         
          
      } catch (error) {
          if (error.response) {
              history("/login");
              
          }
      }
  }
  

    refreshToken(token);
  }, [history]);

  
useEffect(() => {
  const getCoverPageItems = async () => {
    try {
          await axios.get(`http://localhost:5000/portfolioadmin/portfolioadminhome/${portfolioadminid}`)
    .then(res => setCoverPage(res.data))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
  const getBiodata = async () => {
    try {
          await axios.get(`http://localhost:5000/biodata/${portfolioadminid}`)
         // .then(res => console.log(res.data))    
    .then(res => setBiodata(res.data))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  const getGoal = async () => {
    try {
          await axios.get(`http://localhost:5000/goal/${portfolioadminid}`)
    //.then(res => console.log(res.data))    
    .then(res => setGoal(res.data))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
  const getEducationQualification = async () => {
    try {
          await axios.get(`http://localhost:5000/eduquali/${portfolioadminid}`)
    //.then(res => console.log(res.data))    
    .then(res => setQualification(res.data))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  const getHobby = async () => {
    try {
          await axios.get(`http://localhost:5000/hobby/${portfolioadminid}`)
    //.then(res => console.log(res.data))    
    .then(res => setHobby(res.data))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  const getMotto = async () => {
    try {
          await axios.get(`http://localhost:5000/motto/${portfolioadminid}`)
    //.then(res => console.log(res.data))    
    .then(res => setMotto(res.data))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  const getPhilosophy = async () => {
    try {
          await axios.get(`http://localhost:5000/philosophy/${portfolioadminid}`)
    //.then(res => console.log(res.data))    
    .then(res => setPhilosophy(res.data))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }


  const getWorkEperience = async () => {
    try {
          await axios.get(`http://localhost:5000/workexperience/${portfolioadminid}`)
    //.then(res => console.log(res.data))    
    .then(res => setWorkExperience(res.data))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  const getReference = async () => {
    try {
          await axios.get(`http://localhost:5000/reference/${portfolioadminid}`)
    //.then(res => console.log(res.data))    
    .then(res => setReference(res.data))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }


  
  getReference();
  getWorkEperience();
  getPhilosophy();
  getMotto();
  getHobby();
  getEducationQualification();
  getGoal();
  getBiodata();
  getCoverPageItems();
}, [portfolioadminid]);

  const ComponentToPrint = forwardRef((props, ref) => {
    return <div ref={ref}>
<React.Fragment>
<div className="print__bg">
<div className="heading__parent-ty">
      <h1 className="heading-print">
        <span className="heading-primary-main1">I</span>
        <span className="heading-primary-main2">AM</span>
       
        <div className="text-box-inner">
          <span className="heading-primary-main3">
          { coverPage.map((User, index) => (
            
          <React.Fragment key={User.portfolioadminid}>
         
        {User.firstname}
         </React.Fragment>
         
        ))}
          </span>
          <span className="heading-primary-main4">
        { coverPage.map((User, index) => (
          <React.Fragment  key={User.portfolioadminid}>
        {User.lastname}
         </React.Fragment>
        ))}

        </span>
        </div>
      </h1>
     
    </div>
    <div className="inner__left-u">
      <div className="name_parent">
        <h4 className="name_text">
        { coverPage.map((User, index) => (
          <React.Fragment  key={User.portfolioadminid}>
        {User.position}
         </React.Fragment>
        ))}
        </h4>
      </div>

      <div className='CONTACT'>
      <p className="addres">
      { coverPage.map((User, index) => (
          <React.Fragment  key={User.portfolioadminid}>
        {User.address}
         </React.Fragment>
        ))}
        </p>
      <p className="address__city">
      { coverPage.map((User, index) => (
          <React.Fragment  key={User.portfolioadminid}>
        {User.city}
         </React.Fragment>
        ))}
         </p>
      <p className="contact__no"><span>Tel: </span>
      { coverPage.map((User, index) => (
          <React.Fragment  key={User.portfolioadminid}>
        {User.phoneno}
         </React.Fragment>
        ))}
      </p>
      <p className="contact__no"><span>Email: </span>
      { coverPage.map((User, index) => (
          <React.Fragment  key={User.portfolioadminid}>
        {User.email}
         </React.Fragment>
        ))}
      </p>
      </div>
      <h2>
        <p className="sub_header"><span>Goal:</span></p>
      </h2>
      <p>
      { goal.map((Goal, index) => (
          <React.Fragment  key={Goal.goalid}>
        <p>
          <span>{Goal.mygoal}</span>
         
          
        </p>
        </React.Fragment>
        ))}
      </p>
      <h2>
        <p className="sub_header"><span>BIO-DATA:</span></p>
      </h2>
    

      <p className="bio__flex-p ">
        <span>SEX:</span>
        <span>
        { biodata.map((bio, index) => (
            <React.Fragment  key={bio.biodataid}>
          {bio.sex}
          </React.Fragment>
          ))}
        </span>
        </p>
      <p className="bio__flex">
      <span>DATE OF BIRTH:</span>
      <span>
      { biodata.map((bio, index) => (
            <React.Fragment  key={bio.biodataid}>
          {bio.dob}
          </React.Fragment>
          ))}
        </span></p>
      <p className="bio__flex">
        <span>STATE OF ORIGIN:</span>
      <span>
      { biodata.map((bio, index) => (
            <React.Fragment  key={bio.biodataid}>
          {bio.soo}
          </React.Fragment>
          ))}
        </span></p>
      <p className="bio__flex">
        <span>MARITAL STATUS:</span> 
        <span>
        { biodata.map((bio, index) => (
            <React.Fragment  key={bio.biodataid}>
          {bio.marital}
          </React.Fragment>
          ))}
          </span></p>
      <p className="bio__flex">
        <span>DISABILITY:</span> 
        <span>
        { biodata.map((bio, index) => (
            <React.Fragment  key={bio.biodataid}>
          {bio.impairment}
          </React.Fragment>
          ))}
          </span></p>
      <p className="bio__flex">
        <span>RELIGION:</span> 
        <span>
        { biodata.map((bio, index) => (
            <React.Fragment  key={bio.biodataid}>
          {bio.religion}
          </React.Fragment>
          ))}
          </span></p>
      <p className="bio__flex">
        <span>NATIONALITY:</span> 
        <span>
        { biodata.map((bio, index) => (
            <React.Fragment  key={bio.biodataid}>
          {bio.nationality}
          </React.Fragment>
          ))}
          </span></p>

       

       
    </div>
     
      
        <div className="inner__behave-o">
      <h2>
        <p className="sub_header-EB">EDUCATIONAL BACKGROUND:</p>
      </h2>
      <p>
       <span>
       {qualification.map((edu, index) => (
            <React.Fragment  key={edu.eduqualid}>
          {edu.institution}
          </React.Fragment>
          ))}
       </span>
        <span>
        {qualification.map((edu, index) => (
            <React.Fragment  key={edu.eduqualid}>
          {edu.qualiobtained}
          </React.Fragment>
          ))}
        </span>
        <span>
        {qualification.map((edu, index) => (
            <React.Fragment  key={edu.eduqualid}>
          {edu.startdate}
          </React.Fragment>
          ))}
        </span>
        <span>
        {qualification.map((edu, index) => (
            <React.Fragment  key={edu.eduqualid}>
          {edu.enddate}
          </React.Fragment>
          ))}
        </span>
        <span>
        {qualification.map((edu, index) => (
            <React.Fragment  key={edu.eduqualid}>
          {edu.country}
          </React.Fragment>
          ))}
        </span>
     
      </p>
    <div className='QUALIFICATION'>
      <h2>
        <p className="sub_header">QUALIFICATION:</p>
      </h2>
      <p>
      <span>
        {qualification.map((edu, index) => (
            <React.Fragment  key={edu.eduqualid}>
          {edu.qualiobtained}
          </React.Fragment>
          ))}
        </span>
      </p>
     
      </div>
      <div className='HOBBIES'>
      <h2>
        <p className="sub_header">HOBBIES:</p>
      </h2>
      <p> 
      {hobby.map((hob, index) => (
            <React.Fragment  key={hob.hobbyid}>
         <span>{hob.body}</span> 
          
      
          </React.Fragment>
          ))}
      </p>
     </div>

     <div className='MOTTO'>
      <h2>
        
        <p className="sub_header"> MOTTO:</p>
      </h2>
      <p>
      {motto.map((mot, index) => (
            <React.Fragment  key={mot.mottoid}>
         <span>{mot.body}</span> 
      
          </React.Fragment>
          ))}
      </p>
      </div>
    </div>
     
       
        <div className="inner__left2-y">
        <div className='Philosophy'>
      <h2>
        <p className="sub_header__PH">Philosophy: </p>
      </h2>
      <p>
      {philosophy.map((phi, index) => (
            <React.Fragment  key={phi.philosophyid}>
          <span>{phi.body}</span>
      
          </React.Fragment>
          ))}
        </p>
     </div>
     <div className='WORKEXPERIENCE'>
      <h2>
        <p className="sub_header">WORK EXPERIENCE :</p>
      </h2>
      <p>
       <span>
       {workExperience.map((work, index) => (
            <React.Fragment  key={work.workexperienceid}>
          {work.organisation}
          </React.Fragment>
          ))}
       </span>
       <span>
       {workExperience.map((work, index) => (
            <React.Fragment  key={work.workexperienceid}>
          {work.position}
          </React.Fragment>
          ))}
       </span>
       <span>
       {workExperience.map((work, index) => (
            <React.Fragment  key={work.workexperienceid}>
          {work.startdate}
          </React.Fragment>
          ))}
       </span>
       <span>
       {workExperience.map((work, index) => (
            <React.Fragment  key={work.workexperienceid}>
          {work.enddate}
          </React.Fragment>
          ))}
       </span>
       <span>
       {workExperience.map((work, index) => (
            <React.Fragment  key={work.workexperienceid}>
          {work.country}
          </React.Fragment>
          ))}
       </span>
         </p>
         </div>
    
      <div className='REFEREES'>
      <h2>
        <p className="sub_header-u">REFEREES:</p>
      </h2>
      <p>
      <span>
       {reference.map((ref, index) => (
            <React.Fragment  key={ref.referenceid}>
          {ref.fullname}
          </React.Fragment>
          ))}
       </span>

      </p>
      <p>
      <span>
       {reference.map((ref, index) => (
            <React.Fragment  key={ref.referenceid}>
          {ref.phoneno}
          </React.Fragment>
          ))}
       </span>
        </p>
      
      <p><span> Tele: </span>
      <span>
       {reference.map((ref, index) => (
            <React.Fragment  key={ref.referenceid}>
          {ref.address}
          </React.Fragment>
          ))}
       </span>
       </p>
       </div>


    </div>
    </div>

</React.Fragment>
      
      
      </div>;
  });

  return (
    <div>
           <ReactToPrint content={() => ref.current}>
        <PrintContextConsumer>
          {({handlePrint}) => (
            <button 
            onClick={() =>{
              
              handlePrint()
            }}

            >Print this out!</button>
            
          )}
        </PrintContextConsumer>
      </ReactToPrint>
      <ComponentToPrint  ref={ref} />
    </div>
  )
}
