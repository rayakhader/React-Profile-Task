import ProfileHeader from './ProfileHeader';
import BannerSection from './BannerSection';
import ProfileBio from './ProfileBio';
import ProfileTabs from './ProfileTabs';
import PostItem from './PostItem';
import Suggestions from './Suggestions';
import '../style/ProfileContainer.css'

export default function ProfileContainer() {
  return (
    <div className='profile-container'>
      <ProfileHeader />
      <BannerSection />
      <ProfileBio />
      <ProfileTabs />
      <PostItem />
      <Suggestions />
    </div>
  );
}
