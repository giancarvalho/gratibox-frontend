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

export {
  // eslint-disable-next-line import/prefer-default-export
  postNewUser,
};
