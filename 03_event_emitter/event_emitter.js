var MyEventEmitter = function () {
	this.events = {};


}

MyEventEmitter.prototype.addListener = function(first_argument, second_argument) {
	if(this.events[first_argument] == undefined) {
		this.events[first_argument] = [];
	}
		this.events[first_argument].push(second_argument);
};

MyEventEmitter.prototype.emit = function(first_argument, second_argument) {
	var arr = this.events[first_argument];
	arr.map(function(o){
		o.apply(this, [second_argument]);
	});
};
