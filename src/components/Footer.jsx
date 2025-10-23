import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import menuContext from './Menu'
import { toast, ToastContainer } from 'react-toastify'
import { ref,push } from 'firebase/database'
import database from '../firebase'
import axios from 'axios'
export const Footer = ({ logo }) => {
  useEffect(()=>{
    axios.get('http://localhost/3000');
  })
  const list = useContext(menuContext);
  const [chatdata,setchatData]=useState({
       chat_name:'',
       chat_email:'',
       chat_phone:''  
  });
  const chatValue=(e)=>{
  let {name,value}=e.target;
   setchatData({...chatdata,
    [name]:value
   });
  }
 const SubmitData = (e) => {
  e.preventDefault();

  push(ref(database, 'chat_data'), {
    name: chatdata.chat_name,
    email: chatdata.chat_email,
    phone: chatdata.chat_phone
  })
  .then(() => {
    toast.success('Your form has been submitted');
        setchatData({ chat_name: '', chat_email: '', chat_phone: '' }); // Clear form
    setDisplay('none');
  })
  .catch((error) => {
    toast.error('Submission failed: ' + error.message);
  });
};
  const[display,setDisplay]=useState('none');
  return (
    <>
    <div className='footer-container'>
      <ToastContainer/>
      <button type='button' onClick={()=>{
        setDisplay('block');
      }}>
      <svg viewBox="0 0 24 24" height="35" width="35" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>chat-refreshed</title><path fillRule="evenodd" clipRule="evenodd" d="M3.00013 9L0.940133 5.53C0.540219 4.86348 1.01283 4 1.79012 4H19.3335C20.8062 4 22.0001 5.19391 22.0001 6.66667V17.3333C22.0001 18.8061 20.8062 20 19.3335 20H5.6668C4.19404 20 3.00013 18.8061 3.00013 17.3333V9ZM5.00013 8.44603L3.53252 6H19.3335C19.7017 6 20.0001 6.29848 20.0001 6.66667V17.3333C20.0001 17.7015 19.7017 18 19.3335 18H5.6668C5.29861 18 5.00013 17.7015 5.00013 17.3333V8.44603Z" fill="currentColor"></path><path d="M7.00013 10C7.00013 9.44772 7.44785 9 8.00013 9H17.0001C17.5524 9 18.0001 9.44772 18.0001 10C18.0001 10.5523 17.5524 11 17.0001 11H8.00013C7.44785 11 7.00013 10.5523 7.00013 10Z" fill="currentColor"></path><path d="M7.00013 14C7.00013 13.4477 7.44785 13 8.00013 13H14.0001C14.5524 13 15.0001 13.4477 15.0001 14C15.0001 14.5523 14.5524 15 14.0001 15H8.00013C7.44785 15 7.00013 14.5523 7.00013 14Z" fill="currentColor"></path></svg>
      </button>
      <div className="footer-la">
        <img src={logo} alt="footer-logo" width={200} />
        <p>
          Agando is a Germany-based IT company specializing in the design, manufacturing, and distribution of custom-configured PC systems, notebooks, and servers. With over 30 years of industry experience, Agando has established itself as a trusted name in the European IT hardware market.
        </p>
      </div>
      <div className="footer-links">
        <h4>Useful Links</h4>
        <ul className="link-items">
          {
            list.map((item, key) => {
              return <li key={key}>{item}</li>
            })
          }
        </ul>
      </div>
    </div>
    <div className="chat-form-start" style={{display:display}} >
      <button type='button' id='close_chat' onClick={()=>{
        setDisplay('none');
      }}><svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#000" /> </g></svg></button>
      <h4 className="margin">Fill the details to chat</h4>
       
      <form>
        <label htmlFor="name">Enter your full name</label>
        <input type="text" name="chat_name" id="" onChange={chatValue}  autoComplete='on'/>
        <label htmlFor="email">Enter your Email</label>
        <input type="email" name="chat_email" id="" onChange={chatValue} autoComplete='on'/>
        <label htmlFor="phone">Enter your valid phone number</label>
        <input type="tel" name="chat_phone" id="" onChange={chatValue}  autoComplete='on'/>
        <button type='button' className='submit' onClick={SubmitData}>Submit</button>
      </form>
      
    </div>
    </>
  )
}
