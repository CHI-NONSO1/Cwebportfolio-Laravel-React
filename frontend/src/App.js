import './App.css';

import {  Route, Routes } from "react-router-dom";
import Register from './Register/Register';
import Home from "./components/Home";
import TestT from "./components/TestT";
import Admin from './components/App/Admin';
import ContactList from './components/ContactList';
import Login from './components/Login/Login';



function App() {
  return (
    
    <div className="container">
     
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
        <Routes>
        <Route exact path="/home/:portfolioadminid"  element={<Home/ >} />
           
            <Route exact path="messages"  element={<ContactList/ >} />
            
            <Route path="/testd"  element={<TestT/ >} />
            
            <Route path="/"  element={<Register/ >} />

            <Route path="/login"  element={<Login/ >} />
      
            <Route path="/authadmin" element={<Admin/ >} />
            <Route path="/authadmin/goal/:goalid" element={<Admin/ >} />
            <Route path="/authadmin/biodata/:biodataid" element={<Admin/ >} />
            <Route path="/authadmin/motto/:mottoid" element={<Admin/ >} />
            <Route path="/authadmin/education/:eduqualid" element={<Admin/ >} />
            <Route path="/authadmin/hobby/:hobbyid" element={<Admin/ >} />
            <Route path="/authadmin/reference/:referenceid" element={<Admin/ >} />
            <Route path="/authadmin/workexperience/:workexperienceid" element={<Admin/ >} />
            <Route path="/authadmin/philosophy/:philosophyid" element={<Admin/ >} />
            <Route path="/authadmin/project/:projectid" element={<Admin/ >} />
            <Route path="/authadmin/post/:postid" element={<Admin/ >} />
            <Route path="/authadmin/adminupdate/:portfolioadminid" element={<Admin/ >} />
            </Routes>
        </div>
      </div>
     
    </div>
    
  );
}

export default App;
