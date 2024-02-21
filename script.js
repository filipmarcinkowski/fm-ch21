'use strict';

const dayInput = document.querySelector('.in__day');
const monthInput = document.querySelector('.in__month');
const yearInput = document.querySelector('.in__year');
const btn = document.querySelector('.btn');
const day = 24 * 60 * 60 * 1000;

const objDate = {
  day: 0,
  month: 0,
  year: 0,
};
const calcTime = {
  day: 0,
  month: 0,
  year: 0,
};

const calcA = function () {
  // const dd = dayInput.value;
  // const mm = monthInput.value;
  // const yyyy = yearInput.value;

  const dd = 26;
  const mm = 8;
  const yyyy = 1985;

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
      curDate = i;

      // console.log(`${i}`);
      // console.log(`${curDate}`);
      if (curDate !== now) {
        if (curYear !== pYear && curDate === dd && curMonth === mm) {
          curYear++;

          if (curMonth !== pMonth) {
          }
        }
        curDate = pastDate;
      }
      console.log(` nr: ${i}`);

      pastDays++; // counter
    }
    console.log(`minęło ${pastYears - 1} lat`);
  };

  // ////////////////////////////////////////////////////////
};

btn.addEventListener('click', calcA);

// 24 * 60 * 60 * 1000

// const now = Date.now();

// const past = now - 3 * 24 * 60 * 60 * 1000;

// console.log(new Date(past).getDate());
// console.log(new Date(past).getMonth() + 1);
// console.log(new Date(past).getFullYear());

// // const day = 1;
// const day = 24 * 60 * 60 * 1000;
// console.log(day);

// const calc = function () {
//   let pastYears = 0;
//   for (let i = past; i <= now; i += day) {
//     console.log(` nr: ${i}`);

//     pastYears++;
//   }
//   console.log(`minęło ${pastYears - 1} lat`);
// };

// calc();

// for (let i = 10; i <= 1; i - 1) {}

// ///////////////////////////////////////////

// const curDay = new Date(curDate).getDate();
// const curMonth = new Date(curDate).getMonth() + 1;
// const curYear = new Date(curDate).getFullYear();

// const pDay = new Date(pastDate).getDate();
// const pMonth = new Date(pastDate).getMonth() + 1;
// const pYear = new Date(pastDate).getFullYear();

// /////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// const pDay = new Date(pastDate).getDate();
// const pMonth = new Date(pastDate).getMonth() + 1;
// const pYear = new Date(pastDate).getFullYear();
