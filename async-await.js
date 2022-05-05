// Async-await => it is basically use to make the code cleaner and understandable by using promise-based API

const fun = new Promise((resolve, reject) => {
  console.log("this is begning of the program");
  let location = "google";
  if (location === "google") {
    resolve("google say hii..");
  } else {
    reject("we are not on right tab");
  }
});

const funct = new Promise((resolve, reject) => {
  console.log("hi this is anish kumar rai");
  resolve("this is second function in this program");
});

const asyncFunction = async () => {
  try {
    const message = await fun;
    console.log(message);
    const secMessage = await funct;
    console.log(secMessage);
  } catch (error) {
    console.log("error is :" + error);
  }
};
asyncFunction();
console.log("work done");

// another example of async-await

// const firstWork = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("My name is Anish Kumar Rai");
//     reject("this is a reject message");
//   }, 1000);
// });

const secondWork = new Promise((resolve, reject) => {
  const interval = setInterval(() => {
    console.log("my name is anish kumar rai");
  }, 1000);
  setTimeout(() => {
    resolve("I am Persuing MCA");
    clearInterval(interval);
  }, 5000);
});

const asyncAwait = async () => {
  try {
    // const first = await firstWork;
    // console.log(first);
    const second = await secondWork;
    console.log(second);
    console.log("hi this is await function");
  } catch (err) {
    console.log("error: " + err);
  }
};
asyncAwait();
