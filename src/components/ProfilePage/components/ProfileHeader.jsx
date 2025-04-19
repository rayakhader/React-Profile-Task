import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../style/ProfileHeader.css'

export default function ProfileHeader() {
  return (
    <div className="profile-header">
      <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#fff" />
      <div className="profile-title">
        <h1>React</h1>
        <p>2,611 posts</p>
      </div>
    </div>
  );
}
