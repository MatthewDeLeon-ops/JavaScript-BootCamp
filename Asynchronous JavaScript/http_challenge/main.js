// Make a new request for all countries
// Parse the responseText to get back the array of objects
// Find your country object by its country code (alpha2code property) -- "alpha2Code": "US"
// Print the full country name (name property)
// later down the road try using a setter to map country code to alpha2code

/*
const alpha2Code = "US";
const locationrequest = new XMLHttpRequest();
locationrequest.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    const location = data.find((location) => location.alpha2Code === alpha2Code);
    console.log(location.alpha2Code);
  }
  else if (e.target.readyState === 4)
  console.log('unable to fetch the data requested')
});
locationrequest.open("GET", "https://restcountries.eu/rest/v2/all");
locationrequest.send();
*/

/////////////Refactored \\\\\\\\\\\

const alpha2Code = "US";
const locationrequest = new XMLHttpRequest();

locationrequest.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);

    const information = data.forEach((item) => {
      if (item.alpha2Code === alpha2Code) {
        console.log(`Your country name is: ${item.name}`);
      }
    });
  } else if (e.target.readyState === 4 || e.target.status === 400) {
    console.error(
      "unable to fetch the data requested in response to the Get Error"
    );
  }
});

locationrequest.open("GET", "https://restcountries.eu/rest/v2/all");
locationrequest.send();
