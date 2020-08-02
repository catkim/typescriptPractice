import { Repeat } from './classes/Repeat.js';
const getRepeat = new Repeat('abc', 3);
console.log(getRepeat.repeatStringNumTimes);
const getRepeatNeg = new Repeat('cat', -3);
console.log(getRepeatNeg.repeatStringNumTimes);
const getRepeatWithNums = new Repeat(456, 4);
console.log(getRepeatWithNums.repeatStringNumTimes);
