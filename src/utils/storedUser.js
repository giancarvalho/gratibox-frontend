function getStoredUser() {
  return JSON.parse(localStorage.getItem('user'));
}
function storeUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export { getStoredUser, storeUser };
