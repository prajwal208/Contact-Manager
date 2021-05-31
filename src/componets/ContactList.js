import React from 'react'
import { Link } from 'react-router-dom';
import ContactCard from "./ContactCard.js";
import './style.css'
export default function ContactList({contacts,deleteContact}) {

    const ContactList = contacts.map((contact) =>{
        console.log(contact)

     

    return (
        <>
        
         <div className="Contactlist">
          <ContactCard contact={contact} deleteContact={deleteContact}/>
         </div>
        </>
  )

  } )

  return (
      <>
      <div className="container4">
      <h3 id="h33">Contact List</h3>
      <Link to="/add">
      <button type="button" class="btn btn-primary" id="btn11">Add Contact</button>
      </Link>
      </div>
     <div>{ContactList}</div>
     </>
  )



}


