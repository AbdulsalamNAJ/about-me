'use strict';

let i = '';
let msg = '';
let counter = 0;
let myBtn = document.getElementById('guess-game');
myBtn.addEventListener('click',myFun);

function myFun(){

  alert('I would like to play a guess game with :D  Ready??');
  let favFood = prompt('Is spaghetti my best meal?   If yes enter  [ yes ]  or  [ y ]');

  if (favFood === null){
    favFood = '';
  }else {
    favFood = favFood.toLowerCase();
  }
  if (favFood === 'y' || favFood === 'yes' ){
    i += 'T';
  }else {
    i += 'F';
  }

  let favSport = prompt('Do I like to play basketball?   If yes enter  [ yes ]  or  [ y ]');

  if (favSport === null){
    favSport = '';
  }else {
    favSport = favSport.toLowerCase();
  }
  if (favSport === 'y' || favSport === 'yes' ){
    i += 'T';
  }else {
    i += 'F';
  }

  let favPet = prompt('Is it better for me to have dogs than cats?   If yes enter  [ yes ]  or  [ y ]');

  if (favPet === null){
    favPet = '';
  }else {
    favPet = favPet.toLowerCase();
  }
  if (favPet === 'y' || favPet === 'yes' ){
    i += 'T';
  }else {
    i += 'F';
  }

  let favMovie = prompt('Is it better for me to stay at home and enjoy watching action movies rather than horror movies?   If yes enter  [ yes ]  or  [ y ]');

  if (favMovie === null){
    favMovie = '';
  }else {
    favMovie = favMovie.toLowerCase();
  }
  if (favMovie === 'y' || favMovie === 'yes' ){
    i += 'T';
  }else {
    i += 'F';
  }

  let favCar = prompt('Do I prefer Mercedes cars over BMW cars?   If yes enter  [ yes ]  or  [ y ]');

  if (favCar === null){
    favCar = '';
  }else {
    favCar = favCar.toLowerCase();
  }
  if (favCar === 'y' || favCar === 'yes' ){
    i += 'T';
  }else {
    i += 'F';
  }

  while (counter < 4) {
    let favNum = prompt('Guess my favorite number from [ 1 ] to [ 10 ]');
    if (favNum === null){
      favNum = '';
    }else {
      favNum = Number(favNum);
    }

    if (favNum > 7) {
      alert('You guessed a higher number');
      counter += 1;
    }

    if (favNum < 7) {
      alert('You guessed a lower number');
      counter += 1;
    }

    if (favNum === 7){
      i += 'T';
      counter = 4;
    }else {
      i += 'F';
      counter = 4;
    }
  }

  for (let x = 0; x <= 4; x++){
    if (i[x] === 'T'){
      msg += 'True! ';
    }else {
      msg += 'False! ';
    }
  }
  alert(msg);
}


