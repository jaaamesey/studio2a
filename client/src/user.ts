import axios from 'axios';

const userStringLS = localStorage.getItem('user');
export const user: {
  username: string;
  type: 'STUDENT' | 'TEACHER' | 'ADMIN';
} | null = userStringLS ? JSON.parse(userStringLS) : null; // If null, user is not logged in.

export async function login(username: string, password: string) {
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
    .catch((err) => {
      console.error(err.toString());
      throw 'Something unexpected happened on the server.';
    })
    .then((result) => {
      if (result.data.isSuccess) {
        localStorage.setItem('user', JSON.stringify(result.data.user));
        location.replace('/');
      } else {
        throw 'Invalid username/password combination.';
      }
    });
}

export async function logout() {
  try {
    await axios.post('http://127.0.0.1:9000/user/logout');
  } catch (e) {
    console.error('Could not log out properly: ' + e);
  }

  localStorage.clear();
  location.replace('/');
}
