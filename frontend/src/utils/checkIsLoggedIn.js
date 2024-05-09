export function checkIsLoggedIn() {
  return localStorage.getItem('token') !== null;
}
