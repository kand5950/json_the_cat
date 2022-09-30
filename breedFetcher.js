const request = require('request');

const breedName = process.argv[2];

const grabBreedDescription = (breedName, callback) => {
  request((`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`), (err, respo, body) => {
    //console.log(body);
    //console.log(typeof body);
  
    if (err) {
      return console.log(err);
    }

    const data = JSON.parse(body);
    //console.log(data);
    if (data.length === 0) {
      console.log(`${breedName} cannot be found`, null);
    } else {
      console.log(null,data[0].description);
    }
  })
}

console.log(grabBreedDescription(breedName));