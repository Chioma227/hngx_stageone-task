// get html elements

let currentDayElement = document.querySelector(".day");
let currentUTCTime = document.querySelector(".time");

// get date objects
const date = new Date();
const dateInMS = Date.now();

// function to get  current day and UTCtime

const triggerFnc = () => {

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const currentDay = days[date.getUTCDay()];

  currentDayElement.innerHTML = currentDay;
  currentUTCTime.innerHTML = dateInMS ;
};

triggerFnc();
