import React from "react";
import firebaseNP from "firebase";
import initFirebase from "../firebaseInit";

interface IUserData {
    exist: boolean
    twitterKey?: string
    uid? : string
    username?: string
}

interface IState {
    userData: IUserData
}

interface IProps {user: firebaseNP.User}

const firebase = initFirebase();
const firestore = firebase.firestore();

export default class Dashboard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { userData: { exist: false } };
  }

  componentDidMount() {
    const { user } = this.props;
    firestore.collection("users").doc(user.uid).get().then((d) => {
      console.log("ok", d);
      this.setState({ userData: d.data() as IUserData });
    })
      .catch((e) => console.log(e, user.uid, "is error"));
  }

  render() {
    const { userData } = this.state;
    return (
      <>
        <nav>
          <div className="parakeet_title">Parakeet.</div>
          <div className="welcome">
            Welcome
            {userData.username}
            .
          </div>
          <div className="other">Docs</div>
          <div className="other">Logout</div>
        </nav>
        <div className="info flex">
          <div className="">
            <div className="key">{userData.twitterKey || "You didn't created any key yet"}</div>
            <div className="center-item">
              <div className="all">
                <div className="refresh btn ico">
                  <img
                    src="https://cdn.discordapp.com/attachments/795287369115762689/848305008860463114/refresh-1781197-1518571.png"
                    alt=""
                  />
                </div>
                <div className="download btn ico">
                  <img
                    src="https://cdn.discordapp.com/attachments/795287369115762689/848314709944827924/Sans_titqsdqsdre.png"
                    alt=""
                  />
                </div>
                <div className="manage btn flex">Manage my subscription</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
