// Turtle template

var willson; //declare a variable for our Turtle

function setup() {
    createCanvas(400, 400)
    background(color(200))

    //always call turtleSetup() here
    turtleSetup();

    //make a Turtle object
    willson = new Turtle(200, 200);

    //draw a square
    willson.forward(150);
	willson.right(90);
	willson.forward(150);
	
	willson.penUp();
	willson.moveTo(150,150)
	willson.penDown();
	
	willson.forward(100);
	willson.left(45);
	willson.forward(100);
	
	willson.setAngle(160);
	willson.forward(100);
  


} //end setup

function draw() {
    //leave this empty for now
}



/*-------------------------------------------------
   TURTLESETUP FOR NEW FUNCTIONS  
   ------------------------------
   Define new Turtle functions below, then add
   each one to the turtleSetup function here     
/*-----------------------------------------------*/

function turtleSetup() {
    // later we'll have stuff here

}

/*-------------------------------------------------
   TURTLESETUP FOR NEW FUNCTIONS  
   ------------------------------
   Define new Turtle functions below, then add
   each one to the turtleSetup function here     
/*-----------------------------------------------*/
