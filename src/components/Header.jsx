    import React from 'react'
    import logo from '../../public/images/web-logo.png'


    export const Header = () => {
        const listItems=['Home','About us','Who we are','Contact us'];
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
                 <button className='enquiry--btn'>Enquiry Now</button>
            </ul>
           
        </div>   

        </div>
    )
    }
