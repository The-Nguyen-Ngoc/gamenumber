'use strict';
let mess;
let score = 20;
let so = Math.trunc(Math.random() * 20 + 1);
let highCore;

//reset lại giá trị random và đưa các số khác về gt ban đầu
const reset = () => {
  score = 20;
  document.querySelector('.guess').value = undefined;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start....';
  so = Math.trunc(Math.random() * 20 + 1);
  console.log(so);
};
//hàm check
const check = () => {
  let soInput = Number(document.querySelector('.guess').value);
  if (!soInput) mess = `nhap vao o kia ho tao`;
  else if (soInput !== so) {
    score--;
    document.querySelector('.score').textContent = score;
    mess = soInput >= so ? 'Quá lớn' : 'Quá nhỏ';
  } else {
    mess = `Ban da thang con me no roi`;
    highCore = highCore >= score ? highCore : score;
    console.log(highCore);
    console.log(score);
    document.querySelector('.highscore').textContent = highCore;
  }
  document.querySelector('.message').textContent = mess;
};

document.querySelector('.again').addEventListener('click', reset);
document.querySelector('.check').addEventListener('click', check);
