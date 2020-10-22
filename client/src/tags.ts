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

  export async function getTagsForUser() {
    let username = JSON.parse(localStorage.getItem('user'));
    return new Promise(async (resolve) => {
      return await axios
        .get('http://127.0.0.1:9000/tags/' + username,{},{ withCredentials: true })
        .then((result) => {
          resolve(result.data);
        })
        .catch((err) => {
          console.error(err.toString());
          throw 'Something unexpected happened on the server.';
        });
    });
  }
  
export async function setTags(tags: number[]) {
  let user = localStorage.getItem('user');
  setTimeout(function(){ window.location.reload(); }, 1000);
  await axios
    .post(
      'http://127.0.0.1:9000/tags/SetTags',
      {
        user,
        tags
      },
      { withCredentials: true },
    );
  return;
}
