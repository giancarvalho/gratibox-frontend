import axiosBase from './axiosBase';

// function createBearerAuth(token) {
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// }

function postNewUser(newUserData) {
  return axiosBase.post('/sign-up', newUserData);
}

function postUser(userData) {
  return axiosBase.post('/sign-in', userData);
}

export { postNewUser, postUser };
