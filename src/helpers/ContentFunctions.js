const moment = require('moment');

async function getGreeting(hour) {
  let greeting = 'Good Day';
  if (hour >= 12 && hour <= 16) {
    greeting = 'Good Afternoon';
  } else if (hour >= 7 && hour <= 12) {
    greeting = 'Good Morning';
  } else if (hour >= 16 && hour <= 20) {
    greeting = 'Good Evening';
  } else if (hour >= 20 && hour <= 24) {
    greeting = 'Good Night';
  } else if (hour >= 0 && hour <= 7) {
    greeting = 'Good Night';
  }
  greeting = 'Welcome back';
  return greeting;
}

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

const getGreetingLine = (greeting, userName) => `${greeting}, ${capitalize(userName)}`;

const getHourFromTimeZone = (timezone) => {
  const defHours = '25';
  if (timezone) {
    const hours = moment().tz(timezone).format('h');
    return hours;
  }
  return defHours;
};

module.exports = {
  getGreeting,
  getGreetingLine,
  getHourFromTimeZone,
  capitalize,
};
