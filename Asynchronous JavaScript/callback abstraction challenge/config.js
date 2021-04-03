getmyCountry("US", (error, location) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(`My country is ${location.name}`);
  }
  // function called within function #callback
  // Read more on callback
});
