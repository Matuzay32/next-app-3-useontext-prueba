import React, { useContext, useEffect } from "react";

//Traigo el contexto de usuario
import UserContext from "../context/User/UserContext";

export default function UserList() {
  //obtengo la funcion getUsers del contexto de usuarios usando destructuracion
  const { getUsers, users, getProfile } = useContext(UserContext);

  //Use effect
  useEffect(() => {
    getUsers();
    return () => {};
  }, []);

  //funcion principal
  return (
    <div className="list-group h-100">
      {users?.map((user) => {
        return (
          <a
            onClick={() => getProfile(user.id)}
            className="list-group-item list-group-item-action aria-current=true d-flex flex-row justify-content-start"
            href="#"
            key={user.id}>
            <img
              className="img-fluid mr-4 rounded-circle  mr-3"
              width="70px"
              alt={`${user.first_name}  ${user.last_name}`}
              src={user.avatar}></img>
            <p className="m-4">{`${user.first_name}  ${user.last_name}`}</p>
          </a>
        );
      })}
    </div>
  );
}
