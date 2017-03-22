console.log(colors);
var numberOfSquares = 6
var colors = genRanColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
		
		resetAll();
	});
}

function resetAll() {
	colors = genRanColors(numberOfSquares);
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	reset.textContent = "New Colors";
}
colorDisplay.textContent = pickedColor;

// easyButton.addEventListener("click", function() {
// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	numberOfSquares = 3;
// 	colors = genRanColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });
// hardButton.addEventListener("click", function() {
// 	hardButton.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	numberOfSquares = 6;
// 	colors = genRanColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

reset.addEventListener("click", function() {
	resetAll();
	// colors = genRanColors(numberOfSquares);
	// pickedColor = pickColor()
	// colorDisplay.textContent = pickedColor;
	// for(var i = 0; i < squares.length; i++) {
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
	// messageDisplay.textContent = "";
	// reset.textContent = "New Colors";
});

for(var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;

		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			reset.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


function changeColors(color) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var ranColor = Math.floor((Math.random() * colors.length));
	return colors[ranColor]; 
}

function genRanColors(num) {
	var arr = []
	for(var i = 0; i < num; i++) {
		// var red = Math.floor((Math.random() * 255) + 1);
		// var blue = Math.floor((Math.random() * 255) + 1);
		// var green = Math.floor((Math.random() * 255) + 1);
		// arr[i] = "rgb(" + red + ", " + blue + ", " + green + ")";
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor() {
	var red = Math.floor((Math.random() * 255) + 1);
	var blue = Math.floor((Math.random() * 255) + 1);
	var green = Math.floor((Math.random() * 255) + 1);
	var color = "rgb(" + red + ", " + blue + ", " + green + ")";
	return color;
}