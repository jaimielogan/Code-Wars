function squareDigits(num){
  //may the code be with you
  var numString = num.toString();

	var squared = "";

	for (i=0; i<numString.length; i++){
		console.log(Math.pow(Number(numString[i]),2));
		squared += Number(Math.pow(Number(numString[i]),2));
	}

	return Number(squared);
}
