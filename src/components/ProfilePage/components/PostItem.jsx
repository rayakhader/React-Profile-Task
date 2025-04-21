import { FaRetweet, FaRegComment, FaRegHeart, FaEllipsisH } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { BarChart3 } from 'lucide-react';
import profile from '../../../images/profile.jpg'; 
import '../style/PostItem.css'

export default function PostItem() {
  return (
    <div className='post-item'>
      <p><FaRetweet /> React reposted</p>
      <div className='post-header'>
        <div className='post-user'>
          <img src={profile} alt="" className='user-avatar' />
          <div>
            <p><b>danabramov.bsky.social</b> @dan_abramov · May 29</p>
            <p>happy 10th birthday to @reactjs!</p>
          </div>
        </div>
        <span><FaEllipsisH /></span>
      </div>
      <div className='post-footer'>
        <span><FaRegComment /> 46</span>
        <span><FaRetweet /> 65</span>
        <span><FaRegHeart /> 123</span>
        <span><BarChart3 size={18} color="#ccc" /> 1.1M</span>
        <span><FontAwesomeIcon icon={faUpload} /></span>
      </div>
    </div>
  );
}
