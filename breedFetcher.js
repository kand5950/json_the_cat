const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  request((`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`), (error, respo, body) => {
    //console.log(body);
    //console.log(typeof body);
  
    if (error) {
      return callback(error);
    }

    const data = JSON.parse(body);
    //console.log(data);
    if (data.length === 0) {
      return callback(`${breedName} cannot be found`, null);
    } else {
      return callback(null,data[0].description);
    }
  });
};

// console.log(fetchBreedDescription(breedName));
module.exports = { fetchBreedDescription };