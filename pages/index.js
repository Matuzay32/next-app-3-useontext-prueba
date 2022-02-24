//importo la etiqueta Head que viene desde next
import Head from "next/head";

// importo boostrap
import "bootstrap/dist/css/bootstrap.min.css";

//componentes
import UserList from "../components/UserList";
import Profile from "../components/Profile";

//Estado con el UserContext
import UserState from "./../context/User/UserState";

export default function Home() {
  return (
    <div>
      <Head>
        <title>App use context</title>
      </Head>
      <h1>Hola desde el Home</h1>

      <UserState>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-7">
              <UserList />
            </div>

            <div className="col-md-5">
              <Profile />
            </div>
          </div>
        </div>
      </UserState>
    </div>
  );
}
