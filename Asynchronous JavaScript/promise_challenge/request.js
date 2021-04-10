const getmyCountry = (countrycode) =>
  new Promise((resolve, reject) => {
    const locationrequest = new XMLHttpRequest();

    locationrequest.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find(
          (country) => country.alpha2Code === countrycode
        );
        resolve(country);
      } else if (e.target.readyState === 4) {
        reject("unable to get data");
      }
    });
    locationrequest.open("GET", "https://restcountries.eu/rest/v2/all");
    locationrequest.send();
  });
