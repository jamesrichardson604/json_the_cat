const request = require('request');
const breed = process.argv.slice(2);

//https://api.thecatapi.com/v1/breeds/search?q=sib

const breedDetails = function() {

};


const getData = request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error) throw error;
  if (body !== '[]') {
    const data = JSON.parse(body);
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', data); // Print the HTML for the Google homepage.
    console.log('description: ', data[0].description);
  } else {
    console.log('Requested breed not found!');
  }
   
});


breedDetails(breed, getData);


// const breedID = request('https://api.thecatapi.com/v1/breeds', function (error, response, body) {
//   const data = JSON.parse(body)
//   console.log(typeof data)
//   for(let id in data){
//     console.log(data[id].id)
//   }
// })