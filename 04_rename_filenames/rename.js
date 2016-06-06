var renameFiles = function (arr) {
	var retArr = [];

	var verify = function (str) {
		var flag = true;
		retArr.forEach(function (o) {
			console.log(str,o,flag, retArr);
			if(str==o)
				flag = false;
		});
		return flag;
	}
	arr.forEach(function(o) {
		var flag = false;
		var num = 0;
		if(retArr.indexOf(o)==-1)
			retArr.push(o);	
		else {
			while(flag===false) {
				num++;
				if(o.match(/\d/)) 
					o = o.slice(0,-3);
				o = o+"("+num+")";	
				flag = verify(o);
				}
			retArr.push(o);	
			}
	})
	return retArr;	
};