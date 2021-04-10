getmyCountry("US").then(
  (country) => {
    console.log(country.name);
  },
  (err) => {
    console.log(`error:${err}`);
  }
);
