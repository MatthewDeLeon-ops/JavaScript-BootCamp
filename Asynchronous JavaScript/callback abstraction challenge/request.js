const getmyCountry = (Countryname, callback) => {
  const locationrequest = new XMLHttpRequest();

  locationrequest.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const location = data.find(
        (location) => location.alpha2Code === Countryname
      );
      callback(undefined, location);
    } else if (e.target.readyState === 4) {
      callback("unable to get data");
    }
  });
  locationrequest.open("GET", "https://restcountries.eu/rest/v2/all");
  locationrequest.send();
};
