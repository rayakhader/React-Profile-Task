import React from 'react'
import '../style/LikeItem.css'

function LikeItem({ img, name, handle }) {
  return (
    <li>
    <div className='like-item'>
      <div className='like-profile'>
        <img src={img} alt={name} className={`user-avatar tailwind-bg`} />
        <div>
          <h3>{name}</h3>
          <p className='profile-handle'>{handle}</p>
        </div>
      </div>
      <button className='follow-button'>Follow</button>
    </div>
  </li>
  )
}

export default LikeItem
