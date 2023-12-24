import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import LeafletMap from '../components/LeafletMap/LeafletMap';

const Location: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Real Time Location</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div>
                    <LeafletMap />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Location;