import React from 'react'
import services from '../Data/servicedetails'
export const Service = () => {
  return (
    <>
      <div className="service-contianer">
        <div className="services-area-start">
          {
            services.map((item, index) => (
              <React.Fragment key={index}>
                <div className="box">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <a href={item.link}>Click here</a>
                </div>
              </React.Fragment>
            ))

          }
        </div>
      </div>
    </>
  )
}
