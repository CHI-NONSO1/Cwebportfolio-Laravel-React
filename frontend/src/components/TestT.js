import { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./Register/register.css"
 
const TestR = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [email, setEmail] = useState('');
    
    const history = useNavigate();
 
    const saveTest = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/admins',{
            email: email,
            password: password
        });
        history("/login");
    }

    return (

        <div className="wrapper_flex">
        <div className="h2parent">
            <h2 className="login_header">Sign Up</h2>
        </div>
        <div className="paraparent">
            <p className="para_details"></p>
        </div>
        <form method="post">
            <div className="form-group-parent2">
                <div className="form-group"></div>
                
                <div className="input1_parent">
                <input
                type="text" 
                id='firstname'
                placeholder='First Name'
                name="firstname"
                className="form-control" 
                value={ firstname }
                onChange={ (e) => setFirstname(e.target.value) }
                />
                <label htmlFor='firstname' className="labText">First Name</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>
            <div className="form-group-parent2">
                <div className="form-group"></div>
                
                <div className="input1_parent">
                <input
                type="text"
                id='lastname'
                required
                placeholder='Last Name'
                name="lastname"
                className="form-control"
                value={ lastname }
                onChange={ (e) => setLastname(e.target.value) }
                />
                <label htmlFor='lastname' className="labText">Last Name</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>
            <div className="form-group-parent2">
                <div className="form-group"></div>
                
                <div className="input_parent">
                <input
                type="password"
                required
                id="password"
                placeholder='Password' 
                name="password" 
                autoComplete="none" 
                className="form-control" 
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
                />
                <label htmlFor='password' className="labText">Password</label>
                </div>
                <div className="help_parent"> <span className="help-block"></span></div>
            </div>
            <div className="form-group-parent2">
                <div className="form-group"></div>
                
                <div className="input_parent">
                <input
                type="password" 

                id="cpassword"
                placeholder='Confirm Password'
                name="confirm_password" 
                autoComplete="none"
                className="form-control" 
                value={ cpassword }
                onChange={ (e) => setCpassword(e.target.value) }
                />
                <label htmlFor='cpassword' className="labText">Confirm Password</label>
                </div>
                <div className="help_parent"> <span className="help-block"></span></div>
            </div>
            
            <div className="form-group-parent2">
                <div className="form-group"></div>
                
                <div className="input_parent">
                <input
                type="email"
                required
                id='email'
                placeholder='Email'
                name="email"
                className="form-control"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
                />
                <label htmlFor='email' className="labText">Email</label>
            </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>
        
            <div className="form-group-submit-parent">
                <button type="submit" className="btn_submit" value="Submit" onSubmit={ saveTest }>Submit</button>
                <input type="reset" className="btn-reset" value="Reset" />
            </div>
            <div className="link_parent">
                <p className="reg_para">Already have an account?<Link to="/authadmin" className="reg_link">Login</Link></p>
            </div>
        </form>
    </div>
        
    )
}
 
export default TestR