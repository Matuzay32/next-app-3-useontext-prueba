import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

export default function Profile() {
  const { selectedUser } = useContext(UserContext);

  //destructuro todo el el objeto seleccionado
  const { id, email, first_name, last_name, avatar } = selectedUser;

  return (
    <div>
      {selectedUser ? (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={avatar}
            className="card-img-top"
            alt={`${first_name} ${last_name}`}
          />
          <div className="card-body">
            <h1>{`${first_name}  ${last_name}`}</h1>
            <p className="card-text">{email}</p>
          </div>
        </div>
      ) : (
        <h1>No user Seclected</h1>
      )}
    </div>
  );
}
