function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetch Data completed");
      resolve(100);
    }, 5000);
  });
}

function transformData(data) {
  console.log("transforming data recieved", data);
}

function printData() {
  console.log("print data completed");
}

//promises (recommended)
//callback (not recommended)

fetchData().then((result) => {
  transformData(result);
  printData();
});
