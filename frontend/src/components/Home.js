import React from 'react'
import styled from "styled-components";
import { useState, useEffect  } from 'react'
import { Link, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./custom/home.css"
import "./custom/header.css"
import "./custom/headersmall.css"
import "./custom/inner__left.css"
import "./custom/inner2.css"
import "./custom/inner3.css";
import "./custom/EduQuali.css";
import "./custom/Philosophy.css";
import "./custom/ProjectSection.css"
import "./custom/post_style.css"
import { Button } from "react-bootstrap";
import Icon from '../Icon';



function Home() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [postid, setPostid] = useState("");
  const [reply, setReply] = useState("");
  const [commentid, setCommentid] = useState("");

  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [link_post, setLink_post] = useState("");
  const [postbody, setPostbody] = useState("");
  const [dateT, setDateT] = useState("");


  const [sent, setSent] = useState(false);

 const {portfolioadminid} = useParams();

 const [token, setToken] = useState(" ");


  const [coverPage, setCoverPage] = useState([]);
  const [biodata, setBiodata] = useState([]);
  const [goal, setGoal] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [[...motto], setMotto] = useState([]);
  const [philosophy, setPhilosophy] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [reference, setReference] = useState([]);
  const [project, setProject] = useState([]);
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [allReply, setAllReply] = useState([]);
  const [address, setAddress] = useState('');


useEffect(() => {
  const getCoverPageItems = async (portfolioadminid) => {
    try {
  const res = await axios.post(`http://localhost:8000/api/home`,
  {
  portfolioadminid
},
  {headers: {
      
    'Access-Control-Allow-Origin': 'http://localhost:3000/'
 }}
 )
 
    setCoverPage([res.data.user])
    setAddress(res.data.user.address)
   
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
  const getBiodata = async (portfolioadminid) => {
    //------------------
    try {
      const res = await axios.post(`http://localhost:8000/api/biodataportfolio/`,
      {
        portfolioadminid
      },
      {headers: {
      
        'Access-Control-Allow-Origin': 'http://localhost:3000/'
     }}
      ) 
    setBiodata([res.data.Biodata])
    
    
  } catch (error) {
    if (error.data) {   
    }
  }
  //---------------------
  }


  const getGoal = async (portfolioadminid) => {
    try {
    const res =    await axios.post(`http://localhost:8000/api/homegoal/`,
    {
      portfolioadminid
    },
    {headers: {
    
      'Access-Control-Allow-Origin': 'http://localhost:3000/'
   }}
    )
    setGoal([res.data.Goal])
   
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
  const getEducationQualification = async (portfolioadminid) => {
    try {
          await axios.post(`http://localhost:8000/api/homeeduquali/`,
          {
            portfolioadminid
          },
          {headers: {
          
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }}    
          
          
).then(res => setQualification([res.data.Eduquali]))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  const getHobby = async (portfolioadminid) => {
    try {
     const res =   await axios.post(`http://localhost:8000/api/homehobby/`,
          {
            portfolioadminid
          },
          {headers: {
          
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }}   

)
//.then(res => setHobby(res.data.Hobby))
setHobby([res.data.Hobby])

    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  const getMotto = async (portfolioadminid) => {
    try {
          await axios.post(`http://localhost:8000/api/homemotto/`,
          
          {
            portfolioadminid
          },
          {headers: {
          
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }}  
          
          )
    //.then(res => console.log(res.data))    
    .then(res => setMotto([res.data.Motto]))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  const getPhilosophy = async (portfolioadminid) => {
    try {
          await axios.post(`http://localhost:8000/api/homephilosophy/`,
          {
            portfolioadminid
          },
          {headers: {
          
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }}    
          
          
          )
    //.then(res => console.log(res.data))    
    .then(res => setPhilosophy([res.data.Philosophy]))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }


  const getWorkEperience = async (portfolioadminid) => {
    try {
      const res =  await axios.post(`http://localhost:8000/api/homeworkexperience/`,
          {
            portfolioadminid
          },
          {headers: {
          
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }}  
          )
    //.then(res => console.log(res.data))    
    //.then(res => setWorkExperience([res.data.wkp]))
    setWorkExperience([res.data.wpx])
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  const getReference = async (portfolioadminid) => {
    try {
          await axios.post(`http://localhost:8000/api/homereference/`,
          {
            portfolioadminid
          },
          {headers: {
          
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }}  
           
          )
    //.then(res => console.log(res.data))    
    .then(res => setReference([res.data.Refer]))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  const getProject = async (portfolioadminid) => {
    try {
        const res =  await axios.post(`http://localhost:8000/api/homeproject/`,
          {
            portfolioadminid
          },
          {headers: {
          
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }}   
          
          )
       
    ///.then(res => setProject([res.data.Project]))
    setProject([res.data.Project])
   
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  const getPosts = async (portfolioadminid) => {
    try {
          await axios.post(`http://localhost:8000/api/homepost/`,
          
          {
            portfolioadminid
          },
          {headers: {
          
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }}   
          )
    //.then(res => console.log(res.data))    
    .then(res => setPost([res.data.Posts]))
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }


  getPosts(portfolioadminid)
  getProject(portfolioadminid)
  getReference(portfolioadminid);
  getWorkEperience(portfolioadminid);
  getPhilosophy(portfolioadminid);
  getMotto(portfolioadminid);
  getHobby(portfolioadminid);
  getEducationQualification(portfolioadminid);
  getGoal(portfolioadminid);
  getBiodata(portfolioadminid);
  getCoverPageItems(portfolioadminid);
}, [portfolioadminid]);


//useEffect(()=>{

  const getPostById = async (postid) => {
    try {
        const res =   await axios.post(`http://localhost:8000/api/homepost/`,
        
        {
          postid
        },
        {headers: {
        
          'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }}  
        
        )
        setAuthor(res.data.author)
        setLink_post(res.data.link_post)
        setImage(res.data.image)
        setVideo(res.data.video)
        setPostbody(res.data.post)
        setDateT(res.data.createdAt)
        setPostid(res.data.postid)
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  // getPostById()

//},[postid])

//useEffect(()=>{

  const getCommentById = async (commentid) => {
    try {
        const res =   await axios.post(`http://localhost:8000/api/homecomment/`,
        {
          commentid
        },
        {headers: {
        
          'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }}  
        
        )
        setName(res.data.name)
        setComment(res.data.comment)
        setCommentid(res.data.commentid)
      console.log(res.data.commentid);
      
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  // getCommentById()

//},[commentid])


// useEffect(()=>{

  const getComments = async (postid) => {
    try {
        const res =   await axios.post(`http://localhost:8000/api/homecomment/`,
        {
          postid
        },
        {headers: {
        
          'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }}   
        
        
        )
        setComments(res.data)
       
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

//   getComments()

// },[comments,postid])

useEffect(()=>{

  const getReply = async () => {
    try {
        const res =   await axios.post(`http://localhost:8000/api/homereply/`,
        {
          commentid
        },
        {headers: {
        
          'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }}  
        
        )
        setAllReply(res.data)
       
  
    
  } catch (error) {
    if (error.data) {   
    }
  }
  
  }

  getReply()

},[allReply,commentid])


const deleteGoal = async (goalid) => {
  await axios.post(`http://localhost:8000/api/deletegoal/`,
  {
    goalid
  },
  {headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000/'
}}   
  
  );

  const getGoal = async (portfolioadminid) => {
    try {
          await axios.get(`http://localhost:8000/api/homegoal/`,
          {
            portfolioadminid
          },
          {headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }}  
          
          )   
    .then(res => setGoal(res.data.Goal))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getGoal(portfolioadminid)
}

const deleteBiodata = async (biodataid) => {
  await axios.delete(`http://localhost:5000/biodata/${biodataid}`);

  const getBiodata = async () => {
    try {
          await axios.get(`http://localhost:5000/biodata/${portfolioadminid}`)   
    .then(res => setBiodata(res.data))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getBiodata()
}


const deleteHobby = async (hobbyid) => {
  await axios.delete(`http://localhost:5000/hobby/${hobbyid}`);

  const getHobby = async () => {
    try {
          await axios.get(`http://localhost:5000/hobby/${portfolioadminid}`)   
    .then(res => setHobby(res.data.body))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getHobby()
}

const deleteMotto = async (mottoid) => {
  await axios.delete(`http://localhost:5000/motto/${mottoid}`);

  const getMotto = async () => {
    try {
          await axios.get(`http://localhost:5000/motto/${portfolioadminid}`)   
    .then(res => setMotto(res.data.body))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getMotto()
}

const deleteEduQuali = async (eduqualid) => {
  await axios.delete(`http://localhost:5000/eduquali/${eduqualid}`);

  const getEducation = async () => {
    try {
          await axios.get(`http://localhost:5000/eduquali/${portfolioadminid}`)   
    .then(res => setQualification(res.data))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getEducation()
}

const deletePhilosophy = async (philosophyid) => {
  await axios.delete(`http://localhost:5000/philosophy/${philosophyid}`);

  const getPhilosophy = async () => {
    try {
          await axios.get(`http://localhost:5000/philosophy/${portfolioadminid}`)   
    .then(res => setPhilosophy(res.data))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getPhilosophy()
}

const deleteWorkexperience = async (workexperienceid) => {
  await axios.delete(`http://localhost:5000/workexperience/${workexperienceid}`);

  const getWorkEperience = async () => {
    try {
          await axios.get(`http://localhost:5000/workexperience/${portfolioadminid}`)   
    .then(res => setWorkExperience(res.data))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getWorkEperience()
}

const deleteReference = async (referenceid) => {
  await axios.delete(`http://localhost:5000/reference/${referenceid}`);

  const getReference = async () => {
    try {
          await axios.get(`http://localhost:5000/reference/${portfolioadminid}`)   
    .then(res => setReference(res.data))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getReference()
}

const deleteProject = async (projectid) => {
  await axios.delete(`http://localhost:5000/project/${projectid}`);

  const getProject = async () => {
    try {
          await axios.get(`http://localhost:5000/project/${portfolioadminid}`)   
    .then(res => setReference(res.data))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getProject()
}

const deletePost = async (postid) => {
  await axios.delete(`http://localhost:5000/post/${postid}`);

  const getPost = async () => {
    try {
          await axios.get(`http://localhost:5000/post/${portfolioadminid}`)   
    .then(res => setPost(res.data))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getPost()
}





useEffect(() => {


  const edit = localStorage.getItem('token');
  setToken(edit);
}, []);
  
const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
)

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const [burgerStatus,setBurgerStatus] = useState(false);
  const [smallburgerStatus,setSmallBurgerStatus] = useState(false);
  const [burgerStat,setBurgerStat] = useState(false);
  const [burgerStat2,setBurgerStat2] = useState(false);
  const [burgerStat3,setBurgerStat3] = useState(false);
  const [smallburgerStat,setSmallBurgerStat] = useState(false);
  const [smallburgerStatLeft1,setSmallBurgerStatLeft1] = useState(false);
  const [smallburgerStat2,setSmallBurgerStat2] = useState(false);
  const [smallburgerStatLeft2,setSmallBurgerStatLeft2] = useState(false);
  const [smallburgerStat3,setSmallBurgerStat3] = useState(false);
  const [smallburgerStatLeft3,setSmallBurgerStatLeft3] = useState(false);


  const submitMessage = async (e) => {
    // prevent the form from refreshing the whole page
    
    e.preventDefault();
    // set configurations
    try{
      await axios.post('http://localhost:8000/api/send',
      {
        fullname,
        email,
        message,
      },
      {headers: {
      
        'Access-Control-Allow-Origin': 'http://localhost:3000/'
     }},
      
        
    ).then((result) => {
      
      setFullname('')
      setEmail('')
      setMessage('')
      setSent(true);
    })
    
    }catch (error)  {
      if (error.response) {
        console.log(error.response.data);
    }
    }
  }

  const submitMessageSmall = async (e) => {
      // prevent the form from refreshing the whole page
      e.preventDefault();

      try{
        await axios.post('http://localhost:8000/api/send',
        {
          fullname,
          email,
          message,
        },
        {headers: {
        
          'Access-Control-Allow-Origin': 'http://localhost:3000/'
       }},
        
          
      ).then((result) => {
        
        setFullname('')
        setEmail('')
        setMessage('')
      
      })
      
      }catch (error)  {
        if (error.response) {
          console.log(error.response.data);
      }
      }
     
  }


  const handleComment =  async (postid) => {
    // prevent the form from refreshing the whole page

    //----------------------------
try {
  await axios.post(`http://localhost:8000/api/addcomment`,
{

  name,
  email,
  comment,
  postid
},
{headers: {
    
  'Access-Control-Allow-Origin': 'http://localhost:3000/'
}}
)
.then((result) => {
  setName('')
  setEmail('')
  setComment('')
  setComments(result.data.msg)
})

 
  
} catch (error) {
  if (error.data) {   
  }
}

    //-------------
   
  }

  const handleReply =  async (postid, commentid) => {
    
    // prevent the form from refreshing the whole page

        //----------------------------
try {
  await axios.post(`http://localhost:8000/api/addreply`,
{

  name,
        email,
        commentid,
        postid,
        reply
},
{headers: {
    
  'Access-Control-Allow-Origin': 'http://localhost:3000/'
}}
)
.then((result) => {
  setName('')
      setEmail('')
      setReply('')
})

 
  
} catch (error) {
  if (error.data) {   
  }
}

    //-------------
   
  
  }
  


  // const handleOpen =  async (postid) => {

  //   try {
  //     const res =   await axios.get(`http://localhost:5000/comment/${postid}`)
  //     setComments(res.data)
  //     //console.log(res.data);
  //   } catch (error) {
      
  //   }

  // }


  return (

    <Container>
  
      {matches && (
        
        <>
        
      <TopHeader show = {burgerStatus}>
    
      
    <div className="heading__parent">
      <h1 className="heading-primary">
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
  
  
     
        <Link to="/authadmin" className="loginbtn">Login</Link>
        <Link to="/register" className="registerbtn">Register</Link>
      </TopHeader>
      
      <LeftSide show = {burgerStatus}>
      <WrapArrow>
         <DownArrow  src="/image/down-arrow.svg"/> 
       
        </WrapArrow>
        <Wrapper  onClick={()=>setBurgerStatus(true)}  >
       
        { coverPage.map((User, index) => (
          <React.Fragment  key={User.portfolioadminid}>
          <img src={`http://localhost:8000/storage/product/image/${User.image}`}  alt={`${User.firstname}`}/>
        
         </React.Fragment>
      ))}

        </Wrapper>
      
      </LeftSide>
      
      <RightSide show = {burgerStatus}>
      <div className="msg__heading">
      <span className="msg">Leave A Message</span>
    </div>
    <div className="slide">
      <form  method="POST" id="contact" encType="multipart/form-data">

        <div className="form__control">
          <div className="err__parent">
            <span className="name__err"></span>
          </div>
          <div className="name__parent">
            <input
             type="text"
              name="name" 
              className="name"
               id="name__label"
                required placeholder="Your Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)} />
            <label htmlFor="name__label" className="form__label">Your Name</label>
          </div>
        </div>

        <div className="form__control">
          <div className="err__parent">
            <span className="email__err"></span>
          </div>
          <div className="email__parent">
            <input
             type="email"
              className="email"
               name="email"
                id="email__label"
                 placeholder="Your Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required />
            <label htmlFor="email__label" className="form__label">Your Email</label>
          </div>
        </div>

        <div className="form__control">
          <div className="err__parent">
            <span className="message__err"></span>
          </div>
          <div className="message__parent">
            <textarea
             name="message"
              form="contact" 
              id="message__label"
               required placeholder="Write Your Message Here"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               ></textarea>
            <label htmlFor="message__label" className="form__label">Your Message Here</label>
          </div>
        </div>
        <div className="confirm"></div>
        {/* <div className="sub_parent"> */}
        <Button
         id="submit"
        type="submit"
        onClick={(e) => submitMessage(e)}
        >Submit</Button>
          {/* <input type="button" id="submit" value="submit" name="go" /> */}
        {/* </div> */}
        {sent ? (
          <p className="text-success">Your Message Was sent Successfully</p>
        ) : (
          <p className="text-danger"></p>
        )}
      </form>
    </div>
  
      </RightSide>
      <Footer show = {burgerStatus}>
      <div className="site_policy_social-parent">
      <div className="fb_connect">
      <Icon icon="facebook" size={20} color="white" />
      </div>
      <div className="twitter_connect">
      <Icon icon="twitter" size={20} color="white" />
        <svg className='social_icon'>
        <img src = './image/SVG/twitter.svg' alt='twitter'/>
        </svg>
      </div>
      <div className ="whatsapp_connect">
        <a href="https://wa.me/message/Q5U5MFFUW6NVO1">
        <Icon icon="whatsapp" size={20} color="white" />
        </a>
      </div>
    </div>
        </Footer>
        
        
        <InnerContainerLeft1 show = {burgerStat}  >
        <div className="inner__left">
       
      <div className="headingInner__parent">
     
      <IconWrapBack  onClick={()=>setBurgerStatus(false)} >
        <Icon icon="cheveron-left" size={50} color="navy" />
        </IconWrapBack>
        
      </div>

      <div className="name_parent">
        <h3 className="name_text">
        { coverPage.map((User, index) => (
          <React.Fragment  key={User.portfolioadminid}>
        {User.position}
         </React.Fragment>
        ))}
        </h3>
      </div>
      <div className='USERCONTACT'>
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
      <p>
         
          {address === null ? (
            <>
          <span>
          <Link 
          to={`/authadmin/adminupdate/${portfolioadminid}`} 
          className="btn_edit">Update Your Account</Link>
          </span>
          </>
          ):( null)
        
        }
          
        </p>
        </div>
        {!goal ? (null):(

        
        <div className='MainGoal'>
      <h2>
        <p className="sub_header"><span>Goal:</span></p>
      </h2>
      <p>
      { goal.map((Goal, index) => (
          <React.Fragment  key={Goal.goalid}>
       
          <span>{Goal.mygoal}</span>
          {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/goal/${Goal.goalid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteGoal(Goal.goalid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          
       
        </React.Fragment>
        ))}
      </p>
      </div>
      )}

      {!biodata? (null):(

      
      <div className='BIO__DATA'>
      <h2>
        <p className="sub_header"><span>BIO-DATA:</span></p>
      </h2>
      <p className="bio__flex">
        { biodata.map((bio, index) => (
            <React.Fragment  key={bio.biodataid}>
          {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/biodata/${bio.biodataid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteBiodata(bio.biodataid) } className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </React.Fragment>
          ))}
          </p>

      <p className="bio__flex ">
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
)}
       
    </div>
    
        </InnerContainerLeft1>
        <InnerContainerRight1 show = {burgerStat} >
        <div className="inner__behave">
          {!qualification ?(null):(
          <div className='EDUCATIONAL__BACKGROUND'>
      <h3>
        <p className="sub_header-EB">Educational Background:</p>
      </h3>
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
        <span>
        {qualification.map((edu, index) => (
            <React.Fragment  key={edu.eduqualid}>
              {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/education/${edu.eduqualid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteEduQuali(edu.eduqualid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </React.Fragment>
          ))}

        </span>
      </p>
    </div>

    )}
    {!qualification ?(null):(
    <div className='USER__QUALIFICATION'>
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
  )}
  {!hobby ?(null):(
<div className='UER__HOBBIES'>
      <h2>
        <p className="sub_header">HOBBIES:</p>
      </h2>
      <p> 
      {hobby.map((hob, index) => (
            <React.Fragment  key={hob.hobbyid}>
         <span>{hob.body}</span> 
          
         {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/hobby/${hob.hobbyid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteHobby(hob.hobbyid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </React.Fragment>
          ))}
      </p>
</div>
  )}
  {!motto ?(null):(
<div className='USER__MOTTO'>
      <h2>
        <p className="sub_header"> MOTTO:</p>
      </h2>
      <p>
      {motto.map((mot, index) => (
            <React.Fragment  key={mot.mottoid}>
         <span>{mot.body}</span> 
         {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/motto/${mot.mottoid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteMotto(mot.mottoid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </React.Fragment>
          ))}
      </p>
      </div>
  )}
      <IconWrapForward onClick={()=>setBurgerStat(true)}>
          <Icon icon="cheveron-right" size={50} color="navy" />
          </IconWrapForward>
    </div>
     
        </InnerContainerRight1>

        <InnerContainerLeft2 show = {burgerStat2}  >
        <div className="inner__left2">
        <IconWrapBack  onClick={()=>setBurgerStat(false)} >
        <Icon icon="cheveron-left" size={50} color="navy" />
        </IconWrapBack>
        {!philosophy ?(null):(
        <div className='USE__Philosophy'>
      <h2>
        <p className="sub_header__PH">Philosophy: </p>
      </h2>
      <p>
      {philosophy.map((phi, index) => (
            <React.Fragment  key={phi.philosophyid}>
          <span>{phi.body}</span>
          {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/philosophy/${phi.philosophyid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deletePhilosophy(phi.philosophyid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </React.Fragment>
          ))}
        </p>
</div>
        )}
        {!workExperience ?(null):(
<div className='USER__WORK--EXPERIENCE'>
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

       <span>
       {workExperience.map((work, index) => (
            <React.Fragment  key={work.workexperienceid}>
              {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/workexperience/${work.workexperienceid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteWorkexperience(work.workexperienceid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </React.Fragment>
          ))}

        </span>
         </p>
      </div>
        )}
        {!reference ?(null):(
      <div className='USER__REFEREES'>
      <h2>
        <p className="sub_header">REFEREES:</p>
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
      
      <p>
      <span> Tele: </span>
      <span>
       {reference.map((ref, index) => (
            <React.Fragment  key={ref.referenceid}>
          {ref.address}
          </React.Fragment>
          ))}
       </span>
       </p>
       <p>
       <span>
        {reference.map((ref, index) => (
            <React.Fragment  key={ref.referenceid}>
              {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/reference/${ref.referenceid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteReference(ref.referenceid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </React.Fragment>
          ))}

        </span>
       </p>
       </div>
        )}
    </div>

        </InnerContainerLeft2>
        <InnerContainerRight2 show = {burgerStat2} >
        <div className="inner__right2">
        {!project ?(null):(
          <div className='USER__PROJECTS'>
      <h2>
        <p className="sub_header__PH">Project: </p>
      </h2>
      {project.map((pro)=>(
        <React.Fragment key={pro.projectid}>
      <p>{pro.projectname}: <a href={`${pro.projecturl}`}>{pro.domainname}</a></p>
      <p>Developed With:</p>
      <p>{pro.languageused1}</p>
      <p>{pro.languageused2}</p>
      <p>{pro.languageused3}</p>
      <p>{pro.languageused4}</p>
      <p>{pro.languageused5}</p>
      <p className='project__gallery'>
        <span className='imagegallery'>
          {pro.projectimage1 !== " " ? (
            <img className='gallery' 
            
            src={`http://localhost:8000/storage/product/image/${pro.projectimage1}`}
            alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage2 !== " " ? (
            <img className='gallery' 
            src={`http://localhost:8000/storage/product/image/${pro.projectimage2}`}alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage3 !== " " ? (
            <img className='gallery'
             src={`http://localhost:8000/storage/product/image/${pro.projectimage3}`}alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage4 !== " " ? (
            <img className='gallery' 
            src={`http://localhost:8000/storage/product/image/${pro.projectimage4}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage5 !== " " ? (
            <img className='gallery'
            src={`http://localhost:8000/storage/product/image/${pro.projectimage5}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage6 !== " " ? (
            <img className='gallery'
            src={`http://localhost:8000/storage/product/image/${pro.projectimage6}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage7  !== " " ? (
            <img className='gallery' 
            src={`http://localhost:8000/storage/product/image/${pro.projectimage7}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage8  !== " " ? (
            <img className='gallery'
            src={`http://localhost:8000/storage/product/image/${pro.projectimage8}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage9 !== " " ? (
            <img className='gallery' 
            src={`http://localhost:8000/storage/product/image/${pro.projectimage9}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage10 !==  " " ? (
            <img className='gallery' 
            src={`http://localhost:8000/storage/product/image/${pro.projectimage10}`} alt='imagegallery'/>
          ):(null)}
        </span>
    
      </p>
      <p>
       <span>
        {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/project/${pro.projectid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteProject(pro.projectid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
         

        </span>
       </p>
        </React.Fragment>
      ))}
</div>
        )}
      <IconWrapForward onClick={()=>setBurgerStat2(true)} >
          <Icon icon="cheveron-right" size={50} color="navy" />
          </IconWrapForward>
    </div>
        </InnerContainerRight2>

        <InnerContainerLeft3 show = {burgerStat3}  >
        <div className="inner__left3">
        <IconWrapBack  onClick={()=>setBurgerStat2(false)}  >
        <Icon icon="cheveron-left" size={50} color="navy" />
        </IconWrapBack>
        <BlogWrap>

        <h1>
        <p className="blogpost">See The World as I  perceived it . . .</p>
        </h1>
        {!post ? "Loading . . .": post.map((item)=>(
          
          <div className='post-flex'>
            <div className='post-flex-wrp'>
          <React.Fragment key={item.postid}>
            <div>
             <h2>{item.heading}</h2> 
              </div>
            <div>{item.author}</div>
            <div>{item.createdAt}</div>
            <div className='featureimg'>
            <span className='featureimage'>
          {item.image !== " " ? (
            <img className='postgallery' 
           
            src={`http://localhost:8000/storage/product/image/${item.image}`}
            alt='postimage'/>
          ):(null)}
        </span>
            </div>
            
      
            <div className='feature__video'>
            <span className='featurevideo'>
          {item.video !== " " ? (
               <video  id="videoDisplay"   className="video_content"  width={400} height={200} controls>
   
               <source 
              
               src={`http://localhost:8000/storage/product/image/${item.video}`}
               type = "video/mp4"></source>
              </video>
          
          ):(null)}
        </span>
            </div>
            <div>{item.post}</div>
            <div className='edit_delete'>
       <span>
        {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/post/${item.postid}`} 
          className="btn-edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deletePost(item.postid) } 
          className="btn-del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
        </span>
            </div>
          
          </React.Fragment>

                      {/*Comment Start  */}
                      <React.Fragment>
  <div className='comment_box' >
       
       {!comments ? "Comments Loading . . ." :
       comments.map((com) =>(
         <React.Fragment>
         <div className="comment_body">
         
         <div>{com.name}</div>
         <div>{com.comment}</div>
         
        </div>
        
      
       </React.Fragment>
       ))}

     </div>
    
    <div className="comment">
  
      {/* ------------Comment form start--------------------- */}
      <div className="comment__heading">
      <span className="say">Leave A Comment</span>
    </div>
      <form  method="POST" id="contact" encType="multipart/form-data">

        <div className="form__control">
          <div className="err__parent">
            <span className="name__err"></span>
          </div>
          <div className="name__parent">
            <input
             type="text"
              name="name" 
              className="name"
               id="name__label"
                required placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <label htmlFor="name__label" className="form__label">Your Name</label>
          </div>
        </div>

        <div className="form__control">
          <div className="err__parent">
            <span className="email__err"></span>
          </div>
          <div className="email__parent">
            <input
             type="email"
              className="email"
               name="email"
                id="email__label"
                 placeholder="Your Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required />
            <label htmlFor="email__label" className="form__label">Your Email</label>
          </div>
        </div>

        <div className="form__control">
          <div className="err__parent">
            <span className="message__err"></span>
          </div>
          <div className="message__parent">
            <textarea
             name="message"
              form="contact" 
              id="message__label"
               required placeholder="Write Your Message Here"
               value={comment}
               onChange={(e) => setComment(e.target.value)}
               ></textarea>
            <label htmlFor="message__label" className="form__label">Your Message Here</label>
          </div>
        </div>
        <div className="confirm"></div>
       
        <button className ="submit" id={item.postid} type="submit" onClick={(e) => handleComment(item.postid)}>Submit</button>
        </form>
        {/* //------- comment form ends------//  */}
        </div>
        </React.Fragment>
          {/*Comment Ends  */}
         
           <button onClick={(e) =>{
              // handleOpen(item.postid)
              getComments(item.postid)
              }} className='open__drop' >
             Read More
           </button>
           
         </div>
          </div>
         
        )) }
        </BlogWrap>
    </div>
    
        </InnerContainerLeft3>
        {/* <InnerContainerRight3 show = {burgerStat3}  onClick={()=>setBurgerStat3(true)}  > */}
        <InnerContainerRight3 show = {burgerStat3}   >

      
      
        </InnerContainerRight3>
      
      
        </>
        
        )}
        
        {!matches && (
          <>
           <SmallTopHeader show = {smallburgerStatus}>
           <div className="heading__parent-small">
      <h1 className="heading-primary-small">
        <span className="heading-primary-main1-small">I</span>
        <span className="heading-primary-main2-small">AM</span>
       
        <div className="text-box-inner-small">
          <span className="heading-primary-main3-small">
          { coverPage.map((User, index) => (
            <>
          {User.firstname}
          </>
          ))}
          </span>
          <span className="heading-primary-main4-small">
          { coverPage.map((User, index) => (
            <>
          {User.lastname}
          </>
          ))}
          </span>
        </div>
      </h1>
     
    </div>
    <Link to="/authadmin" className="loginbtn-small">Login</Link>
       
      </SmallTopHeader>
      
      <SmallLeftSide show = {smallburgerStatus}>
        <SmallWrapper onClick={()=>setSmallBurgerStatus(true)} >
        <WrapArrowSmall>
        <DownArrow src="/image/down-arrow.svg"/>
        </WrapArrowSmall>
        { coverPage.map((User, index) => (
          <>
           <img src={`http://localhost:8000/storage/product/image/${User.image}`}  alt={`${User.firstname}`}/>
        
         </>
      ))}
        </SmallWrapper>
      </SmallLeftSide>
      
      <SmallRightSide show = {smallburgerStatus}>
      <div className="msg__heading">
      <span className="msg">Leave A Message</span>
    </div>
    <div className="slide">
      <form   method="POST" id="contact" encType="multipart/form-data">

        <div className="form__control">
          <div className="err__parent">
            <span className="name__err"></span>
          </div>
          <div className="name__parent">
            <input
             type="text" 
             name="name"
              className="name" 
              id="name__label"
               required 
               placeholder="Your Name"
               value={fullname}
                onChange={(e) => setFullname(e.target.value)} 
                 />
            <label htmlFor="name__label" className="form__label">Your Name</label>
          </div>
        </div>

        <div className="form__control">
          <div className="err__parent">
            <span className="email__err"></span>
          </div>
          <div className="email__parent">
            <input 
            type="email" 
            className="email"
             name="email" 
             id="email__label"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                required />
            <label htmlFor="email__label" className="form__label">Your Email</label>
          </div>
        </div>

        <div className="form__control">
          <div className="err__parent">
            <span className="message__err"></span>
          </div>
          <div className="message__parent">
            <textarea
             name="message" 
             form="contact" 
             id="message__label"
              required placeholder="Write Your Message Here" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            <label htmlFor="message__label" className="form__label">Your Message Here</label>
          </div>
        </div>
        <div className="confirm"></div>
        <div className="sub_parent">
          <button type="button"
           id="submit" value="submit"
            name="go"
            onClick={(e) => submitMessageSmall(e)}
             >Submit</button>
        </div>
        {sent ? (
          <p className="text-success">Your Message Was sent Successfully</p>
        ) : (
          <p className="text-danger"></p>
        )}
      </form>
    </div>
  
  
      </SmallRightSide>
      <SmallFooter show = {smallburgerStatus}>
      <div className="site_policy_social-parent">
      <div className="fb_connect">
      <Icon icon="facebook" size={20} color="white" />
      </div>
      <div className="twitter_connect">
      <Icon icon="twitter" size={20} color="white" />
        <svg className='social_icon'>
        <img src = './image/SVG/twitter.svg' alt='twitter'/>
        </svg>
      </div>
      <div className ="whatsapp_connect">
        <a href="https://wa.me/message/Q5U5MFFUW6NVO1">
        <Icon icon="whatsapp" size={20} color="white" />
        </a>
      </div>
    </div>
        </SmallFooter>
        
        <SmallInnerContainerLeft1 show = {smallburgerStatLeft1}  >
        <div className="inner__left">
        <IconWrapBackSmall onClick={()=>setSmallBurgerStatus(false)}>
        <Icon icon="cheveron-left" size={30} color="navy" />
        </IconWrapBackSmall>
      <div className="headingInner__parent">
        
      </div>
      <div className="name_parent">
        <h3 className="name_text">
        { coverPage.map((User, index) => (
          <>
        {User.position}
         </>
        ))}

        </h3>
      </div>
      <div className='USER__CONTACT-SMALL'>
      <p className="addres">
      { coverPage.map((User, index) => (
          <>
        {User.address}
         </>
        ))}
        </p>
      <p className="address__city">
      { coverPage.map((User, index) => (
          <>
        {User.city}
         </>
        ))}
         </p>
      <p className="contact__no"><span>Tel: </span>
      { coverPage.map((User, index) => (
          <>
        {User.phoneno}
         </>
        ))}
      </p>
      <p className="contact__no"><span>Email: </span>
      { coverPage.map((User, index) => (
          <>
        {User.email}
         </>
        ))}
      </p>
      <p>
         
          {address === null ? ( 
         
           <>
         <span>
         <Link 
         to={`/authadmin/adminupdate/${portfolioadminid}`} 
         className="btn_edit">Update Your Account</Link>
         </span>
         </>
         ):( null)
       
       }
         
       </p>
       </div>
       {!goal ?(null):(
       <div className='USER__Goal--SMALL'>
      <h2>
        <p className="sub_header"><span>Goal:</span></p>
      </h2>
      <p>
      { goal.map((Goal, index) => (
          <>
       
        <span>{Goal.mygoal}</span>
          <span>
            <Link 
            to={`/authadmin/goal/${Goal.goalid}`} 
            className="button is-small is-info" 
            >Edit</Link>
            </span>
            <span>
          <button onClick={ () => deleteGoal(Goal.goalid) } 
          className="btn_del">Delete</button>
          </span>
       
         </>
        ))}
      </p>
      </div>
       )}
       {!biodata ?(null):(
      <div className='USER__BIO-DATA--SMALL'>
      <h2>
        <p className="sub_header"><span>BIO-DATA:</span></p>
      </h2>
      <p className="bio__flex ">
        <span>SEX:</span>
        <span>
        { biodata.map((bio, index) => (
            <>
          {bio.sex}
          </>
          ))}
        </span>
        </p>
      <p className="bio__flex">
      <span>DATE OF BIRTH:</span>
      <span>
      { biodata.map((bio, index) => (
            <>
          {bio.dob}
          </>
          ))}
        </span></p>
      <p className="bio__flex">
        <span>STATE OF ORIGIN:</span>
      <span>
      { biodata.map((bio, index) => (
            <>
          {bio.soo}
          </>
          ))}
        </span></p>
      <p className="bio__flex">
        <span>MARITAL STATUS:</span> 
        <span>
        { biodata.map((bio, index) => (
            <>
          {bio.marital}
          </>
          ))}
          </span></p>
      <p className="bio__flex">
        <span>DISABILITY:</span> 
        <span>
        { biodata.map((bio, index) => (
            <>
          {bio.impairment}
          </>
          ))}
          </span></p>
      <p className="bio__flex">
        <span>RELIGION:</span> 
        <span>
        { biodata.map((bio, index) => (
            <>
          {bio.religion}
          </>
          ))}
          </span></p>
      <p className="bio__flex">
        <span>NATIONALITY:</span> 
        <span>
        { biodata.map((bio, index) => (
            <>
          {bio.nationality}
          </>
          ))}
          </span></p>

          <p className="bio__flex">
        { biodata.map((bio, index) => (
            <>
          {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/biodata/${bio.biodataid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteBiodata(bio.biodataid) }
           className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </>
          ))}
          </p>
          </div>
       )}
          <IconWrapForwardSmall onClick={()=>setSmallBurgerStatLeft1(true)}>
          <Icon icon="cheveron-right" size={30} color="navy" />
          </IconWrapForwardSmall>
    </div>
       
        </SmallInnerContainerLeft1>
        <SmallInnerContainerRight1 show = {smallburgerStat}  >
        <div className="inner__behave">
        <IconWrapBackSmall onClick={()=>setSmallBurgerStatLeft1(false)}>
        <Icon icon="cheveron-left" size={30} color="navy" />
        </IconWrapBackSmall>
        {!qualification ?(null):(
        <div className='USER___EDUCATIONAL__BACKGROUND--SMALL'>
      <h2>
        <p className="sub_header-EB">EDUCATIONAL BACKGROUND:</p>
      </h2>
      <p>
       <span>
       {qualification.map((edu, index) => (
            <>
          {edu.institution}
          </>
          ))}
       </span>
        <span>
        {qualification.map((edu, index) => (
            <>
          {edu.qualiobtained}
          </>
          ))}
        </span>
        <span>
        {qualification.map((edu, index) => (
            <>
          {edu.startdate}
          </>
          ))}
        </span>
        <span>
        {qualification.map((edu, index) => (
            <>
          {edu.enddate}
          </>
          ))}
        </span>
        <span>
        {qualification.map((edu, index) => (
            <>
          {edu.country}
          </>
          ))}
        </span>
        <span>
        {qualification.map((edu, index) => (
            <>
              {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/education/${edu.eduqualid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteEduQuali(edu.eduqualid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </>
          ))}

        </span>
        
      </p>
      </div>
        )}
        {!qualification ?(null):(
      <div className='USER__QUALIFICATION--SMALL'>
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
        )}
        {!hobby ?(null):(
<div className='USER__HOBBIES--SMALL'>
      <h2>
        <p className="sub_header">HOBBIES:</p>
      </h2>
      <p> 
      {hobby.map((hob, index) => (
            <>
         <span>{hob.body}</span> 
         {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/hobby/${hob.hobbyid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteHobby(hob.hobbyid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          
          </>
          ))}
      </p>
</div>
        )}
        {!motto ? (null):(
<div className='USER__MOTTO--SMALL'>
      <h2>
        <p className="sub_header"> MOTTO:</p>
      </h2>
      <p>
      {motto.map((mot, index) => (
            <>
         <span>{mot.body}</span> 
         {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/motto/${mot.mottoid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteMotto(mot.mottoid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </>
          ))}
      </p>
      </div>
        )}

      <IconWrapForwardSmall onClick={()=>setSmallBurgerStat(true)}>
          <Icon icon="cheveron-right" size={30} color="navy" />
          </IconWrapForwardSmall>
    </div>
       
        </SmallInnerContainerRight1>

        <SmallInnerContainerLeft2 show = {smallburgerStatLeft2}  >
        <div className="inner__left2">
        <IconWrapBackSmall onClick={()=>setSmallBurgerStat(false)}>
        <Icon icon="cheveron-left" size={30} color="navy" />
        </IconWrapBackSmall>
        {!philosophy ?(null):(
        <div className='USER__Philosophy--SMALL'>
      <h2>
        <p className="sub_header__PH">Philosophy: </p>
      </h2>
      <p>
      {philosophy.map((phi, index) => (
            <>
          <span>{phi.body}</span>
          {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/philosophy/${phi.philosophyid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deletePhilosophy(phi.philosophyid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </>
          ))}
        </p>
</div>
        )}
        {!workExperience ?(null):(
<div className='USER__WORKEXPERIENCE--SMALL'>
      <h2>
        <p className="sub_header">WORK EXPERIENCE :</p>
      </h2>
      <p>
       <span>
       {workExperience.map((work, index) => (
            <>
          {work.organisation}
          </>
          ))}
       </span>
       <span>
       {workExperience.map((work, index) => (
            <>
          {work.position}
          </>
          ))}
       </span>
       <span>
       {workExperience.map((work, index) => (
            <>
          {work.startdate}
          </>
          ))}
       </span>
       <span>
       {workExperience.map((work, index) => (
            <>
          {work.enddate}
          </>
          ))}
       </span>
       <span>
       {workExperience.map((work, index) => (
            <>
          {work.country}
          </>
          ))}
       </span>
       <span>
       {workExperience.map((work, index) => (
            <>
              {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/workexperience/${work.workexperienceid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteWorkexperience(work.workexperienceid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </>
          ))}

        </span>
         </p>
      </div>
        )}
        {!reference ?(null):(
      <div className='USER__REFEREES--SMALL'>
      <h2>
        <p className="sub_header">REFEREES:</p>
      </h2>
      <p>
      <span>
       {reference.map((ref, index) => (
            <>
          {ref.fullname}
          </>
          ))}
       </span>

      </p>
      <p>
      <span>
       {reference.map((ref, index) => (
            <>
          {ref.phoneno}
          </>
          ))}
       </span>
        </p>
      
      <p><span> Tele: </span>
      <span>
       {reference.map((ref, index) => (
            <React.Fragment key ={ref.referenceid}>
          {ref.address}
          </React.Fragment>
          ))}
       </span>
       </p>
       <p>
       <span>
        {reference.map((ref, index) => (
            <>
              {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/reference/${ref.referenceid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteReference(ref.referenceid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
          </>
          ))}

        </span>
       </p>
       </div>
        )}

       <IconWrapForwardSmall onClick={()=>setSmallBurgerStatLeft2(true)}>
          <Icon icon="cheveron-right" size={30} color="navy" />
          </IconWrapForwardSmall>
    </div>
      
        </SmallInnerContainerLeft2>
        <SmallInnerContainerRight2 show = {smallburgerStat2} >

        <div className="inner__right2">
        <IconWrapBackSmall onClick={()=>setSmallBurgerStatLeft2(false)}>
        <Icon icon="cheveron-left" size={30} color="navy" />
        </IconWrapBackSmall>
        {!project ?(null):(
        <div className='USER__PROJECT--SMALL'>
      <h2>
        <p className="sub_header__PH">PROJECTS: </p>
      </h2>
      {project.map((pro)=>(
        <React.Fragment key={pro.projectid}>
      <p>{pro.projectname}: <a href={`${pro.projecturl}`}>{pro.domainname}</a></p>
      <p>Developed With:</p>
      <p>{pro.languageused1}</p>
      <p>{pro.languageused2}</p>
      <p>{pro.languageused3}</p>
      <p>{pro.languageused4}</p>
      <p>{pro.languageused5}</p>
      <p className='project__gallery'>
        <span className='imagegallery'>
          {pro.projectimage1 !== " " ? (
            <img className='gallery' 
            
            src={`http://localhost:8000/storage/product/image/${pro.projectimage1}`}
            alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage2 !== " " ? (
            <img className='gallery' 
            src={`http://localhost:8000/storage/product/image/${pro.projectimage2}`}alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage3 !== " " ? (
            <img className='gallery'
             src={`http://localhost:8000/storage/product/image/${pro.projectimage3}`}alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage4 !== " " ? (
            <img className='gallery' 
            src={`http://localhost:8000/storage/product/image/${pro.projectimage4}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage5 !== " " ? (
            <img className='gallery'
            src={`http://localhost:8000/storage/product/image/${pro.projectimage5}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage6 !== " " ? (
            <img className='gallery'
            src={`http://localhost:8000/storage/product/image/${pro.projectimage6}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage7  !== " " ? (
            <img className='gallery' 
            src={`http://localhost:8000/storage/product/image/${pro.projectimage7}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage8  !== " " ? (
            <img className='gallery'
            src={`http://localhost:8000/storage/product/image/${pro.projectimage8}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage9 !== " " ? (
            <img className='gallery' 
            src={`http://localhost:8000/storage/product/image/${pro.projectimage9}`} alt='imagegallery'/>
          ):(null)}
        </span>
        <span className='imagegallery'>
          {pro.projectimage10 !==  " " ? (
            <img className='gallery' 
            src={`http://localhost:8000/storage/product/image/${pro.projectimage10}`} alt='imagegallery'/>
          ):(null)}
        </span>
    
      </p>
      <p>
       <span>
        {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/project/${pro.projectid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deleteProject(pro.projectid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
         

        </span>
       </p>
        </React.Fragment>
      ))}
</div>
        )}
      
      <IconWrapForwardSmall onClick={()=>setSmallBurgerStat2(true)} >
          <Icon icon="cheveron-right" size={30} color="navy" />
          </IconWrapForwardSmall>
    </div>
      
        </SmallInnerContainerRight2>

        <SmallInnerContainerLeft3 show = {smallburgerStatLeft3}  >
        <div className="inner__left3">
        <IconWrapBackSmall onClick={()=>setSmallBurgerStat2(false)} >
        <Icon icon="cheveron-left" size={30} color="navy" />
        </IconWrapBackSmall>
        <BlogWrapSmall>
        <h1>
        <p className="blogpost">Blog coming soon . . .</p>
        </h1>
        
        {!post ? "Loading . . .": post.map((item)=>(
          <div className='post-flex'>
          <React.Fragment key={item.postid}>
            <div>
             <h2>{item.heading}</h2> 
            </div>
            <div>{item.author}</div>
            <div>{item.createdAt}</div>
            <div className='featureimg'>
            <span className='featureimage'>
          {item.image !== " " ? (
            <img className='postgallery' 
            src={`http://localhost:8000/storage/product/image/${item.image}`}
             alt='postimage'/>
          ):(null)}
        </span>
            </div>
            <div>
            <span className='featurevideo'>
          {item.video !== " " ? (
               <video  id="videoDisplay"  className="video_content"  width={200} height={200} controls>
   
               <source
                src={`http://localhost:8000/storage/product/image/${item.video}`}
                 type = "video/mp4"></source>
              </video>
          
          ):(null)}
        </span>
            </div>

            <div>{item.post}</div>

            <div>
       <span>
        {token?(
            <>
          <span>
          <Link 
          to={`/authadmin/post/${item.postid}`} 
          className="btn_edit">Edit</Link>
          </span>
          <span>
          <button onClick={ () => deletePost(item.postid) } 
          className="btn_del">Delete</button>
          </span>
          </>

          ):( null)
        
        }
        </span>
            </div>
          
          </React.Fragment>
         {/*  */}
         <React.Fragment>
    
    <div className="comment">
      <div className='comment_box' >
        {!comments ? "Comments Loading . . ." :
        comments.map((com) =>(
          <div>
          <React.Fragment>
          <div>{com.name}</div>
          <div>{com.comment}</div>
          </React.Fragment>
         
        </div>
        ))}

      </div>
    <div className="comment__heading">
      <span className="say">Leave A Message</span>
    </div>
      <form  method="POST" id="contact" encType="multipart/form-data">

        <div className="form__control">
          <div className="err__parent">
            <span className="name__err"></span>
          </div>
          <div className="name__parent">
            <input
             type="text"
              name="name" 
              className="name"
               id="name__label"
                required placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <label htmlFor="name__label" className="form__label">Your Name</label>
          </div>
        </div>

        <div className="form__control">
          <div className="err__parent">
            <span className="email__err"></span>
          </div>
          <div className="email__parent">
            <input
             type="email"
              className="email"
               name="email"
                id="email__label"
                 placeholder="Your Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required />
            <label htmlFor="email__label" className="form__label">Your Email</label>
          </div>
        </div>

        <div className="form__control">
          <div className="err__parent">
            <span className="message__err"></span>
          </div>
          <div className="message__parent">
            <textarea
             name="message"
              form="contact" 
              id="message__label"
               required placeholder="Write Your Message Here"
               value={comment}
               onChange={(e) => setComment(e.target.value)}
               ></textarea>
            <label htmlFor="message__label" className="form__label">Your Message Here</label>
          </div>
        </div>
        <div className="confirm"></div>
        {/* <div className="sub_parent"> */}
        <button className ="submit" id={item.postid} type="submit" onClick={(e) => handleComment(item.postid)}>Submit</button>
        </form>
        </div>
        </React.Fragment>
          {/*  */}
         
         </div>
        )) }
        
        </BlogWrapSmall>
     
      <IconWrapForwardSmall onClick={()=>setSmallBurgerStatLeft3(true)}>
          <Icon icon="cheveron-right" size={30} color="navy" />
          </IconWrapForwardSmall>
    </div>
      
        </SmallInnerContainerLeft3>
        <SmallInnerContainerRight3 show = {smallburgerStat3}  >
        <IconWrapBackSmall onClick={()=>setSmallBurgerStatLeft3(false)}>
        <Icon icon="cheveron-left" size={30} color="navy" />
        </IconWrapBackSmall>

        <IconWrapForwardSmall onClick={()=>setSmallBurgerStat3(true)}>
          <Icon icon="cheveron-right" size={30} color="navy" />
          </IconWrapForwardSmall>
        </SmallInnerContainerRight3>
      
        </>
      )}
       <IconWrapBackSmallLast onClick={()=>setSmallBurgerStat3(false)}>
        <Icon icon="cheveron-left" size={30} color="navy" />
        </IconWrapBackSmallLast>
    </Container>
  )
}

export default Home

const Container = styled.div`
width:100%;
height:100%;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
overflow-x:hidden;
overflow-y:hidden;
background:grey;

`

const TopHeader = styled.div`
position: absolute;
top: 0;
left: 2.5%;
right:2.5%;
width: 90%;
height: 10%;
box-shadow: 0 10px 50px #000;
margin: 0 auto;
transition: all 2s linear;
z-index: 200;
background:gray;
transform: ${props => props.show ? 'translateY(-130%)': 'translateY(0)'};

`


const LeftSide = styled.div`
position: absolute;
top: 9.5%;
left: 5%;
width: 44.9%;
height: 85%;
background-image: linear-gradient(
  to right top,
  rgb(76, 0, 130),
  rgb(100, 0, 0)
);
display: flex;
align-items: center;
justify-content: flex-end;
transition: all 2s linear;
z-index: 200;
transform: ${props => props.show ? 'translateX(-120%)': 'translateX(0)'};
animation: changeBGColorLeft 29s infinite linear;
`


const RightSide = styled.div`
position: absolute;
top: 9.5%;
right: 5%;
width: 45.08%;
height: 85%;
background-image: linear-gradient(
  to left top,
  rgb(76, 0, 130),
  rgb(100, 0, 0)
);
transition: all 2s linear;
z-index: 200;
transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};
animation: changeBGColorRight 30s infinite ease-out;
`


const Footer = styled.div`
position: absolute;
bottom: 0;
left: 5%;
width: 90%;
height: 10%;
box-shadow: 0 10px 50px #000;
background: gray;
transition: all 2s linear;
z-index: 200;
//animation: changeBGColorRight 30s infinite linear;
transform: ${props => props.show ? 'translateY(100%)': 'translateY(0)'};
`

const Wrapper = styled.div`
width:20%;
height:20%;
cursor: pointer;
img{
  width:100%;
  height:100%;
  border-radius:100%;
  cursor: pointer;
}
`

const InnerContainerLeft1 = styled.div`
width: 50%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 190;
background: #000;
transition: all 3s linear;

transform: ${props => props.show ? 'translateX(-120%)': 'translateX(0)'};
`

const InnerContainerRight1 = styled.div`
width: 51%;
height: 100%;
position: absolute;
top: 0;
right: 0;
z-index: 190;
background: #000;
transition: all 3s linear;

transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};
`
const InnerContainerLeft2 = styled.div`
width: 50%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 180;
background: indigo;
transition: all 3s linear;

transform: ${props => props.show ? 'translateX(-120%)': 'translateX(0)'};
`

const InnerContainerRight2 = styled.div`
width: 51%;
height: 100%;
position: absolute;
top: 0;
right: 0;
z-index: 180;
background: indigo;
transition: all 3s linear;

transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};
`
const InnerContainerLeft3 = styled.div`
width: 80%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 170;
background: indigo;
transition: all 3s linear;

transform: ${props => props.show ? 'translateX(-120%)': 'translateX(0)'};
`


const  BlogWrap = styled.div` 
width: 95%;
height: 99%;
overflow-x:hidden;
overflow-y:scroll;
background:navy;
`



const InnerContainerRight3 = styled.div`
width: 24%;
height: 100%;
position: absolute;
top: 0;
right: 0;
z-index: 170;
background: indigo;
transition: all 3s linear;

transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};
`

const SmallTopHeader = styled.div`
position: absolute;
top: 0;
left: 2.5%;
right:2.5%;
width: 90%;
height: 10%;
box-shadow: 0 10px 50px #000;
margin: 0 auto;
transition: all 2s linear;
z-index: 200;
background:gray;
transform: ${props => props.show ? 'translateY(-130%)': 'translateY(0)'};

`


const SmallLeftSide = styled.div`
position: absolute;
top: 9.5%;
left: 5%;
width: 45%;
height: 85%;
background-image: linear-gradient(
  to right top,
  rgb(76, 0, 130),
  rgb(100, 0, 0)
);
display: flex;
align-items: center;
justify-content: flex-end;
transition: all 2s linear;
z-index: 200;
transform: ${props => props.show ? 'translateX(-120%)': 'translateX(0)'};
animation: changeBGColorLeft 30s infinite ease-out;
`


const SmallRightSide = styled.div`
position: absolute;
top: 9.5%;
right: 5%;
width: 45.08%;
height: 85%;
background-image: linear-gradient(
  to left top,
  rgb(76, 0, 130),
  rgb(100, 0, 0)
);
transition: all 2s linear;
z-index: 200;
transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};
animation: changeBGColorRight 30s infinite ease-out;
`


const SmallFooter = styled.div`
position: absolute;
bottom: 0;
left: 5%;
width: 90%;
height: 10%;
box-shadow: 0 10px 50px #000;
background: grey;
transition: all 2s linear;
z-index: 200;
transform: ${props => props.show ? 'translateY(100%)': 'translateY(0)'};
`

const SmallWrapper = styled.div`
width:40%;
height:10%;
cursor: pointer;
img{
  width:100%;
  height:100%;
  border-radius:100%;
}
`


const SmallInnerContainerLeft1 = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 194;
transition: all 3s linear;

background: grey;
transform: ${props => props.show ? 'translateX(-120%)': 'translateX(0)'};
`

const SmallInnerContainerRight1 = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 192;
transition: all 3s linear;
cursor: pointer;
background: grey;
transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};
`
const SmallInnerContainerLeft2 = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 184;
transition: all 3s linear;
cursor: pointer;
background: grey;
transform: ${props => props.show ? 'translateX(-120%)': 'translateX(0)'};
`

const SmallInnerContainerRight2 = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 182;
transition: all 3s linear;
cursor: pointer;
background: grey;
transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};
`
const SmallInnerContainerLeft3 = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 174;
transition: all 3s linear;
cursor: pointer;
background: grey;
transform: ${props => props.show ? 'translateX(-120%)': 'translateX(0)'};
`


const  BlogWrapSmall = styled.div` 
width: 100%;
height: 99%;
overflow-x:hidden;
overflow-y:scroll;
background:navy;

`

const SmallInnerContainerRight3 = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 172;
transition: all 3s linear;
cursor: pointer;
background: grey;
transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};
`

const DownArrow = styled.img`
margin-top:20px;
height:40px;
overflow-x:hidden;
animation:animateDown  infinite 1.5s;

`
const WrapArrow = styled.div`
width: 30%;
height: 30%;
position: absolute;
top:31%;
right:-17%;

`

const WrapArrowSmall = styled.div`
width: 15%;
height: 15%;
position: absolute;
top:30%;
right:12%;
`

const IconWrapBackSmall = styled.div`
width: 15%;
height: 15%;
position: absolute;
top:0%;
left:4%;
cursor:pointer;
`
const IconWrapForwardSmall = styled.div`
width: 15%;
height: 15%;
position: absolute;
bottom:-7%;
right:2%;
cursor:pointer;
`

const IconWrapBack = styled.div`
width: 15%;
height: 15%;
position: absolute;
top:0%;
left:12%;
cursor:pointer;
`
const IconWrapBackSmallLast = styled.div`
width: 15%;
height: 15%;
position: absolute;
top:0%;
left:12%;
cursor:pointer;
@media screen (min-width:820px){
  display:none;
}
`
const IconWrapForward = styled.div`
width: 15%;
height: 15%;
position: absolute;
bottom: 7%;
right:8%;
cursor:pointer;
`

