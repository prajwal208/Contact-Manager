import React, { useState } from 'react';



export default function ContactCard(props)  {

  const [name,SetName] = useState("")
  const [email,SetEmail] = useState("")

  const add = (e) => {
    e.preventDefault();
    if(name === "" || email=== ""){
        return alert("Name and Email Cannot be Empty")
    }
   
    else{
    props.addContact(name,email)
    SetName("")
    SetEmail("")
    }
   
    props.history.push('/')
   
  }

  

return (
        <>
            <form onSubmit= {add} >
                <div class="mb-3"  id="inputt">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange ={(e) => {SetName(e.target.value)}}
                    value={name} />
                </div>
                <div class="mb-3"  id="inputt1">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputPassword1"
                     onChange ={(e) => {SetEmail(e.target.value)}}
                     value={email}  />
                </div>

                <button type="submit" class="btn btn-primary"  id="btnn3"
               >Add Contact</button>

               
            </form>
        </>
    )
}



