import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from './AuthContext/AuthContext';
import { BiUser} from "react-icons/bi";

import LeftSidenav from './LeftSidenav';

const Header = () => {

const{user,logout}=useContext(UserContext)

const sinOut=()=>{
  logout(()=>{})
}



const navItems=<>
{

  user? <>
    <li className='text-white my-auto mx-3 '>{user?.displayName}</li>
    <li>
    <img src={user?.photoURL} width="50" className='rounded-4' height="50" alt="" />
    </li>
   <li>
  <Link>
  <button type="button" onClick={sinOut} className="btn  my-2 mx-4 btn-outline-danger">logOut</button>
  </Link>
  </li>

</>
:<>
<li>
  <Link  className=' my-auto mx-3 ' to='/login'>login</Link>
</li>
<li>
  <Link  className=' my-auto mx-3 ' to='/register'>Register</Link>
</li>
<li>
     <span className='text-white  '  > <BiUser/></span>
</li>
</>

}





</>



return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
         <Link to="/"> <Navbar.Brand href="#home">NewsProtal</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav  ">
            <Nav className="">
            {navItems}
              
        </Nav>
            <Nav className='d-sm-block d-lg-none'>
             <LeftSidenav></LeftSidenav>
            </Nav>
          </Navbar.Collapse>
        </Container>
  
      </Navbar>
    );
};

export default Header;