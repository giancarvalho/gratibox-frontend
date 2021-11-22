import axiosBase from './axiosBase';

function createBearerAuth(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function postNewUser(newUserData) {
  return axiosBase.post('/sign-up', newUserData);
}

function postUser(userData) {
  return axiosBase.post('/sign-in', userData);
}

function getPlans(token) {
  return axiosBase.get('/plans', createBearerAuth(token));
}

function postSubscription(body, token) {
  return axiosBase.post('/subscription', body, createBearerAuth(token));
}

function getSubscription(token) {
  return axiosBase.get('/subscription', createBearerAuth(token));
}

function getFormDetails(planId, token) {
  return axiosBase.get(
    `/form-details?planId=${planId}`,
    createBearerAuth(token)
  );
}
export {
  postNewUser,
  postUser,
  getPlans,
  getFormDetails,
  postSubscription,
  getSubscription,
};
