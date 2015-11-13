var Saxon = function () {
	this.health = parseInt(Math.random()*10);
	this.strength = parseInt(Math.random()*10);
}

Saxon.prototype.punch = function (viking) {
	console.log("Fighter " + this.name + "is punching with strength " + this.strength + ".");
	viking.health = viking.health - this.strength;
	console.log("Health of " + viking.name + "is " + viking.health);
		
}

module.exports = Saxon;