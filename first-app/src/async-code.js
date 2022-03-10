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

function callingFunction() {
  fun1().then(() => {
    fun2().then(() => {
      fun3().then(() =>
        fun4().then(() =>
          fun5().then(() => console.log("all function completed"))
        )
      );
    });
  });
}

callingFunction();
