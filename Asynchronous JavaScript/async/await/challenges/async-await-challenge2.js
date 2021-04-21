// create a function called getcurrentcountry
// should return a promise that resolves the country object for your current location
// use async/await for the new function

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getmyCountry(location.country);
  return country;
};

getCurrentCountry()
  .then((country) => {
    console.log(country.name);
  })
  .catch((error) => {
    console.log(error);
  });
