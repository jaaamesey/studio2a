import axios from 'axios';
  
export async function GetRecommendations(): Promise<any> {
	const username = JSON.parse(localStorage.getItem('user')).username;
	return new Promise(async (resolve) => {
	  return await axios
		.get('http://127.0.0.1:9000/recommendations/' + username)
		.then((result) => {
		  resolve(result);
		})
		.catch((err) => {
		  console.error(err.toString());
		  throw 'Something unexpected happened on the server.';
		});
	})
  }