import React, { useState,useEffect } from 'react'
import Header from './componets/Header.js'
import AddContact from './componets/AddContact.js'
import ContactList from './componets/ContactList.js'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [contacts,setContacts] = useState([])

  const LOCAL_STORAGE_KEY = "contacts"
   
   const addContact = (name,email) => {
    let contact ={
      name:name,
      email:email,
    }

    setContacts([...contacts,contact])
  }

  let deleteContact = (contact) => {
   
    setContacts(contacts.filter((e) => {
     return  e!== contact;
    }) )
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setContacts(retriveContacts)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  })

 
  

return (
    <>
    <Router>
    <Header/>
    <Switch>
    <Route path="/add" render = {(props) => (<AddContact {...props}addContact={addContact}/>)}/>
    <Route path="/" render = {(props) => (<ContactList {...props}contacts={contacts} deleteContact={deleteContact}/>)}/>
    </Switch>
    </Router>
    </>
  );
}



export default App;
