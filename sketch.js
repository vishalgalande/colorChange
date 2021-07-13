
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  
  colorChange();
}


function colorChange()
{
  if (keyIsDown(DOWN_ARROW))
  {
    background('gold');
  }
  if (keyIsDown(UP_ARROW))
  {
    background('orangered');
  }
  if (keyIsDown(RIGHT_ARROW))
  {
    background('lightgreen');
  }
  if (keyIsDown(LEFT_ARROW))
  {
    background('skyblue');
  }
}



