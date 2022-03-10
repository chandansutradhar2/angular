function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fun1 completed");
      resolve();
    }, 2000);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fun2 completed");
      resolve();
    }, 2000);
  });
}

function fun3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fun3 completed");
      resolve();
    }, 2000);
  });
}

function fun4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fun4 completed");
      resolve();
    }, 2000);
  });
}

function fun5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fun5 completed");
      resolve();
    }, 2000);
  });
}

function fun6() {
  setTimeout(() => {
    console.log("fun6 completed");
  }, 2000);
}

function fun7() {
  setTimeout(() => {
    console.log("fun7 completed");
  }, 2000);
}

async function callingFunction() {
  await fun1();
  await fun2();
  await fun3();
  await fun4();
  await fun5();
  await fun6();
  await fun7();
  console.log("this is sync code");
  //   fun1().then(() => {
  //     fun2().then(() => {
  //       fun3().then(() =>
  //         fun4().then(() =>
  //           fun5().then(() => console.log("all function completed"))
  //         )
  //       );
  //     });
  //   });
}

callingFunction();
