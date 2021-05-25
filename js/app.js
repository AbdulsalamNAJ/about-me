'use strict'

let i = "";
let favFood = prompt('Is spaghetti my best meal?');

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
let favSport = prompt('Do I like to play basketball?');

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
let favPet = prompt('Is it better for me to have dogs than cats?');

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
let favMovie = prompt('Is it better for me to stay at home and enjoy watching action movies rather than romantic movies?');

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
let favCar = prompt('Do I prefer Mercedes cars over BMW cars?');

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