import axios from 'axios';

export async function getAllTags(): Promise<any> {
  return new Promise(async (resolve) => {
    return await axios
      .get('http://127.0.0.1:9000/tags',{},{ withCredentials: true })
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        console.error(err.toString());
        throw 'Something unexpected happened on the server.';
      });
  })
}

export async function getTagsForUser(): Promise<any> {
  const username = JSON.parse(localStorage.getItem('user')).username;
  return new Promise(async (resolve) => {
    return await axios
      .get('http://127.0.0.1:9000/tags/' + username)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        console.error(err.toString());
        throw 'Something unexpected happened on the server.';
      });
  })
}
  
export async function setTags(tags: number[]) {
  let user = localStorage.getItem('user');
  return await axios
    .post(
      'http://127.0.0.1:9000/tags/SetTags',
      {
        user,
        tags
      },
      { withCredentials: true },
    )
    .catch((err) => {
      console.error(err.toString());
      throw 'Something unexpected happened on the server.';
    })
    .then((result) => {
      if (result.data.isSuccess) {
        
        location.replace('/');
      } else {
        throw 'Invalid username/password combination.';
      }
    });
}
