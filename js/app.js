'use strict';

let productArray = [];
let votingRounds = 25;

let imgSection = document.getElementById('img-section');
let buttonElem = document.querySelector('button')
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let results = document.getElementById('results');

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
}

function randomImg() {
  return Math.floor(Math.random() * productArray.length);
}

function renderImg() {
  let imgOneIndex = randomImg();
  let imgTwoIndex = randomImg();
  let imgThreeIndex = randomImg();

  while (imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex) {
    imgTwoIndex = randomImg();
    imgThreeIndex = randomImg();
  }
  while (imgTwoIndex === imgThreeIndex) {
    imgThreeIndex = randomImg();
  }

  imgOne.src = productArray[imgOneIndex].image;
  imgOne.alt = productArray[imgOneIndex].name;
  imgOne.title = productArray[imgOneIndex].name;

  imgTwo.src = productArray[imgTwoIndex].image;
  imgTwo.alt = productArray[imgTwoIndex].name;
  imgTwo.title = productArray[imgTwoIndex].name;

  imgThree.src = productArray[imgThreeIndex].image;
  imgThree.alt = productArray[imgThreeIndex].name;
  imgThree.title = productArray[imgThreeIndex].name;

  // console.log(imgOneIndex);
  // console.log(imgTwoIndex);
  // console.log(imgThreeIndex);

  // console.log(imgTwo.alt);
  // console.log(imgTwo.title);
  // console.log(imgThree.alt);
  // console.log(imgThree.title);

  productArray[imgOneIndex].views++;
  productArray[imgTwoIndex].views++;
  productArray[imgThreeIndex].views++;
}

function handleImgClick(event) {
  let imgClicked = event.target.title;
  console.log(imgClicked);

  for (let i = 0; i < productArray.length; i++) {
    if (imgClicked === productArray[i].name)
      productArray[i].votes++;
  }

  votingRounds--;
  console.log(votingRounds);

  renderImg();
  if (votingRounds === 0) {
    imgSection.removeEventListener('click', handleImgClick);
  }

}

function handleShowResults(){
  if (votingRounds === 0){
    for (let i = 0; i < productArray.length; i++) {
      let resultElem = document.createElement('li');
      resultElem.textContent = `${productArray[i].name}: Views: ${productArray[i].views} Votes:     
       ${productArray[i].votes}`;
      results.appendChild(resultElem);
    }
    buttonElem.removeEventListener('click', handleShowResults);
  }
}

let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogDuck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petSweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');

productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

renderImg();
imgSection.addEventListener('click', handleImgClick);
buttonElem.addEventListener('click', handleShowResults);
