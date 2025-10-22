    import React, { useState } from 'react'
  import Form from './Form';
  import { Link } from 'react-router-dom';
    export const Header = ({logo}) => {
const listItems = [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/about' },
        { name: 'Who we are', path: '/who-we-are' },
        { name: 'Contact us', path: '/contact' },
    ];       const[status,setStatus]=useState(false);
       const Display=(e)=>{
      setStatus(e);
       }
        return (
        <div className='navbar-container'>
        <div className='logo-area'>
         <img src={logo} alt="website-logo"  width={200}/>           
        </div>
         <div className='navbar-menu-item'>
            <ul className="menu-list">
                {
                  listItems.map((item,key)=>{
                       return <li key={key}>
                        <Link to={item.path}>{item.name}</Link>
                       </li>
                  })
                }
                 <button className='enquiry--btn' onClick={()=>{setStatus(true)}}>Enquiry Now</button>
            </ul>
           
        </div>   
          {status && <Form display={Display}/>}

        </div>
    )
    }
