import { GET_USERS, GET_PROFILE } from "../types";

export default (state, action) => {
  //el acttion es el tipo de datos que viene desde el dispatch
  const { type, payload } = action;

  switch (type) {
    //En caso de que el tipo se del String de la variable GET_ USERS
    // Vas a retornar una copia del estado anterior y a esa copia le actualizar la propiedad users con lo que viene en el payload
    // Lo que viene en el payload es un array
    /* [{
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
}]*/

    case GET_USERS:
      return { ...state, users: payload };

    //En caso de que el tipo se del String de la variable GET_ PORFILE
    // Se va a retornar una copia del estado y se actulizar la propiedad selectedUser con el usuario en custion
    //El ejmplo del usuario seria: CABE ACLARAR QUE VIENE DESDE EL PAYLOAD
    /* {id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'}
 */
    case GET_PROFILE:
      return { ...state, selectedUser: payload };

    default:
      return state;
  }
};
