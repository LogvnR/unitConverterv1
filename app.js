const mainForm = document.querySelector('#mainForm');

// ===== Unit Selection Buttons =====
const tempBtn = document.querySelector('.tempSelector');
const weightBtn = document.querySelector('.weightSelector');
const distanceBtn = document.querySelector('.distanceSelector');

// ===== Unit Displays =====
const tempDisplay = document.querySelector('.userTempInput');
const weightDisplay = document.querySelector('.userWeightInput');
const distanceDisplay = document.querySelector('.userDistanceInput');

// ===== Temp Input Options =====
const celsiusBox = document.querySelector('.celsius');
const fahrenheitBox = document.querySelector('.fahrenheit');

// ===== Weight Input Options =====
const kilogramBox = document.querySelector('.kilogram');
const poundsBox = document.querySelector('.pound');

// ===== Distance Input Options =====
const kilometerBox = document.querySelector('.kilometer');
const milesBox = document.querySelector('.miles');

// ===== Button Selection and Form Changing =====
tempBtn.addEventListener('click', function () {
  tempBtn.classList.toggle('selected');
  weightBtn.classList.remove('selected');
  distanceBtn.classList.remove('selected');
  tempDisplay.style.display = 'flex';
  weightDisplay.style.display = 'none';
  distanceDisplay.style.display = 'none';
});
weightBtn.addEventListener('click', function () {
  weightBtn.classList.toggle('selected');
  tempBtn.classList.remove('selected');
  distanceBtn.classList.remove('selected');
  weightDisplay.style.display = 'flex';
  tempDisplay.style.display = 'none';
  distanceDisplay.style.display = 'none';
});
distanceBtn.addEventListener('click', function () {
  distanceBtn.classList.toggle('selected');
  tempBtn.classList.remove('selected');
  weightBtn.classList.remove('selected');
  distanceDisplay.style.display = 'flex';
  tempDisplay.style.display = 'none';
  weightDisplay.style.display = 'none';
});

// ===== Round Number Function =====
function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

mainForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const input = parseInt(document.querySelector('.userInputBox-Input').value);
  const outputText = document.querySelector('.userOutputText');
  if (tempBtn.classList.contains('selected')) {
    tempConvert(input, outputText);
  } else if (weightBtn.classList.contains('selected')) {
    weightConvert(input, outputText);
  } else {
    distanceConvert(input, outputText);
  }
  document.forms['mainForm'].reset();
});

// const clearInput = () => {
//   input = '';
// };

const tempConvert = function (input, output) {
  if (celsiusBox.checked === true) {
    let celsiusCalc = round((input - 32) / 1.8, 1);
    output.innerText = `${input}F is ${celsiusCalc}C`;
  } else {
    let fahrenheitCalc = round(input * 1.8 + 32, 1);
    output.innerText = `${input}C is ${fahrenheitCalc}F`;
  }
};

const weightConvert = function (input, output) {
  if (kilogramBox.checked === true) {
    let kilogramCalc = round(input * 0.454, 1);
    output.innerText = `${input} lbs is ${kilogramCalc} kgs`;
  } else {
    let poundsCalc = round(input * 2.2, 1);
    output.innerText = `${input} kgs is ${poundsCalc} lbs`;
  }
};

const distanceConvert = function (input, output) {
  if (kilometerBox.checked === true) {
    let kilometerCalc = round(input * 1.6, 1);
    output.innerText = `${input} mi is ${kilometerCalc} kms`;
  } else {
    let milesCalc = round(input * 0.621, 1);
    output.innerText = `${input} kms is ${milesCalc} mi`;
  }
};

// ===== Temperature Selectors =====
celsiusBox.addEventListener('click', function () {
  if (celsiusBox.checked == true) {
    fahrenheitBox.checked = false;
  }
});
fahrenheitBox.addEventListener('click', function () {
  if (fahrenheitBox.checked == true) {
    celsiusBox.checked = false;
  }
});
// ===== Weight Selectors =====
kilogramBox.addEventListener('click', function () {
  if (kilogramBox.checked == true) {
    poundsBox.checked = false;
  }
});
poundsBox.addEventListener('click', function () {
  if (poundsBox.checked == true) {
    kilogramBox.checked = false;
  }
});

// ===== Distance Selectors =====
kilometerBox.addEventListener('click', function () {
  if (kilometerBox.checked == true) {
    milesBox.checked = false;
  }
});
milesBox.addEventListener('click', function () {
  if (milesBox.checked == true) {
    kilometerBox.checked = false;
  }
});
