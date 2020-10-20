import axios from 'axios';

export async function getCourses(fac): Promise<any> {
  return new Promise(async (resolve) => {
    let faculty = (fac == "viewCourses") ? '' : ("/" + fac); 
    console.log("Faculty:" + faculty);
    return await axios
      .get('http://127.0.0.1:9000/courses' + faculty)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        console.error(err.toString());
        throw 'Something unexpected happened on the server.';
      });
  })
  
}
