import React from 'react'
import services from '../Data/servicedetails'
export const Service = () => {
  return (
    <>
    <div className="service-contianer">
        <div className="services-area-start">
          {
            services.map((item,key)=>{
               return <>
                   <div className={`box-${key}`}>
                    {item.title}
                   </div>
               </>
            })
          }
        </div>
    </div>
    </>
  )
}
