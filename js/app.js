'use strict';

let correct = 0;
let msg = '';
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
    correct += 1;
    alert('Yes this is right ;)');
  }else {
    alert('Nope!  :(');
  }
  console.log(correct);

  let favCamp = prompt('Do I like camping?   If yes enter  [ yes ]  or  [ y ]');

  if (favCamp === null){
    favCamp = '';
  }else {
    favCamp = favCamp.toLowerCase();
  }
  if (favCamp === 'y' || favCamp === 'yes' ){
    correct += 1;
    alert('Yes this is right ;)');
  }else {
    alert('Nope!  :(');
  }
  console.log(correct);
  let favPet = prompt('Is it better for me to have dogs than cats?   If yes enter  [ yes ]  or  [ y ]');

  if (favPet === null){
    favPet = '';
  }else {
    favPet = favPet.toLowerCase();
  }
  if (favPet !== 'y' || favPet !== 'yes' ){
    alert('Nope!  :(');
  }else {
    correct += 1;
    alert('Yes this is right ;)');
  }
  console.log(correct);
  let favMovie = prompt('Is it better for me to stay at home and enjoy watching action movies rather than horror movies?   If yes enter  [ yes ]  or  [ y ]');

  if (favMovie === null){
    favMovie = '';
  }else {
    favMovie = favMovie.toLowerCase();
  }
  if (favMovie === 'y' || favMovie === 'yes' ){
    correct += 1;
    alert('Yes this is right ;)');
  }else {
    alert('Nope!  :(');
  }
  console.log(correct);
  let favCar = prompt('Do I prefer Mercedes cars over BMW cars?   If yes enter  [ yes ]  or  [ y ]');

  if (favCar === null){
    favCar = '';
  }else {
    favCar = favCar.toLowerCase();
  }
  if (favCar !== 'y' || favCar !== 'yes' ){
    alert('Nope!  :(');
  }else {
    correct += 1;
    alert('Yes this is right ;)');
  }
  console.log(correct);


  for (let z = 0; z < 4; z++) {
    let favNum = prompt('Guess my favorite number from [ 1 ] to [ 10 ]');
    if (favNum === null){
      favNum = '';
    }else {
      favNum = Number(favNum);
    }

    if (favNum > 7) {
      alert('You guessed a higher number');
    }

    if (favNum < 7) {
      alert('You guessed a lower number');
    }

    if (favNum === 7){
      correct += 1;
      break;
    }
  }

  let sportArray = ['Football','Golf','Swimming','Table tennis','Volly ball','Basketball','Cricket'];
  for (let z = 0; z < 6; z++) {
    let favSport = prompt('Which of these sports do you think I like to play? you can choose by numbers:  1.Football   2.Golf   3.Swimming   4.Table tennis   5.Vollyball   6.Basketball   7.Cricket');
    favSport = Number(favSport) - 1;
    console.log(favSport);
    if (sportArray[favSport] === 'Football' || sportArray[favSport] === 'Table tennis' || sportArray[favSport] === 'Basketball'){
      correct += 1;
      alert('Yes this is right ;)');
      console.log(correct);
      break;
    }else {
      alert('Nope!  :(   try again...');
    }
  }
  alert(msg + `your score is: ${correct} out of 7`);
}
