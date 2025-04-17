import React from 'react'
import { FaHome,FaUsers,FaEllipsisH,FaSearch,FaListAlt, FaBell, FaEnvelope, FaBookmark, FaUser } from 'react-icons/fa';
import profile from '../../images/profile.jpg'
import X from '../../images/X_logo.jpg'
import './Sidebar.css'

function Sidebar() {
     const menuItems = [
        { icon: <FaHome />, label: 'Home' },
        { icon: <FaSearch /> , label: 'Explore' },
        { icon: <FaBell />, label: 'Notifications' },
        { icon: <FaEnvelope />, label: 'Messages' },
        { icon: <FaListAlt />, label: 'Lists' },
        { icon: <FaBookmark />, label: 'Bookmarks' },
        { icon: <FaUsers />, label: 'Communities' },
        { icon: <FaUser />, label: 'Profile' },
        { icon: <FaEllipsisH />, label: 'More' },
      ];
  return (
    <div>
        <section className='side-bar'>
                <img src={X} alt="" height={50} width={50}/>
                <ul>
                  {menuItems.map((item)=>(
                    <li>
                    <div className='menu-item'>
                      {item.icon}
                      <div className='item-label'>
                        {item.label}
                      </div>
                    </div>
                    </li>
                  ))}
                </ul>
                <div className='button-cont'>
                    <button className='post-btn'>Post</button>
                </div>
                <section className='personal-info'>
                  <img src={profile} alt="Person" height={50} width={50} />
                  <div>
                    <h1>Mohammad Dwika..</h1>
                    <p>@Mohammad Dwika..</p>
                  </div>
                  <span>...</span>
                </section>
              </section>
    </div>
  )
}

export default Sidebar
