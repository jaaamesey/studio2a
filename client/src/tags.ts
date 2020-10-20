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
