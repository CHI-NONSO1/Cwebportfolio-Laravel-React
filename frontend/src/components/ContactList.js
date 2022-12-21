import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login/Login';
import useToken from './App/useToken';
 
const ContactList = () => {
    const [contacts, setContact] = useState([]);
 
    useEffect(() => {
        getContacts();
    }, []);
 
    const getContacts = async () => {
        const response = await axios.get('http://localhost:5000/contact');
        setContact(response.data);
    }
 
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/contact/${id}`);
        getContacts();
    }

    const { token, setToken } = useToken();
  

    if(!token) {
      return <Login setToken={setToken} />
    }
 
    return (
        <div>
          
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
                    { contacts.map((contact, index) => (
                        <tr key={ contact.nexicontactid }>
                            <td>{ index + 1 }</td>
                            <td>{ contact.fullname }</td>
                            <td>{ contact.email }</td>
                            <td>{ contact.message }</td>
                            <td>
                                <button onClick={ () => deleteProduct(contact.nexicontactid) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default ContactList