import http from './http';


function login(user) {
  console.log("------------");
  console.log(user);
  return http.get('/login');
}

function logout() {
  return http.post('/logout');
}


function currentUser() {
  return http.get('/user');
}


export default {
  login,
  logout,
  currentUser,
};