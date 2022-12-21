import React from 'react';
import { useState, useEffect  } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styled from 'styled-components';
import UpdateAcc from './UpdateAccount';
import Goal from "../CVData/Goal"
import BioData from '../CVData/BioData';
import EduQualification from '../CVData/EduQualification'
import Hobby from '../CVData/Hobby'
import Motto from '../CVData/Motto'
import Philosophy from '../CVData/Philosophy'
import WorkExperience from '../CVData/WorkExperience'
import Reference from '../CVData/Reference'
import Icon from '../../Icon';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PrintPortfolio from '../PrintPortfolio';
import Project from '../CVData/Project';
import Skills from '../CVData/Skills';
import Letter from './Letter';
import Post from './Post/Post';
//import Swal from 'sweetalert2'
// import Login from '../Login/Login';
// import useToken from '../App/useToken';

function Admin() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  //const [token, setToken] = useState('');
  const [portfolioadminid, setPortfolioadminid] = useState('');

  //const { token, setToken } = useToken();
 


  
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);



 // const [screenStatus,setScreenStatus] = useState(false);
  const [dashStatus,setDashStatus] = useState(false);
  const [adminStatus,setAdminStatus] = useState(false);
  const [goalStatus,setGoalStatus] = useState(false);
  const [bioDataStatus,setBioDataStatus] = useState(false);
  const [eduQualiStatus,setEduQualiStatus] = useState(false);
  const [hobbyStatus,setHobbyStatus] = useState(false);
  const [mottoStatus,setMottoStatus] = useState(false);
  const [philosophyStatus,setPhilosophyStatus] = useState(false);
  const [workExperenceStatus,setWorkExperenceStatus] = useState(false);
  const [referenceStatus,setReferenceStatus] = useState(false);
  const [projectStatus,setProjectStatus] = useState(false);
  const [skillStatus,setSkillStatus] = useState(false);
  const [letterStatus,setLetterStatus] = useState(false);
  const [postStatus,setPostStatus] = useState(false);


 // const [screenStatusSmall,setScreenStatusSmall] = useState(false);
  const [dashStatusSmall,setDashStatusSmall] = useState(false);
  const [adminStatusSmall,setAdminStatusSmall] = useState(false);
  const [goalStatusSmall,setGoalStatusSmall] = useState(false);
  const [bioDataStatusSmall,setBioDataStatusSmall] = useState(false);
  const [eduQualiStatusSmall,setEduQualiStatusSmall] = useState(false);
  const [hobbyStatusSmall,setHobbyStatusSmall] = useState(false);
  const [mottoStatusSmall,setMottoStatusSmall] = useState(false);
  const [philosophyStatusSmall,setPhilosophyStatusSmall] = useState(false);
  const [workExperenceStatusSmall,setWorkExperenceStatusSmall] = useState(false);
  const [referenceStatusSmall,setReferenceStatusSmall] = useState(false);
  const [menuStatusSmall,setMenuStatusSmall] = useState(false);
  const [projectStatusSmall,setProjectStatusSmall] = useState(false);
 const [skillStatusSmall,setSkillStatusSmall] = useState(false);
 const [letterStatusSmall,setLetterStatusSmall] = useState(false);
 const [postStatusSmall,setPostStatusSmall] = useState(false);

  const history = useNavigate();


useEffect(() => {
const readLocation = window.location.pathname
if(readLocation.match(/goal.*/) ){
  setGoalStatus(true);
  setGoalStatusSmall(true);
 
}

if(readLocation.match(/biodata.*/) ){
  setBioDataStatus(true);
  setBioDataStatusSmall(true);
 
}

if(readLocation.match(/education.*/) ){
  setEduQualiStatus(true);
  setEduQualiStatusSmall(true);
}

if(readLocation.match(/hobby.*/) ){
  setHobbyStatus(true);
  setHobbyStatusSmall(true);
 
}

if(readLocation.match(/motto.*/) ){
  setMottoStatus(true);
  setMottoStatusSmall(true);
 
}

if(readLocation.match(/philosophy.*/) ){
  setPhilosophyStatus(true);
  setPhilosophyStatusSmall(true);
 
}

if(readLocation.match(/workexperience.*/) ){
  setWorkExperenceStatus(true);
  setWorkExperenceStatusSmall(true);
 
}

if(readLocation.match(/reference.*/) ){
  setReferenceStatus(true);
  setReferenceStatusSmall(true);
 
}
if(readLocation.match(/project.*/) ){
  setProjectStatus(true);
  setProjectStatusSmall(true);
 
}
if(readLocation.match(/adminupdate.*/) ){
  setDashStatus(true);
  setDashStatusSmall(true);
 
}
if(readLocation.match(/skills.*/) ){
  setSkillStatus(true);
  setSkillStatusSmall(true);
 
}
if(readLocation.match(/post.*/) ){
  setPostStatus(true);
  setPostStatusSmall(true);

}
},[])

