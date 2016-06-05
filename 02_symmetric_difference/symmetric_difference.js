var difference = function (first, second) {

	var checkDiff = function (num) {
		if(second.indexOf(num)==-1)
			return num;
	}

	return first.filter(checkDiff);
}

var symmetricDiff = function (first, second) {
	return difference(first,second).concat(difference(second,first)); 
}