//jshint exversion:6
//write "$npm install supervillains" and "$npm install superheroes" before execute
//write "$node index.js" in cmd, it prints out random villain name to console.

var npmvillains = require("supervillains"); //get specific npm package
var npmsuperheroes = require("superheroes");

var myVillain = npmvillains.random(); //use its function
var myHero = npmsuperheroes.random();

console.log("Villain: "+myVillain);
console.log("Hero: "+myHero);
