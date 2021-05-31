import React from 'react'
import images1 from './images/1.png'
import './style.css'



export default function ContactCard({ contact,deleteContact}) {
    return (
        <>

        
            <div className="box">
                <div class="card mb-2" id ="card11">
                    <div class="row g-0">
                        <div class="col-md-4" id="coll">
                            <img src={images1} id="imagee" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title" id="title11">{contact.name}</h5>
                                <p class="card-text" id="title11"><small>{contact.email}</small></p>
                                </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-danger"  id="btn22"
                   onClick={() => {deleteContact(contact)}}>Delete</button>
                </div>
                
            </div>
          
        </>
    )
}

  
