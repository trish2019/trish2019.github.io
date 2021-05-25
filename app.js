// Write your JS in here
//this is an array variable
//alert("HELLO FROM APP.JS");

var pics = [
    "imgs2/Leo_Bed.jpg",  //0
	"imgs2/Leo_Box.jpg",   //1
	"imgs2/Leo_Chilling.jpg", //2  
	"imgs2/Leo_Confused.jpg", //3
	"imgs2/Leo_Laptop.jpg",  //4
	"imgs2/Leo_Prowling.jpg",  //5
	
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){ 
//alert("Clicked!!")
  if (counter ===6) {
  	 counter = 0;
  }
 img.src = pics[counter]
 counter = counter + 1;
 
});

// pics[]
