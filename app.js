const axios  = require('axios')

axios.get('https://swapi.co/api/films')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
