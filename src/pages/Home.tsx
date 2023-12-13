import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProfilesList from '../components/Profile/ProfilesList';
import { useCallback, useEffect, useState } from 'react';
import type { ProfileType } from '../components/Profile/Profile.type';

import './Home.css';

const Home: React.FC = () => {
  // This page will keep track of the list of profiles in state,
  // so that it can pass the list of profiles to the ProfilesList component.
  // As there is not much logic going on here, it will be beneficial to 
  // have stupid components that just render the data they are given.
  const [profiles, setProfiles] = useState<ProfileType[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(response => response.json())
      .then(data => {
        setProfiles(data.results);
      })
      .catch(error => {
        // handle errors with IonToast or similar in a real app
        console.log(error);
      })
  }, []);

  const handleRemoveProfile = useCallback((profile: ProfileType) => {
    setProfiles(profiles.filter((p) => p.login.uuid !== profile.login.uuid));
  }, [profiles]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        scrollY={false}
      >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProfilesList
          profiles={profiles}
          removeProfile={handleRemoveProfile}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
