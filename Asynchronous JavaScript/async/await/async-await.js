const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("number must be provided");
    }, 200);
  });

const processData = async () => {
  let data = await getDataPromise(50);
  data = await getDataPromise(data);
  return data;
};

processData()
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log("error", error);
  });
