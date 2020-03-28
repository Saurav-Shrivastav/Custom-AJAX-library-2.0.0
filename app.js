const http = new EasyHTTP;

// GET data:
http.get('https://jsonplaceholder.typicode.com/posts')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Create user data:
data = {
  name: 'Saurav Shrivastav',
  email: 'ss123@gmail.com'
}

// POST data:
http.post('https://jsonplaceholder.typicode.com/posts', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
