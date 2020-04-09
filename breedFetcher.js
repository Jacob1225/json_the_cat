const request = require('request');
let args = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?=q${args}`, (error, response, body) => {
  
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (error !== null) {
    return console.log(error);
  }
  if (data.length === 0) {
    return console.log("breed not found!");
  }
  console.log(data[0]['description']);
  
});