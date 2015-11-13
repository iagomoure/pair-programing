var Vikings = require('./vikings.js');
var Saxons = require('./saxon.js')

var Game = function (turn) {
	this.turn = Math.floor(Math.random() * 4) + 5;
}

Game.prototype.training = function () {

	while (viking1.health > 0 && viking2.health > 0 && this.turn !=0 ){	
		viking1.punch(viking2);
		viking2.punch(viking1);
		this.turn = this.turn - 1
		var now = this.turn
		console.log("Turn " + now);
	}

	if (viking1.health > viking2.health){
		console.log("The winer is : " + viking1.name);
	}else if (viking1.health < viking2.health){
		console.log("The winer is : " + viking2.name);
	}else{
		console.log("Empate!!!")
	} 
}

Game.prototype.selecOponentSaxon = function () {
	var max = arr_saxons.length;
	var i = Math.floor(Math.random() * max) + 0;
	return arr_saxons[i];
}

Game.prototype.selecOponentViking = function () {
	var max = arr_vikings.length;
	var i = Math.floor(Math.random() * max) + 0;
	return arr_vikings[i];
}

Game.prototype.battle = function (arr_vikings,arr_saxons) {
	while (this.turn != 0){
		for (var i = 0; i < arr_vikings.length; i++){
			var vikingOponent = this.selecOponentSaxon();
			arr_vikings[i].punch(vikingOponent)
		}
		for (var j = 0; j < arr_vikings.length; j++){
			var saxonOponent = this.selecOponentViking();
			arr_saxons[j].punch(saxonOponent)
		}
		this.turn = this.turn - 1;
	}
		
}


var viking1 = new Vikings("Pepe");
var viking2 = new Vikings("Juan");
var viking3 = new Vikings("Lucas");

var saxon1 = new Saxons;
var saxon2 = new Saxons;
var saxon3 = new Saxons;
var saxon4 = new Saxons;

var arr_vikings = [viking1,viking2,viking3];
var arr_saxons = [saxon1, saxon2, saxon3, saxon4];

var game = new Game;
game.training()
game.battle(arr_vikings,arr_saxons)

