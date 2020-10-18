import axios from 'axios';

const userStringLS = localStorage.getItem('user');
export const user = userStringLS ? JSON.parse(userStringLS) : null; // If null, user is not logged in.

export async function login(username, password) {
  return await axios
    .post(
      'http://127.0.0.1:9000/user/login',
      {
        user: {
          username: username,
          password: password,
        },
      },
      { withCredentials: true },
    )
    .then((result) => {
      console.log(result);
      console.log(result.data.isSuccess);
      if (result.data.isSuccess) {
        localStorage.setItem('user', JSON.stringify(result.data.user));
        location.replace('/');
      } else {
        throw 'Invalid username/password combination.';
      }
    })
    .catch((err) => {
      console.error(err.toString());
      throw 'Something unexpected happened on the server.';
    });
}

export async function logout() {
  await axios.post(
    'http://127.0.0.1:9000/user/logout',
    {},
    { withCredentials: true },
  );
  localStorage.clear();
  location.replace('/');
}
