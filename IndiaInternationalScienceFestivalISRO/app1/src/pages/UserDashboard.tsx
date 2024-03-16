import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import LeafletMap from "../components/LeafletMap/LeafletMap";
import styles from "../theme/UserDashboard.module.css";
import { micOutline } from "ionicons/icons";

const UserDashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle className="ion-padding-left">Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* <IonGrid>
        <IonRow>
          <IonCol size="6">
            <IonCard color="light">
              <IonCardHeader>
                <IonCardSubtitle>Card 1</IonCardSubtitle>
                <IonCardTitle>Feature 1</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>This is the feature.</IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard color="light">
              <IonCardHeader>
                <IonCardSubtitle>Card 2</IonCardSubtitle>
                <IonCardTitle>Feature 2</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>This is the feature.</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="6">
            <IonCard color="light">
              <IonCardHeader>
                <IonCardSubtitle>Card 3</IonCardSubtitle>
                <IonCardTitle>Feature 3</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>This is the feature.</IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard color="light">
              <IonCardHeader>
                <IonCardSubtitle>Card 4</IonCardSubtitle>
                <IonCardTitle>Feature 4</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>This is the feature.</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid> */}
      <IonContent>
        <IonCard className={styles["dashboard-card"]} routerLink="/Location">
          <IonCardContent>
            <IonCardTitle>Real Time Location</IonCardTitle>
            {/* <img
              src='../assets/images/location.svg'
              alt="Real Time Location"
              className={styles["card-image"]}
            /> */}
          </IonCardContent>
        </IonCard>

        <IonCard
          className={styles["dashboard-card"]}
          routerLink="/notifications"
        >
          <IonCardContent>
            <IonCardTitle>Assigned tasks</IonCardTitle>
            {/* <img
              src='../assets/images/tasks.jpg'
              alt="Assigned Tasks"
              className={styles["card-image"]}
            /> */}
          </IonCardContent>
        </IonCard>

        <IonCard className={styles["dashboard-card"]} routerLink="/settings">
          <IonCardContent>
            <IonCardTitle>Report</IonCardTitle>
            {/* <img
              src='../assets/images/report.jpg'
              alt="Report"
              className={styles["card-image"]}
            /> */}
          </IonCardContent>
        </IonCard>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink="/voice-assistant">
            <IonIcon icon={micOutline} />
          </IonFabButton>
        </IonFab>
        {/* <LeafletMap /> */}
      </IonContent>
    </IonPage>
  );
};

export default UserDashboard;
