// callback
const getdataCallback = (callback) => {
  setTimeout(() => {
    callback(`this is my callback sudo error`, undefined);
    callback(`this is my callback sudo error`, undefined);
  }, 250);
};

getdataCallback((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// promise
const getdata
const Mypromise = Mypromise.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
