fetchCountry("US")
  .then((country) => {
    console.log(country);
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });
