var sometimes = function (func) {
	var counter = 1;
	var retFunc = function () {
		if (!run(counter)){
			counter++;
			return "I do not know!";
		}
		else {
			counter++;
			return func.apply(this, (arguments));
		}

	}
	return retFunc;
}

var run = function (num) {
	if(num<3)
		return true;
	else if (num%2)
		return true
	else 
		return false;
}