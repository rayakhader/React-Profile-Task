import { FaLink, FaRegCalendarAlt } from 'react-icons/fa';
import '../style/ProfileBio.css'

export default function ProfileBio() {
  return (
    <div className='profile-bio'>
      <h1>React</h1>
      <p>@react.js</p>
      <p>The library for web and native user interfaces</p>
      <div className='bio-info'>
        <div className='bio-link'>
          <FaLink />
          <span> react.div</span>
        </div>
        <div className='bio-joined'>
          <FaRegCalendarAlt />
          <span> Joined July 2013</span>
        </div>
      </div>
      <div className='bio-stats'>
        <span><b>223</b> Following</span>
        <span><b>223</b> Followers</span>
      </div>
    </div>
  );
}
