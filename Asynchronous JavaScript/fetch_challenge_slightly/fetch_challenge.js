////////// Revisit the fetches section at some point \\\\\\\\\\\

// convert getCountry to use fetch for grabbing the website and return a promise\
// make sure getCountry still resolves with the country that matches
// change getcountry usage to use catch.

/// 1

const fetchCountry = (countrycode) => {
  // fetching data from the website
  return (
    fetch("https://restcountries.eu/rest/v2/all")
      // IF http status is 200 return the
      .then((response) => {
        if (response.status == 200) {
          return response.json();
          // throw error if the site isnt reached
        } else {
          throw new Error("unable to get country");
        }
      })
      .then((data) => {
        // map country to country.alpha2code and return results
        return data.find((country) => country.alpha2Code === countrycode);
      })
  );
};
// 2 & 3
// fetch the correct country code using promise
fetchCountry("US")
  .then((country) => {
    console.log(`my country is ${country.name}`);
  })
  .catch((err) => {
    console.error(`error occured: ${err}`);
  });
