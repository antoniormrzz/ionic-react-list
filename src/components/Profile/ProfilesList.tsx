import type { ProfileType } from './Profile.type';
import { Virtuoso } from 'react-virtuoso';
import Profile from './Profile';

import './ProfilesList.css';

interface ProfilesListProps {
  profiles: ProfileType[];
  removeProfile: (profile: ProfileType) => void;
}

const ProfilesList: React.FC<ProfilesListProps> = (
  { profiles, removeProfile }
) => {
  return (
    // A virtualized list is a list that only renders the items that are visible on the screen.
    // This is a great performance optimization when you have a large list of items.
    // The Virtuoso component is a popular virtualized list component for React, and it works great with Ionic.
    <Virtuoso
      totalCount={profiles.length}
      itemContent={(index) => (
        <div className="virtual-item-wrapper" >
          <Profile profile={profiles[index]} removeProfile={removeProfile} />
        </div>
      )}
    />
  );
};

export default ProfilesList;
