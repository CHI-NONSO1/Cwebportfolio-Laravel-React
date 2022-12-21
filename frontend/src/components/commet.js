            {/*Comment Start  */}
            <React.Fragment>
    
            <div className="comment">
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