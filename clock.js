/**
 * How to modifying the pannel,
 */

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(200, 200);
    rotate(-90)
    let hr = hour();
    let mn = minute();
    let sd = second();
/**
 * Setting up the clock.
 */
    // fill(255);
    // noStroke();
    // text(hr + ':' + mn + ':' + sd, 10 , 200);

    /**
     * Creating the circle.
     */
    // strokeWeight(8); // witdh of the stroke used for line.
    // stroke(255);
    // noFill();
    // ellipse(200,200,300,300);

    
    strokeWeight(4);
    stroke(255, 100, 150);
    /**
     * x, y, distance(r x), distance(r,x) bu t the last one is angle.
     * we can make a semicircle by modifying the angle.
     */
    // arc(200, 200, 300, 300, 0, 360); // Circle.

    // MouseX. The system variable mouseX always contains the current horizontal position of the mouse, 
    //relative to (0, 0) of the canvas.
    noFill();
    let secondAngle = map(sd, 0, 60, 0, 360);
   // arc(200, 200, 300, 300, 0, end, PIE); // a semicircle . 
    //arc(200, 200, 300, 300, 0, end, OPEN);
    arc(0, 0, 300, 300, 0, secondAngle);
    
    /**
     * creating the line!
     */
    push();
    rotate(secondAngle)
    stroke(255, 100, 150)
    line(0,0,100,0)
    pop();
    // push and pop only affect the inside(the rotation.)


    stroke(150, 100, 255);
    let minAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, minAngle);

    push();
    rotate(minAngle);
    stroke(150, 100, 255);
    line(0,0,75,0);
    pop();
    
    stroke(150, 255, 100);
    let hourAngle = map(hr%12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, hourAngle);

    push();
    rotate(hourAngle);
    stroke(150, 255, 100);
    line(0,0,50,0);
    pop();

    stroke(255);
    point(0,0);
}
    