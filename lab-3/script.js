`use strict`;

const name = document.querySelector("#validationName");
const lastname = document.querySelector("#validationLastname");
const address = document.querySelector("#validationAddress");
const city = document.querySelector("#validationCity");
const state = document.querySelector("#validationState");
const zip = document.querySelector("#validationZip");
const mail = document.querySelector("#validationMail");

const isLettersOnly = (str) => {
  return /^[a-zA-Z]+$/.test(str);
};

const isFiveDigits = (str) => {
  return /^\d{5}$/.test(str);
};

const checkStringOnNumber = (str, type) => {
  if (isLettersOnly(str)) {
    console.log(
      `The string ${type.toUpperCase()} does not contain numbers: ${str}`
    );
  } else {
    console.log(`A string ${type.toUpperCase()} contains numbers`);
  }
};

const checkForm = () => {
  checkStringOnNumber(name.value, "name");
  checkStringOnNumber(lastname.value, "lastname");

  if (mail.value.indexOf("@") == -1) {
    console.log("Mail does not contain @");
  } else {
    console.log(`Mail contain @: ${mail.value}`);
  }

  if (isFiveDigits(zip.value)) {
    console.log(`ZIP  contain five numbers: ${zip.value}`);
  } else {
    console.log("ZIP does not contain five numbers");
  }
};

const btn = document.querySelector("#submit");
btn.addEventListener("click", checkForm);

// d

const eventRes = () => {
  const input = document.querySelector("#input");
  const out = document.querySelector("#out");
  const str = input.value.replace(/\s/g, "");
  const arr = str.match(/.{1,2}/g);

  if (arr[arr.length - 1].length == 1) {
    arr[arr.length - 1] += "_";
  }

  out.innerHTML = "";
  for (let item of arr) {
    const node = `<li>${item} </li>`;
    console.log(item);
    out.innerHTML += node;
  }
};

const res = document.querySelector("#res");

res.addEventListener("click", eventRes);

////--------------------------------

const area = document.querySelector(".area");
const ball = document.getElementById("ball");
const ballPosition = {
  x: 0,
  y: 210,
  step: 5,
  stepHorizontal: 40,
  stepVertical: 40,
  moveBall: false,
  width: 20,
};

ballPosition.width = ball.getBoundingClientRect().width;

ballPosition.stepHorizontal = ballPosition.step;
ballPosition.stepVertical = ballPosition.step;

ball.addEventListener("mouseenter", () => {
  ballPosition.moveBall = false;
  console.log(ballPosition.moveBall);
});

ball.addEventListener("mouseleave", () => {
  ballPosition.moveBall = true;
  console.log(ballPosition.moveBall);
});
// console.log(ball.getBoundingClientRect());
// console.log(area.getBoundingClientRect());

const moveBall = () => {
  if (!ballPosition.moveBall) return;

  if (ballPosition.x > 600 - 15) {
    ballPosition.stepHorizontal = -ballPosition.step;
  } else if (ballPosition.x < 0 + ballPosition.step) {
    ballPosition.stepHorizontal = ballPosition.step;
  }

  if (ballPosition.y > 600 - 15) {
    ballPosition.stepVertical = -ballPosition.step;
  } else if (ballPosition.y < 0 + ballPosition.step) {
    ballPosition.stepVertical = ballPosition.step;
  }

  ballPosition.y += ballPosition.stepVertical;
  ballPosition.x += ballPosition.stepHorizontal;

  ball.style.top = `${ballPosition.x}px`;
  ball.style.left = `${ballPosition.y}px`;

  console.log(`Move x: ${ballPosition.x}. y: ${ballPosition.y}`);
};

setInterval(() => {
  moveBall();
}, 50);
