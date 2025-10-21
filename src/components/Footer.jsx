import React from 'react'
import { useContext } from 'react'
import menuContext from './Menu'

export const Footer = ({ logo }) => {
  const list = useContext(menuContext);
  console.log(list);
  return (
    <div className='footer-container'>
      <svg viewBox="0 0 24 24" height="35" width="35" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>chat-refreshed</title><path fillRule="evenodd" clipRule="evenodd" d="M3.00013 9L0.940133 5.53C0.540219 4.86348 1.01283 4 1.79012 4H19.3335C20.8062 4 22.0001 5.19391 22.0001 6.66667V17.3333C22.0001 18.8061 20.8062 20 19.3335 20H5.6668C4.19404 20 3.00013 18.8061 3.00013 17.3333V9ZM5.00013 8.44603L3.53252 6H19.3335C19.7017 6 20.0001 6.29848 20.0001 6.66667V17.3333C20.0001 17.7015 19.7017 18 19.3335 18H5.6668C5.29861 18 5.00013 17.7015 5.00013 17.3333V8.44603Z" fill="currentColor"></path><path d="M7.00013 10C7.00013 9.44772 7.44785 9 8.00013 9H17.0001C17.5524 9 18.0001 9.44772 18.0001 10C18.0001 10.5523 17.5524 11 17.0001 11H8.00013C7.44785 11 7.00013 10.5523 7.00013 10Z" fill="currentColor"></path><path d="M7.00013 14C7.00013 13.4477 7.44785 13 8.00013 13H14.0001C14.5524 13 15.0001 13.4477 15.0001 14C15.0001 14.5523 14.5524 15 14.0001 15H8.00013C7.44785 15 7.00013 14.5523 7.00013 14Z" fill="currentColor"></path></svg>
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
  )
}
