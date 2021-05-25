'use strict'

let i = "";
let favFood = prompt('Is spaghetti my best meal?   If yes enter  [ yes ]  or  [ y ]');

if (favFood == null) {
    favFood = "";
}else {
    favFood = favFood.toLowerCase();
}
if (favFood == 'y' || favFood == 'yes' ) {
    i += 'T';
}else {
    i += 'F';
}
console.log(i + favFood);

let favSport = prompt('Do I like to play basketball?   If yes enter  [ yes ]  or  [ y ]');

if (favSport == null) {
    favSport = "";
}else {
    favSport = favSport.toLowerCase();
}
if (favSport == 'y' || favSport == 'yes' ) {
    i += 'T';
}else {
    i += 'F';
}
console.log(i + favSport);

let favPet = prompt('Is it better for me to have dogs than cats?   If yes enter  [ yes ]  or  [ y ]');

if (favPet == null) {
    favPet = "";
}else {
    favPet = favPet.toLowerCase();
}
if (favPet == 'y' || favPet == 'yes' ) {
    i += 'T';
}else {
    i += 'F';
}
console.log(i + favFood);

let favMovie = prompt('Is it better for me to stay at home and enjoy watching action movies rather than romantic movies?   If yes enter  [ yes ]  or  [ y ]');

if (favMovie == null) {
    favMovie = "";
}else {
    favMovie = favMovie.toLowerCase();
}
if (favMovie == 'y' || favMovie == 'yes' ) {
    i += 'T';
}else {
    i += 'F';
}
console.log(i + favMovie);

let favCar = prompt('Do I prefer Mercedes cars over BMW cars?   If yes enter  [ yes ]  or  [ y ]');

if (favCar == null) {
    favCar = "";
}else {
    favCar = favCar.toLowerCase();
}
if (favCar == 'y' || favCar == 'yes' ) {
    i += 'T';
}else {
    i += 'F';
}
console.log(i + favCar);