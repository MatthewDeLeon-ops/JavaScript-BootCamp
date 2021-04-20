// convert getCountry to use fetch and return a promise\
// make sure getCountry still resolves with the country that matches
// change getcountry usage to use catch.

/// step 1 \\\

// const getmyCountry = (countrycode) =>
//   new Promise((resolve, reject) => {
//     const locationrequest = new XMLHttpRequest();

//     locationrequest.addEventListener("readystatechange", (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find(
//           (country) => country.alpha2Code === countrycode
//         );
//         resolve(country);
//       } else if (e.target.readyState === 4) {
//         reject("unable to get data");
//       }
//     });
//     locationrequest.open("GET", "https://restcountries.eu/rest/v2/all");
//     locationrequest.send();
//   });

// const countrycode = "US";
// const locationrequest = new XMLHttpRequest();

const getmyCountry = (countrycode) => {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("unable to get country");
      }
    })
    .then((data) => {
      return data.find((country) => country.alpha2Code === countrycode);
    });
};

// fetch("https://restcountries.eu/rest/v2/all", {}).then((response) => {
//   if (response.status === 200) {
//     return response.json();
//   } else {
//     reject("unable to get data");
//   }
// });

// NOTE JUST GOT TO THE PART WHERE IS PARTIALLY CONVERTED OVER RESUME HER FOR CONVERSION

// const fetchrequest = fetch("https://restcountries.eu/rest/v2/all");
// const countrycode = "US";
// const country = find((country) => country.alpha2Code === countrycode);
// fetchrequest.then((countrycode) => {
//   console.log(countrycode);
// });
