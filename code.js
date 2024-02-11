// Fetch API

const img = fetch("https://jsonplaceholder.typicode.com/photos");
const userName = fetch("https://jsonplaceholder.typicode.com/users");
const comment = fetch("https://jsonplaceholder.typicode.com/comments");

// Initialization
const webImg = document.getElementById("myImg");
const userComments = [];
import User from "./class.js";

// functions
const coolFunction = async () => {
  const response = await img;
  const jsonUserData = await response.json();
  //console.log(jsonUserData);
  return jsonUserData;
};

const randomImage = async () => {
  const result = await coolFunction();
  const randomNum = randomNumber();
  const filteredResults = result.filter((item) => {
    return item.id === randomNum;
  });
  //console.log(filteredResults);
  return filteredResults;
};

const randomNumber = () => {
  let result = Math.floor(Math.random() * 5000 + 1);
  //console.log(result);
  return result;
};

const randomImageUrl = async () => {
  const randomImg = await randomImage();
  const imgURL = randomImg[0].url;
  //console.log(imgURL);
  return imgURL;
};

const changeURL = async () => {
  const URL = await randomImageUrl();
  webImg.src = `${URL}`;
};

// USER DATA
const randomUserName = async () => {
  // import nameList
  const response = await userName;
  const jsonUserData = await response.json();
  //console.log(jsonUserData);

  // find name by dint of Id
  const randomNum = Math.floor(Math.random() * 10 + 1);
  const filteredNames = jsonUserData.filter((item) => {
    return item.id === randomNum;
  });
  //console.log(filteredNames);

  // get the name
  const result = filteredNames[0].username;
  const resultWithQuotes = `${result}`;
  //console.log(resultWithQuotes);
  return resultWithQuotes;
};

const randomUserComment = async () => {
  // import commentList
  const response = await comment;
  const jsonUserData = await response.json();
  //console.log(jsonUserData);

  // find comment by dint of Id
  const randomNum = Math.floor(Math.random() * 500 + 1);
  const filteredComments = jsonUserData.filter((item) => {
    return item.id === randomNum;
  });
  //console.log(filteredNames);

  // get the comment
  const result = filteredComments[0].body;
  const resultWithQuotes = `${result}`;
  //console.log(resultWithQuotes);
  return resultWithQuotes;
};

const exportTime = () => {
  let min = 500; // 500ms to 6000ms //minK = 1
  let max = 6000; //maxK = max/min = 6000/500
  const maxK = max / min; // num < 1
  let randomK = Math.floor(Math.random() * maxK + 1); // minK to maxK
  let result = min * randomK;
  //console.log(result);
  return result;
};

const posting = async () => {
  const uName = await randomUserName();
  const uComment = await randomUserComment();
  userComments.push(new User(uName, uComment, exportTime()));
  userComments[0].post();
};

//randomImage();
//coolFunction();
//

// Main code

changeURL(); // post a random pic from Web

posting(); // post the name, comment with the random time;
