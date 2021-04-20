// create new function get location no args
//  setup get location to make a request and parse data
// use get location to print the city region and country info
// token 40fb13691eaacf

getLocation()
  .then((location) => {
    console.log(location);
    console.log(
      `you are located in ${location.city} ${location.region} ${location.country}`
    );
  })
  .catch((err) => {
    console.err(`console error: ${err}`);
  });
