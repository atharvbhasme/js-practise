//fecth: Native browser url request
//fetch will take two paramter which will take url and options
const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10';
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data.data.data);

} catch (error) {
  console.error(error);
}

//how to cancel the HTTP request

//diff between axios and fecth
//fetch will not reject promise on 400 or 500 res but axios will, axios only resolve after 2XX 
//how to cancel HTTP reuqets and how to handle timouts: abortController 