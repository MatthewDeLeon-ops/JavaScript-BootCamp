const getLocation = () => {
  return fetch("http://ipinfo.io/json?token=40fb13691eaacf").then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("unable to get info");
      }
    }
  );
};

// steps 1 and 2 here

// this challenge requires user to create account with ipinfo.io and use their token
