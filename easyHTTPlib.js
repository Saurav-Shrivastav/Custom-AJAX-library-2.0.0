/**
* EasyHTTP Library.
* Library for making HTTP requests.
*
* @version 2.0.0
* @author Saurav Shrivastav
* @license MIT
*
**/

class EasyHTTP{
  // Make a HTTP GET request:
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  
};
