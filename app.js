// https://calculator.swiftutors.com/perimeter-of-a-rectangle-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeteroftheRectangleRadio = document.getElementById('perimeteroftheRectangleRadio');
const widthoftheRectangleRadio = document.getElementById('widthoftheRectangleRadio');
const heightoftheRectangleRadio = document.getElementById('heightoftheRectangleRadio');

let perimeteroftheRectangle;
let widthoftheRectangle = v1;
let heightoftheRectangle = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

perimeteroftheRectangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Width of the Rectangle';
  variable2.textContent = 'Height of the Rectangle';
  widthoftheRectangle = v1;
  heightoftheRectangle = v2;
  result.textContent = '';
});

widthoftheRectangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of the Rectangle';
  variable2.textContent = 'Height of the Rectangle';
  perimeteroftheRectangle = v1;
  heightoftheRectangle = v2;
  result.textContent = '';
});

heightoftheRectangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of the Rectangle';
  variable2.textContent = 'Width of the Rectangle';
  perimeteroftheRectangle = v1;
  widthoftheRectangle = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeteroftheRectangleRadio.checked)
    result.textContent = `Perimeter of the Rectangle = ${computePerimeteroftheRectangle().toFixed(2)}`;

  else if(widthoftheRectangleRadio.checked)
    result.textContent = `Width of the Rectangle = ${computeWidthoftheRectangle().toFixed(2)}`;

  else if(heightoftheRectangleRadio.checked)
    result.textContent = `Height of the Rectangle = ${computeHeightoftheRectangle().toFixed(2)}`;
})

// calculation

function computePerimeteroftheRectangle() {
  return 2 * (Number(widthoftheRectangle.value) + Number(heightoftheRectangle.value));
}

function computeWidthoftheRectangle() {
  return (Number(perimeteroftheRectangle.value) / 2) - Number(heightoftheRectangle.value);
}

function computeHeightoftheRectangle() {
  return (Number(perimeteroftheRectangle.value) / 2) - Number(widthoftheRectangle.value);
}