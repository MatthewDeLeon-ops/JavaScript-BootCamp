// callback creation
const getdataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("Number must not be blank");
    }
  }, 350);
};

// 2 is the number you set
// getdatacallback(data, corresponds to 2*data which is 2 = 4.
// Then data in (err,data) is multiplied * 4 from earlier resulting in 8.
// nested promise method not the best method

getdataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getdataCallback(data, (err, data) => {
      if (err) {
        console.log("err");
      } else {
        console.log(`data set 1: ${data}`);
      }
    });
  }
});

// start of promises leading to promise chaining \\

// nested promise method not the best method

const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("number must be provided");
    }, 200);
  });

// getDataPromise(4).then((data) => {
//   getDataPromise(data).then((data) => {
//         console.log(`Promise set 2 of data: ${data}`);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   },(err) => {
//     console.log(err);
//   }
// );
/// bad promise method

/*
getDataPromise(10)
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    console.log(`good data ${data}`);
  })

  */

// promise chaining at 10:23
// good method without nesting

getDataPromise(10)
  .then((data) => {
    return getDataPromise(data);
  })
  // promise chained here
  .then((data) => {
    return "this is some test data";
  })
  .then((data) => {
    console.log(data);
  })
  // catch chained here
  .catch((err) => {
    console.log(err);
  });
