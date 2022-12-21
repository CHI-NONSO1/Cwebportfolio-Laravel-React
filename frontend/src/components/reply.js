 {/* ------------Reply Start-------------------- */}
 <React.Fragment>
            
 <div className="reply">
   <div className='reply_box' >
     {!allReply ? "Reply Loading . . ." :
     allReply.map((com) =>(
      <React.Fragment>
       <div className="reply_body">
       
       <div>{com.name}</div>
       <div>{com.reply}</div>
       
      
     </div>

     // reply form start
     <div className="reply__heading">
   <span className="say">Leave A Reply</span>
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
            required placeholder=" Your Reply Here"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            ></textarea>
         <label htmlFor="message__label" className="form__label">Your Reply Here</label>
       </div>
     </div>
     <div className="confirm"></div>
     
     <button
      className ="submit" 
      id={item.commentid} 
      type="submit" 
     onClick={(e) =>{ 
       handleReply(item.postid)
       getPostById(item.postid)
       getCommentById(item.postid)
       }}>Reply</button>
     </form>
    //  reply form ends
    </React.Fragment>
     ))}

   </div>
 
     </div>
     </React.Fragment>
      {/* --------------Reply End--------------------- */}