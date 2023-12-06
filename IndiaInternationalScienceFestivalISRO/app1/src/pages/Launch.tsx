import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { logInOutline, planet } from "ionicons/icons";
import { loginUser } from "../firebaseConfig";
import { toast } from "../toast";

const Launch: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const res = await loginUser(email, password)
    if (res) {
      toast('Successfuly logged in')
    }
  }

  return (
    <IonPage>
      <IonContent scrollY={false}>
        <IonCard color={"light"}>
          <div className="ion-text-center">
            <img src="public\favicon.png" alt="React" className="ion-padding" />
          </div>
          <IonCardContent>
            <h1
              style={{
                fontFamily: "sans-serif",
                textAlign: "left",
                fontSize: "4em",
                fontWeight: "bolder",
              }}
            >
              Welcome,
            </h1>
            <p
              style={{
                textAlign: "left",
                fontSize: "1.5em",
                fontFamily: "monospace",
              }}
            >
              To our app !
            </p>

            <form>
              {/* Enter email */}
              <IonInput
                labelPlacement="floating"
                label="Email"
                type="email"
                placeholder="simpsons@future.com"
                className="ion-margin-top"
                onChange={(e: any) => setEmail(e.target.value)}
              />
              {/* Enter password */}
              <IonInput
                labelPlacement="floating"
                label="Password"
                type="password"
                placeholder="Keep this a secret!"
                className="ion-margin-top"
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </form>
            {/* Login button */}
            <IonButton
              type="button"
              expand='block'
              color={"success"}
              className="ion-margin-top"
              onClick={login}
            >
              Login
              <IonIcon icon={logInOutline} slot="start" />
            </IonButton>
            {/* Register button */}
            <IonButton
              expand='block'
              routerLink="/Register"
              className="ion-margin-top"
            >
              First time? Register here!
              <IonIcon icon={planet} slot="start" />
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>

      <div className="ion-light">
        <IonFooter>
          <IonCard color={""}>
            <h6 style={{ fontSize: "1em", textAlign: "center" }}>
              &copy; 2023 All Rights Reserved
            </h6>
          </IonCard>
        </IonFooter>
      </div>
    </IonPage>
  );
};

export default Launch;
