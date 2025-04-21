import { FaEllipsisH, FaBell } from 'react-icons/fa';
import '../style/BannerSection.css'

export default function BannerSection() {
  return (
    <div className='banner-section'>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className='profile-logo'
        width={120}
        height={120}
      />
      <div className='profile-actions'>
        <span className='action-icon'><FaEllipsisH /></span>
        <span className='action-icon'><FaBell /></span>
        <span className='follow-button-wrapper'><button className='follow-button'>Following</button></span>
      </div>
    </div>
  );
}
