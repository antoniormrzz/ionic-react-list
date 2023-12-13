import React from 'react';
import {
  IonItem,
  IonAvatar,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/react';
import type { ProfileType } from './Profile.type';

interface ProfileProps {
  profile: ProfileType;
  removeProfile: (profile: ProfileType) => void;
}

const Profile: React.FC<ProfileProps> = (
  { profile, removeProfile }
) => {


  return (
    <IonItemSliding
      key={profile.login.uuid}
    >
      <IonItem>
        <IonAvatar slot="start">
          <img src={profile.picture.thumbnail} />
        </IonAvatar>
        <IonLabel>{`${profile.name.title} ${profile.name.first} ${profile.name.last}`}</IonLabel>
      </IonItem>

      <IonItemOptions>
        <IonItemOption
          color="danger"
          onClick={() => removeProfile(profile)}
        >
          Delete
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}

export default Profile;