useEffect(() => {

  const token = JSON.parse(localStorage.getItem('token'))

  const refreshToken = async (token) => {
    try {
        const response = await axios.get('http://localhost:8000/api/profile/',{
          headers: {
            Authorization : `Bearer ${token}`
          
          },
        
        })
      setPortfolioadminid(response.data.portfolioadminid);
        setName(response.data.firstname);
        setImage(response.data.image);
        setEmail(response.data.email);
        
    } catch (error) {
        if (error.response) {
          console.log(error.response.data);
           history("/login");
            
        }
    }
}


 refreshToken(token);
 
}, [name,image, history]);
 
  const Logout = async (email) => {
      try {
          await axios.post('http://localhost:8000/api/signout',
        {email: email},
        {headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000/'
        }},
          
          )
          localStorage.removeItem('token')
          history("/");
         
      } catch (error) {
          console.log(error);
      }
  }

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <Container>
       {matches && (
       
       
        <>
        
        <Header>
        
        <>
          <NavLink

            onClick={() =>{
              //setScreenStatus(true);
              setDashStatus(false);
              setAdminStatus(false);
              setGoalStatus(false);
              setEduQualiStatus(false);
              setBioDataStatus(false);
              setHobbyStatus(false);
              setMottoStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setProjectStatus(false);
              setSkillStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
            to={`/home/${portfolioadminid}`}
          >
            
           
            Home
          </NavLink>
</>
          <BioDataClose 
            onClick={() =>{
              setBioDataStatus(true) ;
             // setScreenStatus(false) ;
              setDashStatus(false);
              setAdminStatus(false);
              setGoalStatus(false);
              setEduQualiStatus(false);
              setHobbyStatus(false);
              setMottoStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setProjectStatus(false);
              setSkillStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
          
          >
            Add BioData
          </BioDataClose>

          <EduQualiClose 
            onClick={() =>{
              setEduQualiStatus(true);
              setBioDataStatus(false);
              //setScreenStatus(false);
              setDashStatus(false);
              setAdminStatus(false);
              setGoalStatus(false);
              setHobbyStatus(false);
              setMottoStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setProjectStatus(false);
              setSkillStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
          
          >
            Add qualification
          </EduQualiClose>

          <HobbyBtn 
            onClick={() =>{
              setHobbyStatus(true);
              setEduQualiStatus(false);
              setBioDataStatus(false);
              //setScreenStatus(false);
              setDashStatus(false);
              setAdminStatus(false);
              setGoalStatus(false);
              setMottoStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setProjectStatus(false);
              setSkillStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
          
          >
            Add Hobby
          </HobbyBtn>

          <MottoBtn 
            onClick={() =>{
              setMottoStatus(true);
              setHobbyStatus(false);
              setEduQualiStatus(false);
              setBioDataStatus(false);
             // setScreenStatus(false);
              setDashStatus(false);
              setAdminStatus(false);
              setGoalStatus(false);
              setPhilosophyStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setProjectStatus(false);
              setSkillStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
          
          >
            Add Motto
          </MottoBtn>

          <WorkExperenceBtn
            onClick={() =>{
              setWorkExperenceStatus(true);
              setMottoStatus(false);
              setHobbyStatus(false);
              setEduQualiStatus(false);
              setBioDataStatus(false);
             // setScreenStatus(false);
              setDashStatus(false);
              setAdminStatus(false);
              setGoalStatus(false);
              setPhilosophyStatus(false);
              setPhilosophyStatus(false);
              setReferenceStatus(false);
              setProjectStatus(false);
              setSkillStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
          
          >
            Add Work Experence
          </WorkExperenceBtn>

          <ReferenceBtn 
            onClick={() =>{
              setReferenceStatus(true);
              setMottoStatus(false);
              setHobbyStatus(false);
              setEduQualiStatus(false);
              setBioDataStatus(false);
             // setScreenStatus(false);
              setDashStatus(false);
              setAdminStatus(false);
              setGoalStatus(false);
              setPhilosophyStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setProjectStatus(false);
              setSkillStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
          
          >
            Add Reference
          </ReferenceBtn>

          <PhilosophyBtn 
            onClick={() =>{
              setPhilosophyStatus(true);
              setMottoStatus(false);
              setHobbyStatus(false);
              setEduQualiStatus(false);
              setBioDataStatus(false);
             // setScreenStatus(false);
              setDashStatus(false);
              setAdminStatus(false);
              setGoalStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setProjectStatus(false);
              setSkillStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
          
          >
            Add Philosophy
          </PhilosophyBtn>

          <AddSkills
            onClick={() =>{
            
              setSkillStatus(true);
              //setScreenStatus(false);
              setAdminStatus(false);
              setGoalStatus(false);
              setBioDataStatus(false) ;
              setEduQualiStatus(false);
              setHobbyStatus(false);
              setMottoStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setProjectStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
          
          >
            Add Skills
          </AddSkills>

          <GoalBtn
            onClick={() =>{
              setGoalStatus(true);
              setDashStatus(false);
             // setScreenStatus(false) ;
              setAdminStatus(false);
              setBioDataStatus(false) ;
              setEduQualiStatus(false);
              setHobbyStatus(false);
              setMottoStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setProjectStatus(false);
              setSkillStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
          
          >
            Add Goal
          </GoalBtn>

          <AdminBoard 
            onClick={() =>{
              setAdminStatus(true);
              setDashStatus(false);
             // setScreenStatus(false);
              setGoalStatus(false);
              setBioDataStatus(false);
              setEduQualiStatus(false);
              setHobbyStatus(false);
              setMottoStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setProjectStatus(false);
              setSkillStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
          
          >
            Print Portfolio
          </AdminBoard>

          <AddProjectBTN 
            onClick={() =>{
              setProjectStatus(true);
              setAdminStatus(false);
              setDashStatus(false);
             // setScreenStatus(false);
              setGoalStatus(false);
              setBioDataStatus(false);
              setEduQualiStatus(false);
              setHobbyStatus(false);
              setMottoStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setSkillStatus(false);
              setLetterStatus(false);
              setPostStatus(false);
            }}
          
          >
            Add Project
          </AddProjectBTN>
          
          <LetterBTN 
            onClick={() =>{
              setLetterStatus(true);
              setProjectStatus(false);
              setAdminStatus(false);
              setDashStatus(false);
             // setScreenStatus(false);
              setGoalStatus(false);
              setBioDataStatus(false);
              setEduQualiStatus(false);
              setHobbyStatus(false);
              setMottoStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setSkillStatus(false);
              setPostStatus(false);
            }}
          
          >
            Cover Letter
          </LetterBTN>
          <PostBTN 
            onClick={() =>{
              setPostStatus(true);
              setLetterStatus(false);
              setProjectStatus(false);
              setAdminStatus(false);
              setDashStatus(false);
             // setScreenStatus(false);
              setGoalStatus(false);
              setBioDataStatus(false);
              setEduQualiStatus(false);
              setHobbyStatus(false);
              setMottoStatus(false);
              setPhilosophyStatus(false);
              setWorkExperenceStatus(false);
              setReferenceStatus(false);
              setSkillStatus(false);
            }}
          
          >
            Blog
          </PostBTN>

         <Button type="submit" variant="danger" 
         onClick={() =>{Logout(email)}}>
        Logout
      </Button> 
        </Header>
<Greeting>

  <ImgWrap>
  <img src={`http://localhost:8000/storage/product/image/${image}`}  alt={`${name}`} />
  </ImgWrap>
  <h1>
  Welcome Back: {name}
  </h1>
</Greeting>

        <ContentMain>
        
        <DashWrap show = {dashStatus}  > 
        
      <UpdateAcc/>
      </DashWrap>

      <SkillsWrap show = {skillStatus}  > 
       <Skills/> 
      </SkillsWrap>

      <PrintWrap show = {adminStatus}  > 
       <PrintPortfolio/> 
      </PrintWrap>

      <GoalWrap show = {goalStatus}  > 
      <Goal/>
      </GoalWrap>

      <BioDataWrap show = {bioDataStatus}  > 
      <BioData/>
      </BioDataWrap>

      <EduQualiWrap show = {eduQualiStatus}  > 
      <EduQualification/>
      </EduQualiWrap>

      <HobbyWrap show = {hobbyStatus} > 
      <Hobby/>
      </HobbyWrap>

      <MottoWrap show = {mottoStatus}  > 
      <Motto/>
      </MottoWrap>

      <PhilosophyWrap show = {philosophyStatus}  > 
      <Philosophy/>
      </PhilosophyWrap>

      <WorkExperenceWrap show = {workExperenceStatus} > 
      <WorkExperience/>
      </WorkExperenceWrap>

      <ReferenceWrap show = {referenceStatus} > 
      <Reference/>
      </ReferenceWrap>

      <ProjectWrap show = {projectStatus} > 
      <Project/>
      </ProjectWrap>

      <LetterWrap show = {letterStatus} > 
      <Letter/>
      </LetterWrap>
      <PostWrap show = {postStatus} > 
      <Post/>
      </PostWrap>
    
      </ContentMain>

        </>
        
        )}

{!matches && (
          <>
          <HeaderSmall show = {menuStatusSmall}>

            <IconCloseWrap
            
            onClick={() =>{
              setMenuStatusSmall(false);
            
            }}
            >
          <Icon icon="cross" size={20} color="white" />
          </IconCloseWrap>

      
             <NavLink
            onClick={() =>{
             // setScreenStatusSmall(true) ;
              setDashStatusSmall(false);
              setAdminStatusSmall(false);
              setGoalStatusSmall(false);
              setBioDataStatusSmall(false);
              setEduQualiStatusSmall(false);
              setHobbyStatusSmall(false);
              setMottoStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setProjectStatusSmall(false);
              setSkillStatusSmall(false);
              setLetterStatusSmall(false);
              setPostStatusSmall(false);
            }}
            to={`/home/${portfolioadminid}`} 
           
           >
            Home
          </NavLink>

          <BioDataCloseSmall 
            onClick={() =>{
              setBioDataStatusSmall(true);
             // setScreenStatusSmall(false);
              setDashStatusSmall(false);
              setAdminStatusSmall(false);
              setGoalStatusSmall(false);
              setBioDataStatusSmall(false);
              setEduQualiStatusSmall(false);
              setHobbyStatusSmall(false);
              setMottoStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setProjectStatusSmall(false);
              setSkillStatusSmall(false);
              setLetterStatusSmall(false);
              setPostStatusSmall(false);
            }}
          
          >
            Add BioData
          </BioDataCloseSmall>

          <EduQualiCloseSmall 
            onClick={() =>{
              setEduQualiStatusSmall(true);
              setBioDataStatusSmall(false);
             // setScreenStatusSmall(false);
              setDashStatusSmall(false);
              setAdminStatusSmall(false);
              setGoalStatusSmall(false);
              setHobbyStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setProjectStatusSmall(false);
              setSkillStatusSmall(false);
              setLetterStatusSmall(false);
              setPostStatusSmall(false);
            }}
          
          >
            Add Qualification
          </EduQualiCloseSmall>

          <HobbyBtnSmall 
            onClick={() =>{
              setHobbyStatusSmall(true);
              setEduQualiStatusSmall(false);
              setBioDataStatusSmall(false);
             // setScreenStatusSmall(false);
              setDashStatusSmall(false);
              setAdminStatusSmall(false);
              setGoalStatusSmall(false);
              setMottoStatusSmall(false);
              setMottoStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setProjectStatusSmall(false);
              setSkillStatusSmall(false);
              setLetterStatusSmall(false);
              setPostStatusSmall(false);
            }}
          
          >
            Add Hobby
          </HobbyBtnSmall>


          <MottoBtnSmall
            onClick={() =>{
              setMottoStatusSmall(true);
              setHobbyStatusSmall(false);
              setEduQualiStatusSmall(false);
              setBioDataStatusSmall(false);
             // setScreenStatusSmall(false);
              setDashStatusSmall(false);
              setAdminStatusSmall(false);
              setGoalStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setProjectStatusSmall(false);
              setSkillStatusSmall(false);
              setLetterStatusSmall(false);
              setPostStatusSmall(false);
            }}
          
          >
            Add Motto
          </MottoBtnSmall>

          <PhilosophyBtnSmall 
            onClick={() =>{
              setPhilosophyStatusSmall(true);
              setMottoStatusSmall(false);
              setHobbyStatusSmall(false);
              setEduQualiStatusSmall(false);
              setBioDataStatusSmall(false);
              //setScreenStatusSmall(false);
              setDashStatusSmall(false);
              setAdminStatusSmall(false);
              setGoalStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setProjectStatusSmall(false);
              setSkillStatusSmall(false);
              setPostStatusSmall(false);
            }}
          
          >
            Add Philosophy
          </PhilosophyBtnSmall>

          <WorkExperenceBtnSmall
            onClick={() =>{
              setWorkExperenceStatusSmall(true);
              setMottoStatusSmall(false);
              setHobbyStatusSmall(false);
              setEduQualiStatusSmall(false);
              setBioDataStatusSmall(false);
              //setScreenStatusSmall(false);
              setDashStatusSmall(false);
              setAdminStatusSmall(false);
              setGoalStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setProjectStatusSmall(false);
              setSkillStatusSmall(false);
              setLetterStatusSmall(false);
              setPostStatusSmall(false);
            }}
          
          >
            Add Work Experence
          </WorkExperenceBtnSmall>

          <ReferenceBtnSmall 
            onClick={() =>{
              setReferenceStatusSmall(true);
              setMottoStatusSmall(false);
              setHobbyStatusSmall(false);
              setEduQualiStatusSmall(false);
              setBioDataStatusSmall(false);
             // setScreenStatusSmall(false);
              setDashStatusSmall(false);
              setAdminStatusSmall(false);
              setGoalStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setMenuStatusSmall(false);
              setProjectStatusSmall(false);
              setSkillStatusSmall(false);
              setLetterStatusSmall(false);
              setPostStatusSmall(false);
            }}
          
          >
            Add Reference
          </ReferenceBtnSmall>
 
          <AddSkillsSmall 
          onClick={() =>{
            
            setSkillStatusSmall(true);
            //setScreenStatusSmall(false) 
            setAdminStatusSmall(false);
            setGoalStatusSmall(false);
            setBioDataStatusSmall(false);
            setEduQualiStatusSmall(false);
            setHobbyStatusSmall(false);
            setMottoStatusSmall(false);
            setPhilosophyStatusSmall(false);
            setWorkExperenceStatusSmall(false);
            setReferenceStatusSmall(false);
            setMenuStatusSmall(false);
            setProjectStatusSmall(false);
            setLetterStatusSmall(false);
            setPostStatusSmall(false);
          }}
          
          >
          Add Skills
          </AddSkillsSmall> 

          
          <GoalBtnSmall
            onClick={() =>{
              setGoalStatusSmall(true);
              setDashStatusSmall(false);
             // setScreenStatusSmall(false) ;
              setAdminStatusSmall(false);
              setBioDataStatusSmall(false);
              setEduQualiStatusSmall(false);
              setHobbyStatusSmall(false);
              setMottoStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setProjectStatusSmall(false);
              setSkillStatusSmall(false);
              setLetterStatusSmall(false);
              setPostStatusSmall(false);
            }}
          
          >
            Add Goal
          </GoalBtnSmall>

          <AdminBoardSmall 
            onClick={() =>{
              setAdminStatusSmall(true);
              setDashStatusSmall(false);
              //setScreenStatusSmall(false) ;
              setGoalStatusSmall(false);
              setBioDataStatusSmall(false);
              setEduQualiStatusSmall(false);
              setHobbyStatusSmall(false);
              setMottoStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setProjectStatusSmall(false);
              setSkillStatusSmall(false);
              setLetterStatusSmall(false);
              setPostStatusSmall(false);
            }}
          
          >
            Print Portfolio
          </AdminBoardSmall>

          <ProjectBTNSmall 
            onClick={() =>{
              
              setProjectStatusSmall(true);
              setAdminStatusSmall(false);
              setDashStatusSmall(false);
             // setScreenStatusSmall(false) ;
              setGoalStatusSmall(false);
              setBioDataStatusSmall(false);
              setEduQualiStatusSmall(false);
              setHobbyStatusSmall(false);
              setMottoStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setSkillStatusSmall(false);
              setLetterStatusSmall(false);
              setPostStatusSmall(false);
            }}
          
          >
            Add Project
          </ProjectBTNSmall>

          <LetterBTNSmall 
            onClick={() =>{
              setLetterStatusSmall(true);
              setProjectStatusSmall(false);
              setAdminStatusSmall(false);
              setDashStatusSmall(false);
             // setScreenStatusSmall(false) ;
              setGoalStatusSmall(false);
              setBioDataStatusSmall(false);
              setEduQualiStatusSmall(false);
              setHobbyStatusSmall(false);
              setMottoStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setSkillStatusSmall(false);
              setPostStatusSmall(false);
            }}
          
          >
            cover Letter
          </LetterBTNSmall>

          <PostBTNSmall 
            onClick={() =>{
              setPostStatusSmall(true);
              setLetterStatusSmall(false);
              setProjectStatusSmall(false);
              setAdminStatusSmall(false);
              setDashStatusSmall(false);
             // setScreenStatusSmall(false) ;
              setGoalStatusSmall(false);
              setBioDataStatusSmall(false);
              setEduQualiStatusSmall(false);
              setHobbyStatusSmall(false);
              setMottoStatusSmall(false);
              setPhilosophyStatusSmall(false);
              setWorkExperenceStatusSmall(false);
              setReferenceStatusSmall(false);
              setMenuStatusSmall(false);
              setSkillStatusSmall(false);
            }}
          
          >
            Blog
          </PostBTNSmall>

          <Button type="submit" variant="danger" onClick={() =>{Logout(email)}}>
            Logout
          </Button>
          </HeaderSmall>

          <GreetingSmall>
          <ImgWrapSmall>
          <img src={`http://localhost:8000/storage/product/image/${image}`}  alt={`${name}`} />
  
  </ImgWrapSmall>
<h1>Welcome Back: {name}</h1>

<IconOpenWrap
            
            onClick={() =>{
              setMenuStatusSmall(true) ;
            
            }}
            >
          <Icon icon="cross" size={20} color="white" />
          </IconOpenWrap>

</GreetingSmall>

<ContentMainSmall>

      <AddSkillsWrapSmall show = {skillStatusSmall}  > 
       <Skills/> 
      </AddSkillsWrapSmall>

      <DashWrapSmall show = {dashStatusSmall}  > 
      <UpdateAcc/>
      </DashWrapSmall>

      <PrintWrapSmall show = {adminStatusSmall} > 
       <PrintPortfolio/> 
      </PrintWrapSmall>

      <GoalWrapSmall show = {goalStatusSmall}  > 
      <Goal/>
      </GoalWrapSmall>

      <BioDataWrapSmall show = {bioDataStatusSmall} > 
      <BioData/>
      </BioDataWrapSmall>


      <EduQualiWrapSmall show = {eduQualiStatusSmall}  > 
      <EduQualification/>
      </EduQualiWrapSmall>

      <HobbyWrapSmall show = {hobbyStatusSmall}  > 
      <Hobby/>
      </HobbyWrapSmall>

      <MottoWrapSmall show = {mottoStatusSmall} > 
      <Motto/>
      </MottoWrapSmall>

      <PhilosophyWrapSmall show = {philosophyStatusSmall}  > 
      <Philosophy/>
      </PhilosophyWrapSmall>

      <WorkExperenceWrapSmall show = {workExperenceStatusSmall}  > 
      <WorkExperience/>
      </WorkExperenceWrapSmall>

      <ReferenceWrapSmall show = {referenceStatusSmall}  > 
      <Reference/>
      </ReferenceWrapSmall>

      <ProjectWrapSmall show = {projectStatusSmall}  > 
      <Project/>
      </ProjectWrapSmall>

      <LetterWrapSmall show = {letterStatusSmall}  > 
      <Letter/>
      </LetterWrapSmall>

      <PostWrapSmall show = {postStatusSmall}  > 
      <Post/>
      </PostWrapSmall>


      </ContentMainSmall>
          </>
          )}
      
    </Container>
  );
}

export default Admin;

const Container = styled.div`
width:100%;
height:100%;
overflow-y: hidden;
overflow-x: hidden;
background-image: linear-gradient(
  to right top,
  rgb(76, 0, 130),
  rgb(100, 0, 0)
);
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
@media (max-width:820px) {
  width:100%;
  height:100%;

}

`
const NavLink = styled(Link)`  
color:#fff;
text-decoration:none;
width:8%
hight:3.5%
border-radius:8px;
box-shadow: 0 10px 50px #000;
padding:.9%;
outline:none;
cursor:pointer;
border:none;
background:blue;
margin-left:1%;
`

const ContentMain = styled.div`
position:absolute;
top:10%;
width: 90%;
height:90%;
margin-left: 5%;
box-shadow: 0 10px 50px #000;
background:navy;
z-index: 1;
overflow-y: scroll;
overflow-x: hidden;

`

const Header = styled.div`
background:rgb(76, 0, 130);
box-shadow: 0 10px 50px #000;
position:sticky;
top:0;
 z-index:100;
width:90%;
height:10%;
margin-left: 5%;
margin-bottom: 10%;
border-radius: 1%;
display:flex;
align-items:center;
justify-content:space-between;
@media (max-width:820px) {
  width:90%;
  height:10%;

}

`

const Greeting = styled(Header)`
position:absolute;
top:11%;
z-index:2;
margin-left:40%;
width:50%;
color:#fff;
background:rgb(7, 0, 130);
display:flex;
align-items:center;
justify-content:space-between;
text-transform:uppercase;
@media (max-width:820px) {
  width:50%;
  height:10%;

}

`
const ImgWrap = styled.div`

width: 10% ;
height: 90%;
border-radius: 50%;
margin-top: 0%;
img{
  width: 100%;
  height: 100%;
  border-radius: 100%;

}

`



const SkillsWrap = styled.div`
width:90%;
transition: all .3s linear;
z-index:20;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(-120%)'};
`

const PostWrap = styled.div`
width:90%;
transition: all .3s linear;
z-index:20;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(-120%)'};
`

const DashWrap = styled.div`
width:90%;
transition: all .3s linear;
z-index:10;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(120%)'};
`

const GoalWrap = styled.div`
width:90%;
transition: all .3s linear;
z-index:25;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(120%)'};
`


const AddNameBtn = styled.button`
width:8%
hight:3.5%
border-radius:8px;
box-shadow: 0 10px 50px #000;
padding:.9%;
color:#fff;
outline:none;
cursor:pointer;
border:none;
background:blue;
margin-left:1%;
transition: all .3s linear;
transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};

&:hover{
  opacity:.5;
  transform:scale(1.05);
}
`


const AddSkills = styled(AddNameBtn)`


 `
const AdminBoard = styled(AddNameBtn)`


`
const AddProjectBTN = styled(AddNameBtn)`


`

const GoalBtn = styled(AddNameBtn)`


`

const BioDataClose = styled(AddNameBtn)`


`

const EduQualiClose = styled(AddNameBtn)`


`
const HobbyBtn = styled(AddNameBtn)`


`
const MottoBtn = styled(AddNameBtn)`


`
const PhilosophyBtn = styled(AddNameBtn)`


`

const WorkExperenceBtn = styled(AddNameBtn)`


`
const ReferenceBtn = styled(AddNameBtn)`


`
const LetterBTN = styled(AddNameBtn)`


`

const PostBTN = styled(AddNameBtn)`


`



const PrintWrap = styled.div`
width:90%;
transition: all .3s linear;
z-index:30;
position:absolute;
top:10%;
left:5%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(120%)'};
`
const BioDataWrap = styled.div`
width:90%;
transition: all .3s linear;
z-index:30;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(120%)'};
`

const EduQualiWrap = styled.div`
width:90%;
transition: all .3s linear;
z-index:30;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(120%)'};
`

const HobbyWrap = styled(EduQualiWrap)`

`
const MottoWrap = styled(EduQualiWrap)`

`
const PhilosophyWrap = styled(EduQualiWrap)`

`
const WorkExperenceWrap = styled(EduQualiWrap)`

`
const ReferenceWrap = styled(EduQualiWrap)`

`

const ProjectWrap = styled(EduQualiWrap)`

`
const LetterWrap = styled(EduQualiWrap)`

`



const HeaderSmall = styled.div`
background:rgb(76, 0, 130);
box-shadow: 0 10px 50px #000;
position:absolute;
top:2%;
right:0;
bottom:0;
z-index:100;
width:45%;
height:80%;
border-radius: 1%;
display:flex;
flex-direction:column;
overflow-Y:scroll;
align-items:start;
justify-content:space-around;
transition: all .3s linear;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
`
const IconOpenWrap = styled(MenuIcon)`
position:absolute;
top:20%;
right:4%;
corsor:pointer;
`
const IconCloseWrap = styled(CloseIcon)`
position:absolute;
top:0%;
right:8%;
corsor:pointer;
color:white;
`

const GreetingSmall = styled.div`
position:absolute;
top:0%;
z-index:1;
width:100%;
height:10%;
color:#fff;
background:rgb(7, 0, 130);
display:flex;
align-items:center;
justify-content:center;
text-transform:uppercase;

h1{
  font-size: .8rem; 
}
`
const ImgWrapSmall = styled.div`
position:absolute;
top:4%;
left:2%;
width: 15% ;
height: 90%;
border-radius: 50%;
margin-top: 0%;
img{
  width: 100%;
  height: 100%;
  border-radius: 100%;

}

`

const ContentMainSmall = styled.div`
position:absolute;
top:10.1%;
width:90%;
height:87%;
margin-left: 5%;
margin-right: 5%;
box-shadow: 0 10px 50px #000;
background:navy;
z-index: 1;
overflow-y: scroll;
overflow-x: hidden;
@media (max-width:820px) {
  width:90%;
  height:87%;

}
`

const AddSkillsWrapSmall = styled.div`
width:90%;
transition: all .3s linear;
z-index:20;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(-120%)'};
`

const DashWrapSmall = styled.div`
width:90%;
transition: all .3s linear;
z-index:10;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(120%)'};
`

const GoalWrapSmall = styled.div`
width:90%;
transition: all .3s linear;
z-index:25;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(120%)'};
`



const AddNameBtnSmall = styled.button`
width:8%
hight:3.5%
border-radius:8%;
box-shadow: 0 10px 50px #000;
padding:.9%;
color:#fff;
outline:none;
cursor:pointer;
border:none;
background:blue;
margin-left:1%;
transition: all .3s linear;
transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};

&:hover{
  opacity:.5;
  transform:scale(1.05);
}

`




const AddSkillsSmall = styled(AddNameBtnSmall)`


`
const AdminBoardSmall = styled(AddNameBtnSmall)`


`

const GoalBtnSmall = styled(AddNameBtnSmall)`


`
const ProjectBTNSmall = styled(AddNameBtnSmall)`


`

const BioDataCloseSmall = styled.button`
width:8%
hight:3.5%
border-radius:8%;
box-shadow: 0 10px 50px #000;
padding:.9%;
color:#fff;
outline:none;
cursor:pointer;
border:none;
background:blue;
margin-left:1%;
transition: all .3s linear;
transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};

&:hover{
  opacity:.5;
  transform:scale(1.05);
}

`

const EduQualiCloseSmall = styled(AddNameBtnSmall)`


`
const HobbyBtnSmall = styled(AddNameBtnSmall)`


`
const MottoBtnSmall = styled(AddNameBtnSmall)`


`
const PhilosophyBtnSmall = styled(AddNameBtnSmall)`


`

const WorkExperenceBtnSmall = styled(AddNameBtnSmall)`


`
const ReferenceBtnSmall = styled(AddNameBtnSmall)`


`
const LetterBTNSmall = styled(AddNameBtnSmall)`


`

const PostBTNSmall = styled(AddNameBtnSmall)`


`



const PrintWrapSmall = styled.div`
width:90%;
transition: all .3s linear;
z-index:30;
position:absolute;
top:10%;
margin-left:5%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(190%)'};
`
const BioDataWrapSmall = styled.div`
width:90%;
transition: all .3s linear;
z-index:30;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(120%)'};
`

const EduQualiWrapSmall = styled.div`
width:90%;
transition: all .3s linear;
z-index:30;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(190%)'};
`




const HobbyWrapSmall = styled(EduQualiWrapSmall)`

`
const MottoWrapSmall = styled(EduQualiWrapSmall)`

`
const PhilosophyWrapSmall = styled(EduQualiWrapSmall)`

`
const WorkExperenceWrapSmall = styled(EduQualiWrapSmall)`

`
const ReferenceWrapSmall = styled(EduQualiWrapSmall)`

`

const PostWrapSmall = styled(EduQualiWrapSmall)`

`

const ProjectWrapSmall = styled(EduQualiWrapSmall)`
transform: ${props => props.show ? 'translateX(0)': 'translateX(190%)'};
`

const LetterWrapSmall = styled(EduQualiWrapSmall)`
transform: ${props => props.show ? 'translateX(0)': 'translateX(190%)'};
`
