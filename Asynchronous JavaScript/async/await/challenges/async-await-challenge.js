// convert get country and get location to an async/await function

const getmyCountry = async (countrycode) => {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === countrycode);
  } else throw new Error("unable to fetch the country");
};

const getLocation = async () => {
  const response = await fetch("http://ipinfo.io/json?token=40fb13691eaacf");
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("unable to fetch the country");
  }
};
