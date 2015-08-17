//set player names (if I have time for that stretch goal)
var playerOne = "Player One";
var playerTwo = "Player Two";

//represents player position on the board (i Player One, j Player Two)
var i = 0;
var j = 0;

//record the time (if I have time for that stretch goal)
var startTime;
var endTime;

//variables representing different dolphin color options for each facing (if I have time to implement optional colors)
var grayDolR = '<img src="gray-dolphin-r.png"></img>';
var grayDolL = '<img src="gray-dolphin-l.png"></img>';
var tealDolR = '<img src="teal-dolphin-r.png"></img>';
var tealDolL = '<img src="teal-dolphin-l.png"></img>';
var blueDolR = '<img src="blue-dolphin-r.png"></img>';
var blueDolL = '<img src="blue-dolphin-l.png"></img>';
var purpDolR = '<img src="purple-dolphin-r.png"></img>';
var purpDolL = '<img src="purple-dolphin-l.png"></img>';
var greenDolR = '<img src="green-dolphin-r.png"></img>';
var greenDolL = '<img src="green-dolphin-l.png"></img>';
var yelDolR = '<img src="yellow-dolphin-r.png"></img>';
var yelDolL = '<img src="yellow-dolphin-l.png"></img>';
var pinkDolR = '<img src="pink-dolphin-r.png"></img>';
var pinkDolR = '<img src="pink-dolphin-l.png"></img>';

//set player dolphin avatar, facing right and left, gray and teal are default
var color1;
var color2;
var player1DolR = grayDolR;
var player1DolL = grayDolL;
var player2DolR = tealDolR;
var player2DolL = tealDolL;

//reset
function reset() {
	$("div#t" + i.toString() + "up").empty();
	$("div#t" + j.toString() + "down").empty();
	$("div#t0up").append(player1DolR);
	$("div#t0Down").append(player2DolR);
	i = 0;
	j = 0;
	return;
}


$( document ).ready(function() {
    
    //set starting positions
	$("div#t0up").append(player1DolR);
	$("div#t0Down").append(player2DolR);
	
	//keyboard controls
	$(window).keydown(function(e) {
		// d movement- Player One right
		if (event.keyCode === 68) {
			if ((i < 6) || ((i > 13) && (i < 19))){
				$("div#t" + i.toString() + "up").empty();
				$("div#t" + (i + 1) + "up").append(player1DolR);
				i += 1;
			} else if ((i > 7) && (i < 14)){
				$("div#t" + i.toString() + "up").empty();
				$("div#t" + (i - 1) + "up").append(player1DolR);
				i -= 1;
			}else if (i === 19){
				$("div#t" + i.toString() + "up").empty();
				$("div#t" + (i + 1) + "up").append(player1DolR);
				i += 1;
				window.alert("Congratulations!  " + playerOne + " wins!");
				reset();
			}
		// s movement- Player One down
		}else if (event.keyCode === 83){
			if (i === 6){
				$("div#t" + i.toString() + "up").empty();
				$("div#t7up").append(player1DolL);
				i += 1;
			} else if (i === 13){
				$("div#t" + i.toString() + "up").empty();
				$("div#t14up").append(player1DolR);
				i += 1;
			}
		// a movement- Player One left
		}else if (event.keyCode === 65) {
			if (((i > 0) && (i < 7)) || (i > 14)){
				$("div#t" + i.toString() + "up").empty();
				$("div#t" + (i - 1) + "up").append(player1DolL);
				i -= 1;
			} else if ((i > 6) && (i < 13)){
				$("div#t" + i.toString() + "up").empty();
				$("div#t" + (i + 1) + "up").append(player1DolL);
				i += 1;
			}
		// w movement- Player One up
		}else if (event.keyCode === 87){
			if (i === 7){
				$("div#t" + i.toString() + "up").empty();
				$("div#t6up").append(player1DolL);
				i -= 1;
			} else if (i === 14){
				$("div#t" + i.toString() + "up").empty();
				$("div#t13up").append(player1DolR);
				i -= 1;
			}
		}
	});


	//keyboard controls
	$(window).keydown(function(e) {
		// l movement- Player Two right
		if (event.keyCode === 76) {
			if ((j < 6) || ((j > 13) && (j < 19))){
				$("div#t" + j.toString() + "down").empty();
				$("div#t" + (j + 1) + "down").append(player2DolR);
				j += 1;
			} else if ((j > 7) && (j < 14)){
				$("div#t" + j.toString() + "down").empty();
				$("div#t" + (j - 1) + "down").append(player2DolR);
				j -= 1;
			} else if (j === 19){
				$("div#t" + j.toString() + "down").empty();
				$("div#t" + (j + 1) + "down").append(player2DolR);
				j += 1;
				window.alert("Congratulations!  " + playerTwo + " wins!");
				reset();
			}
		// k movement- Player Two down
		}else if (event.keyCode === 75){
			if (j === 6){
				$("div#t" + j.toString() + "down").empty();
				$("div#t7down").append(player2DolL);
				j += 1;
			} else if (j === 13){
				$("div#t" + j.toString() + "down").empty();
				$("div#t14down").append(player2DolR);
				j += 1;
			}
		// j movement-- Player Two left
		}else if (event.keyCode === 74) {
			if (((j > 0) && (j < 7)) || (j > 14)){
				$("div#t" + j.toString() + "down").empty();
				$("div#t" + (j - 1) + "down").append(player2DolL);
				j -= 1;
			} else if ((j > 6) && (j < 13)){
				$("div#t" + j.toString() + "down").empty();
				$("div#t" + (j + 1) + "down").append(player2DolL);
				j += 1;
			}
		// i movement- Player Two up
		}else if (event.keyCode === 73){
			if (j === 7){
				$("div#t" + j.toString() + "down").empty();
				$("div#t6down").append(player2DolL);
				j -= 1;
			} else if (j === 14){
				$("div#t" + j.toString() + "down").empty();
				$("div#t13down").append(player2DolR);
				j -= 1;
			}
		}
	});
			

  });




