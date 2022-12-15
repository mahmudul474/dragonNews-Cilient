import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {BsGoogle} from "react-icons/bs";
import { UserContext } from './AuthContext/AuthContext';



const RighNav = () => {

  const {googlelogin}=useContext(UserContext)
  const gogoleprobaider=new GoogleAuthProvider()

  const handeleGoolelogin=()=>{
    googlelogin(gogoleprobaider)
    .then((result)=>{
     const user=result.user
     console.log(user)
  
    })
  }


    return (
        <ButtonGroup className='w-100 mt-3' vertical >
         <Button  onClick={ handeleGoolelogin}  variant="outline-primary"><span className='mr-2'>< BsGoogle/></span > google login</Button>{' '}
         <Button variant="outline-primary">Primary</Button>{' '}
         <Button variant="outline-primary">Primary</Button>{' '}

         
    
         
    
       
        </ButtonGroup>
      );
};

export default RighNav;