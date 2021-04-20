const getPuzzle = (wordcount) => {
  return fetch(`http://puzzle.mead.io./puzzle?wordCount=${wordcount}`).then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch puzzle");
      }
    }).then((data) => {
      return data.puzzle
    })
};

/* 
const getmyCountry = (Countryname) => {
  new Promise((resolve, reject) => {
    const locationrequest = new XMLHttpRequest();

    locationrequest.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const location = data.find(
          (location) => location.alpha2Code === Countryname
        );
        resolve(location);
      } else if (e.target.readyState === 4) {
        reject("unable to get data");
      }
    });
    locationrequest.open("GET", "https://restcountries.eu/rest/v2/all");
    locationrequest.send();
  });
};

*/
