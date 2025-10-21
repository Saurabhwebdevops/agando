import React, { useState } from 'react'
const Form = ({display}) => {
    const[user,setUser]=useState({
        name:'',
        email:'',
        phone:'',
        service:'',
        
    });
    const updateData=(e)=>{
      let {name,value}=e.target;
      setUser({
    ...user, // keep existing state
    [name]: value // update the changed field
  });
    }
    const service=['Web Development','SEO','SEM','PPC','Digital Marketing'];

  return (
    <div className='form-container'>
        <div className="form-start">
          <button  className='close' onClick={(e)=>{
     display(false);
          }}><svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#000"></path> </g></svg></button>
        <h4 className='form__heading'>Boost Your Business Growth — One Click Is All It Takes!</h4>
        <form onSubmit={()=>{
          return false;
        }}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id=""  value={user.name}  onChange={updateData}/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id=""  value={user.email}  onChange={updateData}/>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="" value={user.phone}  onChange={updateData} />
            <label htmlFor="Address">Select Service</label>
            <select>
              {
                service.map((item,i)=>{
                  return <option  key={i}value={item}>{item}</option>
                })
              }

            </select>
          <button  className='submit' type='button'>Submit</button>
         </form>
      </div>
    </div>
  )
}

export default Form
