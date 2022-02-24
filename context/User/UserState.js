import React, { useReducer, useState } from "react";

//tipos de datos para ejecutar el reducer
import { GET_USERS, GET_PROFILE } from "../types";

//Axios libreria que permite hacer peticiones fetch mas rapidamente
import axios from "axios";

//reducer
import UserReducer from "./UserReducer";

//contexto de usuario
import UserContext from "./UserContext";

//Funcion principal
export default function UserState(props) {
  //ESTADO INICIAL
  const initialState = {
    user: [],
    selectedUser: null,
  };

  //Reducer
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Esta funcion trae varios usuarios AXIOS
  //Lo paso por la funcion de dispatch para despues trabajarlo en el reducer por payload
  const getUsers = async () => {
    const res = await axios.get("https://reqres.in/api/users");
    console.log(res.data.data, " mostrando res desde getUsers");
    dispatch({
      type: GET_USERS,
      payload: res.data.data,
    });
  };

  //Esta funcion trae un usuario en base a un id que se le envia AXIOS
  //Lo paso por la funcion de dispatch para despues trabajarlo en el reducer por payload
  const getProfile = async (id) => {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log(res.data.data, " mostrando res desde geProfile");

    dispatch({
      type: GET_PROFILE,
      payload: res.data.data,
    });
  };

  return (
    <UserContext.Provider
      /* value le estoy pasando un obj  de usuarios con los propiedades del estado*/

      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getProfile,
        getUsers,
      }}>
      {props.children}
    </UserContext.Provider>
  );
}
