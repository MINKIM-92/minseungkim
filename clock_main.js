function setup() { 
    // Create Canvas of given size 
    createCanvas(1000, 1000); 
    angleMode(DEGREES);
} 


function draw(){
    background(255);


    // Create the big rectangle.

    translate(300,300);
    rect(0,0,400, 400);

    let hr = hour();
    let mn = minute();
    let sd = second();

    colorMode(HSB);
    strokeWeight(5);
    stroke(0,0,0);




    // Create the rectangle
    push();
    strokeWeight(2);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    let fill_by_second = sd*5
    translate(20,80);
    rect(0,0,0+fill_by_second,30);
    pop();

    push();
    stroke(0,0,255);
    translate(10,100);
    textSize(22);
    text(nf(sd,2,2),10,30);
    pop();



    push();
    let filled_by_minute = mn * 5
    translate(20,150);
    fill(0,0,0)
    rect(0,0,0+filled_by_minute,30);
    pop();


    push();
    stroke(0,0,255);
    translate(10,170);
    textSize(22);
    text(nf(mn,2,2),10,30);
    pop();




    push();
    let filled_by_hour = hr * 5
    translate(20,210);
    fill(0,0,0)
    rect(0,0,0+filled_by_hour,30);
    pop();

    push();
    stroke(0,0,255);
    translate(10,230);
    textSize(22);
    text(nf(hr,2,2),10,30);
    pop();


    push();
    stroke(0,0,255);
    translate(10,100);
    textSize(22);
    text(nf(sd,2,2),10,30);
    pop();


    
    

    

    
}


