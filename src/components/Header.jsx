    import React, { useState } from 'react'
  import Form from './Form';
    export const Header = ({logo}) => {
        const listItems=['Home','About us','Who we are','Contact us'];
       const[status,setStatus]=useState(false);
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
                       return <li key={key}><a>{item}</a></li>
                  })
                }
                 <button className='enquiry--btn' onClick={()=>{setStatus(true)}}>Enquiry Now</button>
            </ul>
           
        </div>   
          {status && <Form display={Display}/>}

        </div>
    )
    }
