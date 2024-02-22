'use strict';

const dayInput = document.querySelector('.in__day');
const monthInput = document.querySelector('.in__month');
const yearInput = document.querySelector('.in__year');
const btn = document.querySelector('.btn');

const day = 24 * 60 * 60 * 1000;
const now = Date.now();

console.log(now);
console.log(new Date());

const objDate = {
  day: 0,
  month: 0,
  year: 0,
};
const calcTime = {
  day: -1,
  month: 0,
  year: 0,
};

const calcA = function () {
  // const dd = dayInput.value;
  // const mm = monthInput.value;
  // const yyyy = yearInput.value;

  const dd = 2;
  const mm = 1;
  const yyyy = 1991;

  const pastDate = new Date(`${yyyy}-${mm}-${dd}`).getTime();
  console.log(pastDate);

  objDate.day = dd;
  objDate.month = mm;
  objDate.year = yyyy;
  console.log(objDate);

  const calcAge = function () {
    let pastDays = 0; // counter
    let curDate;

    for (let i = pastDate; i <= now; i += day) {
      curDate = new Date(i);
      const curDay = curDate.getDate();
      const curMonth = curDate.getMonth() + 1;
      const curYear = curDate.getFullYear();

      console.log(i);
      console.log(now);
      console.log(curDate);

      if (i !== now) {
        if (curYear !== objDate.year && curMonth === mm && curDay === dd) {
          calcTime.year += 1;
          calcTime.month = 0;
          calcTime.day = 0;
        } else if (curMonth !== objDate.month && curDay === dd) {
          calcTime.month += 1;
          calcTime.day = 0;
        } else {
          calcTime.day += 1;
        }
      } else {
        console.log(`minęło ${pastDays - 1} dni`);
        console.log(calcTime);
      }

      objDate.day = curDay;
      objDate.month = curMonth;
      objDate.year = curYear;
      console.log(objDate);

      pastDays++; // counter
    }
  };

  calcAge();

  // ////////////////////////////////////////////////////////
};

btn.addEventListener('click', calcA);
