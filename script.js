'use strict';

const dayInput = document.querySelector('.in__day');
const monthInput = document.querySelector('.in__month');
const yearInput = document.querySelector('.in__year');
const btn = document.querySelector('.btn');

const dayOutput = document.querySelector('.out__day');
const monthOutput = document.querySelector('.out__month');
const yearOutput = document.querySelector('.out__year');

// const inputs = document.querySelectorAll('.date__input');

const day = 24 * 60 * 60 * 1000;
const now = Date.now();

const calcTime = {
  year: 0,
  month: 0,
  day: 0,
};

const reset = function () {
  calcTime.year = 0;
  calcTime.month = 0;
  calcTime.day = 0;
};

const showCalc = function () {
  yearOutput.textContent = calcTime.year;
  monthOutput.textContent = calcTime.month;
  dayOutput.textContent = calcTime.day;
};

const testDay = function (input) {
  const dExp = /^(0?[1-9]|[1-2][0-9]|3[01])$/;
  const a = dExp.test(input);
  const b = dd === new Date(pastDate).getDate();
  const c = mm === new Date(pastDate).getMonth();
  const validDay = a && b && c;
};
const testMonth = function (input) {
  const mExp = /^(0?[1-9]|1[1-2])$/;
  return mExp.test(input);
};
const testYear = function (input) {
  const yExp = /\d{4}/;
  const a = yExp.test(input);
  const b = +input <= 2024;
  const validYear = a && b;
};

// /////////////////////////////////////////////////

// function useRegex(input) {
//   let year = /\d{4}/g;
//   let month = /1[0-2]|[0 ]?[1-9]/g;
//   let day = /([3][0-1])|([12][1-9])|[0 ]?[1-9]/g;

//   return year.test(input);
// }

// const isValid =  function(data) {
//   if (data) {
//     +`${data}Input`.value;
//   } else {
//   }
// }

const pastTime = function () {
  reset();

  // const dd = +dayInput.value;
  // const mm = +monthInput.value;
  // const yyyy = +yearInput.value;

  const dd = testDay(dayInput.value);
  console.log(dd);
  const mm = testMonth(monthInput.value);
  console.log(mm);
  const yyyy = testYear(yearInput.value);
  console.log(yyyy);

  // past day timestamp
  const pastDate = new Date(`${yyyy}-${mm}-${dd}`).getTime();

  const calcAge = function () {
    // let pastDays = 0; // counter

    for (let i = pastDate; i <= now; i += day) {
      // current day timestamp
      const curDate = new Date(i);
      const curDay = curDate.getDate();
      const curMonth = curDate.getMonth() + 1;
      const curYear = curDate.getFullYear();

      if (i !== now) {
        if (curYear !== yyyy && curMonth === mm && curDay === dd) {
          calcTime.year += 1;
          calcTime.month = 0;
          calcTime.day = 0;
        } else if (curMonth !== mm && curDay === dd) {
          calcTime.month += 1;
          calcTime.day = 0;
        } else if (curDay !== dd) {
          calcTime.day += 1;
        }
      }
      // pastDays++; // counter
      // console.log(pastDays + 1);
    }
    showCalc();
  };

  calcAge();
};

btn.addEventListener('click', pastTime);
