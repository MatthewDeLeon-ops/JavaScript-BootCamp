getmyCountry("US")
  .then((country) => {
    console.log(country.name);
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });
