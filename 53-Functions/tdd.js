var passes = 0;
var fails = 0;

var assert = {

	equals:function (expectedResult, returnedResult) {
		
		var myDiv = new RedOrGreen("div");

		if (expectedResult === returnedResult) {
			myDiv.makeGreen();
			++passes;
		}
		else {

			myDiv.makeRed(expectedResult, returnedResult);
			++fails;
		}
	var stats = passes+fails;
	var newP = document.createElement("p");
	newP.innerHTML = stats;  
	document.body.appendChild(newP);
  
	}

};

var TestMyCode = {
	run:function(nameOfTest, functionToExecute){
		this.testToRun = nameOfTest;
		functionToExecute(assert);
               
	}
};

