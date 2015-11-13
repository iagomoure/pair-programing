var Viking = function (name) {
	this.name = name;
	this.health = parseInt(Math.random()*30);
	this.strength = parseInt(Math.random()*30);
};

Viking.prototype.punch = function (saxon) {
	console.log("Vikingo va!!!")
	console.log("Fighter " + this.name + " is punching with strength " + this.strength + ".");
	saxon.health = saxon.health - this.strength;
	console.log("Health of " + saxon.name + "is " + saxon.health);
		
}


module.exports = Viking;


