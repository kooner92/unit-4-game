
$(document).ready(function() {

    // create variables

	var randNumber;
	var shapeNumbers = [];
	var shape1;
	var shape2;
	var shape3;
    var shape4;
    
    var total = 0;
    var wins = 0;
    var losses = 0;
    
    // create an array for computer choice and shape choices
    // push value to shapes or computer

	var rand = [];
	for (var r = 1; r < 100; r++) {
		rand.push(r);
    }
    
	var shapes = [];
	for (var s = 1; s < 11; s++) {
		shapes.push(s);
    }
    
    // function for computer choice
    // push value to #randonumber in html

	function ComputerChoice(Comp) {

		var x = Comp[Math.floor(Math.random() * Comp.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

    } 
    
    // function for shapes' randome value
    // for loop for each of 4 shapes
    // push values to shapeNumbers array

	function Randshapes(Comp) {

		for (var y = 0; y < 4; y++){
			var x = Comp[Math.floor(Math.random() * Comp.length)];
			shapeNumbers.push(x);
		}
    } 
    
    //make function for each shape to take on different value

	function shapeValues(Comp) {

		for (i = 0; i < Comp.length; i++) {
		$("#button" + (i+1)).attr("value", Comp[i]);
        }
		shape1 = Comp[0];
		shape2 = Comp[1];
		shape3 = Comp[2];
		shape4 = Comp[3];
	}
	// run all three functions to get the random values
	// store values in each array

	ComputerChoice(rand);
	Randshapes(shapes);
	shapeValues(shapeNumbers);

    // button clicks for each shape
    // add that total to the main total .html

	$("#1").on("click", function() {
		total += shape1;
		$("#totalNumber").html(total);
	});

	$("#2").on("click", function() {
		total += shape2;
		$("#totalNumber").html(total);
	});

	$("#3").on("click", function() {
		total += shape3;
		$("#totalNumber").html(total);
	});

	$("#4").on("click", function() {
		total += shape4;
		$("#totalNumber").html(total);
	});

    // logic for button click to see if total is either equal or greater than
    // add wins or losses to total score
   
	$("button").on("click", function() {
        
        if (total === randNumber) {
			wins++;
			$("#totalNumber").html(total);
			$("#wins").html("Wins: " + wins);

		Restart();
		}

		else if (total > randNumber){
			losses++;
			$("#totalNumber").html(total);
            $("#losses").html("Losses: " + losses);
            
		 Restart();
		}
	});

     
    // function to reset all values to random and start at 0

	function Restart() {

		shapeNumbers = [];
		shapes = [];
		rand = [];

		ComputerChoice(rand);
		Randshapes(shapes);
		shapeValues(shapeNumbers);

		total = 0;
		$("#totalNumber").html(total);
	}
});