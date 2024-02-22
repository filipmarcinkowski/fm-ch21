'use strict';

const dayInput = document.querySelector('.in__day');
const monthInput = document.querySelector('.in__month');
const yearInput = document.querySelector('.in__year');
const btn = document.querySelector('.btn');

const dayOutput = document.querySelector('.out__day');
const monthOutput = document.querySelector('.out__month');
const yearOutput = document.querySelector('.out__year');

const day = 24 * 60 * 60 * 1000;
const now = Date.now();

const calcTime = {
  year: 0,
  month: 0,
  day: 0,
};

const showCalc = function () {
  yearOutput.textContent = calcTime.year;
  monthOutput.textContent = calcTime.month;
  dayOutput.textContent = calcTime.day;
};

const pastTime = function () {
  const dd = +dayInput.value;
  const mm = +monthInput.value;
  const yyyy = +yearInput.value;

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
          showCalc();
        } else if (curMonth !== mm && curDay === dd) {
          calcTime.month += 1;
          calcTime.day = 0;
          showCalc();
        } else if (curDay !== dd) {
          calcTime.day += 1;
          showCalc();
        }
      }
      // pastDays++; // counter
      // console.log(pastDays + 1);
    }
  };

  calcAge();
};

btn.addEventListener('click', pastTime);
