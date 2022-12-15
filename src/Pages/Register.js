import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Shared/AuthContext/AuthContext';

const Register = () => {

    const {createuser,updateUserProfile}=useContext(UserContext)
    const [erro,setErro]= useState()
    const [accepttarms,setAccepttarms, ]=useState(false)
    console.log(accepttarms)



    const handleRegister=(event)=>{
      
    event.preventDefault();
    const from=event.target;
    const email=from.email.value
    const password=from.password.value
    const name=from.name.value;
    const photoURL=from.photoURL.value
 
//user create
    createuser(email,password)
    .then((result)=>{
        const user=result.user
        
        from.reset()
        handleUpdateUserProfile(name,photoURL)
       
        console.log(user)
    })
    .catch(err =>{
        console.log(err)
        setErro(err.message)
    })
 }



//user profile  upttade

const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }

    updateUserProfile(profile)
        .then(() => { })
        .catch(error => console.error(error));
}

 const handletarmsofController=(event)=>{
setAccepttarms(event.target.checked)
 }


    return (
        <form onSubmit={handleRegister} className='w-100 my-5 py-5 shadow-lg'> 
        <h4>Please Register</h4>
        <p className='text-danger'> {erro}</p>
<input className='d-block w-75 m-auto border p-2 my-4' type="text" placeholder='Youre  name' required name='name'/>

<input className='d-block w-75 m-auto border p-2 my-4' type="text" placeholder='photoURl' required name='photoURL'/>

<input className='d-block w-75 m-auto border p-2 my-4' type="text" placeholder='email' required name='email'/>
<input className='d-block w-75 m-auto border p-2 my-4'  type="password" placeholder='password' required name='password'/>

 
 <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={handletarmsofController}  />
    <label className="form-check-label" htmlFor="exampleCheck1">Accept <Link to="/tarms">terms of Condition</Link></label>
 
  
<input className='d-block bg-primary  rounded-2 w-25 m-auto border p-2 my-4' type="submit" value='Register'  disabled={!accepttarms} />


</form>

    );
};

export default Register;