import React from 'react'
import who from '../../public/images/who.avif'
const Who = () => {
  return (
    <div className='about-us-container'>
        <div className="text-area">
            <h4 className='margin medium'>Who we are</h4>
            <p className='margin'>
                We gather talent and inspiration from creatives all around the world –all in one place– and looove it when we help you make your great ideas happen.

We believe in the power of good design and community. Our spirit is restless, and our inner joyful rebel says: Don't follow all the conventions; rewrite them.
            </p>
        </div>
        <div className="image-area">
            <img src={who} alt="" width="500px"/>
        </div>
      
    </div>
  )
}

export default Who
