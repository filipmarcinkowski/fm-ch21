'use strict';

const dayInput = document.querySelector('.in__day');
const monthInput = document.querySelector('.in__month');
const yearInput = document.querySelector('.in__year');
const btn = document.querySelector('.btn');

const dayOutput = document.querySelector('.out__day');
const monthOutput = document.querySelector('.out__month');
const yearOutput = document.querySelector('.out__year');

const label = document.querySelector('.date__label');
const input = document.querySelector('.date__input');
const errorMsg = document.querySelector('.input__error');

const dataBox = document.querySelectorAll('.date__box');

const emptyMsg =
  '<p class="input__error error-text">This field is required</p>';
let validMsg;
const validDateMsg = `<p class="input__error error-text ">Must be a valid date</p>`;

const pasteDate = {
  yyyy: '',
  mm: '',
  dd: '',
  // past: new Date(`${pasteDate.yyyy}-${pasteDate.mm}-${pasteDate.dd}`).getTime(),
};

const day = 24 * 60 * 60 * 1000;
const now = Date.now();

const calcTime = {
  year: 0,
  month: 0,
  day: 0,
};

const resetCalcTime = function () {
  calcTime.year = 0;
  calcTime.month = 0;
  calcTime.day = 0;
};

const showCalc = function () {
  yearOutput.textContent = calcTime.year;
  monthOutput.textContent = calcTime.month;
  dayOutput.textContent = calcTime.day;
};

const addErrorClr = function () {
  input.classList.add('error-input');
  label.classList.add('error-text');
};

// ////////////////////////////////////////////////

const checkData = function () {
  pasteDate.dd = +dayInput.value;
  pasteDate.mm = +monthInput.value;
  pasteDate.yyyy = +yearInput.value;
  console.log(pasteDate.yyyy);

  dataBox.forEach(checkInput);
};

let d;
let m;
let y;

const checkInput = function (e) {
  const label = e.querySelector('.date__label');
  const input = e.querySelector('.date__input');

  const validMsg = `<p class="input__error error-text">Must be ${
    box.classList.contains('in__year')
      ? `in the past`
      : `a valid ${label.textContent}`
  }</p>`;

  const inputField = input.value;

  if (inputField === '') {
    e.insertAdjacentHTML('beforeend', emptyMsg);
    input.classList.add('error-input');
    label.classList.add('error-text');
  } else if (inputField !== '') {
    if (input.classList.contains('in__day')) {
      console.log('test day');
      d = testDay(inputField, input.parentElement);
    } else if (input.classList.contains('in__month')) {
      console.log('test month');
      m = testMonth(inputField, input.parentElement);
    } else if (input.classList.contains('in__year')) {
      console.log('test year');
      y = testYear(inputField, input.parentElement);
    }

    if (d && m && y) {
      console.log('dane są dobre');
      pastTime();
    }
  }
};

// ////////////////////////////////////////////////

const testDay = function (value, box) {
  console.log('testuje dzień');

  console.log(box);

  const past = new Date(
    `${pasteDate.yyyy}-${pasteDate.mm}-${pasteDate.dd}`
  ).getTime();

  const dExp = /^(0?[1-9]|[1-2][0-9]|3[01])$/;
  const a = dExp.test(value);

  console.log(a);
  const b = pasteDate.dd === new Date(past).getDate();
  const c = pasteDate.mm === new Date(past).getMonth() + 1;
  console.log(pasteDate.dd);
  console.log(new Date(past).getDate());
  console.log(past);

  console.log(b);
  console.log(c);
  if (!a) {
    // box.insertAdjacentHTML('beforeend', validMsg);
    box.insertAdjacentHTML('beforeend', 'filip');
    // addErrorClr();
  } else if (!(b && c)) {
    box.insertAdjacentHTML('beforeend', validDateMsg);
    // addErrorClr();
  } else if (a && b && c) {
    return true;
  }
};

const testMonth = function (value, box) {
  const mExp = /^(0?[1-9]|1[1-2])$/;
  const a = mExp.test(value);

  if (!a) {
    box.insertAdjacentHTML('beforeend', validMsg);
    addErrorClr();
  } else {
    return true;
  }
};

const testYear = function (value, box) {
  const yExp = /\d{4}/;
  const a = yExp.test(value);
  const b = +value <= 2024;
  const validYear = a && b;

  if (!validYear) {
    box.insertAdjacentHTML('beforeend', validMsg);
    addErrorClr();
  } else {
    return true;
  }
};

// /////////////////////////////////////////////////

const pastTime = function () {
  resetCalcTime();

  const past = new Date(
    `${pasteDate.yyyy}-${pasteDate.mm}-${pasteDate.dd}`
  ).getTime();

  const calcAge = function () {
    for (let i = past; i <= now; i += day) {
      // current day timestamp
      const curDate = new Date(i);
      const curDay = curDate.getDate();
      const curMonth = curDate.getMonth() + 1;
      const curYear = curDate.getFullYear();

      if (i !== now) {
        if (
          curYear !== pasteDate.yyyy &&
          curMonth === pasteDate.mm &&
          curDay === pasteDate.dd
        ) {
          calcTime.year += 1;
          calcTime.month = 0;
          calcTime.day = 0;
        } else if (curMonth !== pasteDate.mm && curDay === pasteDate.dd) {
          calcTime.month += 1;
          calcTime.day = 0;
        } else if (curDay !== pasteDate.dd) {
          calcTime.day += 1;
        }
      }
    }
    showCalc();
  };

  calcAge();
};

btn.addEventListener('click', checkData);
