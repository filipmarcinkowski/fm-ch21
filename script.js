'use strict';

const now = new Date();
console.log(now);

const past = new Date('1800-02-31');
console.log(past);
const year1 = new Date('1985-08-26');
const year2 = new Date('1986-08-26');
const year3 = new Date('1987-08-26');
const year4 = new Date('1988-08-26');
console.log(year1);
console.log(year2);
console.log(year3);
console.log(year4);

console.log(year2 - year1);
console.log(year3 - year2);
console.log(year4 - year3);

const dif = now - past;
console.log(dif);
console.log(new Date(1214394945345));

console.log(now.getTime());
console.log(past.getTime());

const pastDay = past.getDate();
console.log(pastDay);
const pastMonth = past.getMonth() + 1;
console.log(pastMonth);
const pastYear = past.getFullYear();
console.log(pastYear);
// /////////////////////////////////
const day = now.getDate();
console.log(day);
const month = now.getMonth() + 1;
console.log(month);
const year = now.getFullYear();
console.log(year);
console.log(new Date(now).getFullYear() - new Date(past).getFullYear());
console.log(new Date(now).getMonth() - new Date(past).getMonth());
console.log(new Date(now).getDate() - new Date(past).getDate());
// console.log(new Date(dif));

// dayjs.extend();

// dayjs().from(dayjs('1990-01-01')); // in 31 years
const x = dayjs().from(dayjs('1990-01-01'));
console.log(x);
// const x = moment('19850826', 'YYYYMMDD').fromNow();
// console.log(x);

// const relativeTime = require('dayjs/plugin/relativeTime');

// const y = Date.now() - pastDate.getTime();

// 24 * 60 * 60 * 1000

// const dateDif = new Date(difMil);
// console.log(dateDif);

// const years = dateDif.getFullYear() - 1970;
// console.log(years);

// const months = dateDif.getMonth();
// console.log(months);
// const days = dateDif.getDate();
// console.log(days);
