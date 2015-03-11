function RedOrGreen (elementTag) {
	// body...

	var newElement = document.createElement(elementTag);

	this.makeGreen  = function() {
		// body...
		newElement.style.backgroundColor = "green";
		newElement.innerHTML = " "+"Passed";
	};
	this.makeRed = function(result, expectedResult) {
		// body...
		newElement.style.backgroundColor = "red";
		newElement.innerHTML = "Failed!"+" " +"returned: " + result +" " + "expected:" + " " + expectedResult;
	};

	document.body.appendChild(newElement);
};
