var pigify = function (str) {
	
	var index = findFirstVovel (str);
	var move = str.slice(0,index);
	str = str.slice(index) + move + "ay";
	return str;
}

var findFirstVovel = function (str) {	
	if(str.indexOf("qu")==-1) {
	var vowel = ["a","e","i","o","u"];
	var index = [];
		for(var i = 0; i<5; i++) {
			if(str.indexOf(vowel[i])!=-1)
				index.push(str.indexOf(vowel[i]));
		}
		index.sort();
		return index[0];
	}

	else
		return str.indexOf("qu") + 2;
}

var translate = function (str) {
	str = str.split(" ");
	var pig = "";
	str.forEach (function (o){
		pig += pigify(o) + " ";
	});
	pig = pig.slice(0,-1);
	return pig;
}