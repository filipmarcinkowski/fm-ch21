'use strict';

const dayInput = document.querySelector('.in__day');
const monthInput = document.querySelector('.in__month');
const yearInput = document.querySelector('.in__year');
const btn = document.querySelector('.btn-container');

const dayOutput = document.querySelector('.out__day');
const monthOutput = document.querySelector('.out__month');
const yearOutput = document.querySelector('.out__year');

const label = document.querySelector('.date__label');
const input = document.querySelector('.date__input');
const errorMsg = document.querySelector('.input__error');

const dataBox = document.querySelectorAll('.date__box');

const emptyMsg =
  '<p class="input__error error-text">This field is required</p>';
const validDateMsg = `<p class="input__error error-text ">Must be a valid date</p>`;

const pasteDate = {
  yyyy: '',
  mm: '',
  dd: '',
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

const addErrorClr = function (input, label) {
  input.classList.add('error-input');
  label.classList.add('error-text');
};

// ////////////////////////////////////////////////

const checkData = function () {
  pasteDate.dd = +dayInput.value;
  pasteDate.mm = +monthInput.value;
  pasteDate.yyyy = +yearInput.value;

  dataBox.forEach(checkInput);
};

let d;
let m;
let y;

const checkInput = function (e) {
  const label = e.querySelector('.date__label');
  const input = e.querySelector('.date__input');
  const prevError = e.querySelector('.input__error');

  if (prevError) {
    prevError.remove();
    label.classList.remove('error-text');
    input.classList.remove('error-input');
  }

  const inputField = input.value;

  const validMsg = `<p class="input__error error-text">Must be ${
    input.classList.contains('in__year')
      ? `in the past`
      : `a valid ${label.textContent}`
  }</p>`;

  const past = new Date(
    `${pasteDate.yyyy}-${pasteDate.mm}-${pasteDate.dd}`
  ).getTime();

  if (inputField === '') {
    e.insertAdjacentHTML('beforeend', emptyMsg);
    addErrorClr(input, label);
  } else if (inputField !== '') {
    if (input.classList.contains('in__day')) {
      d = testDay(inputField, validMsg, input, label, past);
    } else if (input.classList.contains('in__month')) {
      m = testMonth(inputField, validMsg, input, label);
    } else if (input.classList.contains('in__year')) {
      y = testYear(inputField, validMsg, input, label);
    }
    if (d && m && y) {
      pastTime(past);
    }
  }
};

// ////////////////////////////////////////////////

const testDay = function (value, validMsg, input, label, past) {
  const dExp = /^(0?[1-9]|[1-2][0-9]|3[01])$/;
  const a = dExp.test(value);
  const b = pasteDate.dd === new Date(past).getDate();
  const c = pasteDate.mm === new Date(past).getMonth() + 1;

  if (!a) {
    input.parentElement.insertAdjacentHTML('beforeend', validMsg);
    addErrorClr(input, label);
  } else if (!(b && c)) {
    input.parentElement.insertAdjacentHTML('beforeend', validDateMsg);
    addErrorClr(input, label);
  } else if (a && b && c) {
    return true;
  }
};

const testMonth = function (value, validMsg, input, label) {
  const mExp = /^(0?[1-9]|1[0-2])$/;
  const a = mExp.test(value);

  if (!a) {
    input.parentElement.insertAdjacentHTML('beforeend', validMsg);
    addErrorClr(input, label);
  } else {
    return true;
  }
};

const testYear = function (value, validMsg, input, label) {
  const yExp = /\d{4}/;
  const a = yExp.test(value);
  const b = +value <= 2024;
  const validYear = a && b;

  if (!validYear) {
    input.parentElement.insertAdjacentHTML('beforeend', validMsg);
    addErrorClr(input, label);
  } else {
    return true;
  }
};

// /////////////////////////////////////////////////

const pastTime = function (past) {
  resetCalcTime();

  const calcAge = function (past) {
    for (let i = past; i <= now; i += day) {
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

  calcAge(past);
};

btn.addEventListener('click', checkData);
