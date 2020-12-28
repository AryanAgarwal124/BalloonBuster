    //declaring the variables
  var playgroundImage, playground, red_balloonImage, green_balloonImage, blue_balloonImage, pink_balloonImage,bow, bow_image, arrow, arrowImage

  var score = 0;

  var redBalloonGroup, greenBalloonGroup, blueBalloonGroup, pinkBalloonGroup, arrowGroup
  
  
  function preload()
    {
      //load your images here 
      playgroundImage=loadImage("background0.png");
      bowImage=loadImage("bow0.png");
      arrowImage=loadImage("arrow0.png"); 
      red_balloonImage=loadImage("red_balloon0.png");
      green_balloonImage=loadImage("green_balloon0.png");
      blue_balloonImage=loadImage("blue_balloon0.png");
      pink_balloonImage=loadImage("pink_balloon0.png");
    }

function setup() 
{
  createCanvas(600, 600);
  
  //add code here
  
  //creating playground
  playground=createSprite (0,0,600,600);
  playground.addImage(playgroundImage);
  playground.scale=2.5;
  
  //creating bow
  bow=createSprite(460,190,10,10);
  bow.addImage(bowImage);
  bow.scale=1;
  
  redBalloonGroup = new Group();
  greenBalloonGroup = new Group ();
  blueBalloonGroup = new Group();
  pinkBalloonGroup = new Group();
  arrowGroup = new Group ();
}
 
  function draw() 
  {
    //add code here
    playground.velocityX=-2;

    //resetting the playground to play in infinite game space
     if(playground.x<0)
     {
      playground.x=playground.width/2 
     }
     
    //to move the bow with the mouse y position
      bow.y=World.mouseY 
    
    //when space is pressed then arrow hould come out of bow
     if (keyDown("space"))
     {
      createArrow(); 
     }  
  
      spawnBalloons();
    
    if (arrowGroup.isTouching(redBalloonGroup))
    {
      redBalloonGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
    }
    
    if (arrowGroup.isTouching(greenBalloonGroup))
    {
      greenBalloonGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
    }
    
    if (arrowGroup.isTouching(blueBalloonGroup))
    {
      blueBalloonGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+2;
    }
    
    if (arrowGroup.isTouching(pinkBalloonGroup))
    {
      pinkBalloonGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+3;
    }
    
    // to display the sprites
      drawSprites();
    
    //creating scoring system
    textSize(20);
    text("Score:"+score,270,30);
    }

  function createArrow()
  {
    //creating arrow
    arrow =createSprite(400,400,20,5);
    arrow.addImage(arrowImage);
    arrow.y=bow.y;
    arrow.velocityX=-5;
    arrow.scale=0.3;       
    arrowGroup.add(arrow);
  }
    
  function spawnBalloons ()
  {
    //spawning any color balloons at random positions
    var select_balloon=Math.round(random(1,4));
    
    if(World.frameCount%80===0)
    {
      if(select_balloon===1)
      {
        redBalloon();
      }
      else if(select_balloon===2)
      {
        greenBalloon();      
      }
      else if(select_balloon===3)
      {
        blueBalloon();
      }
      else
      {
        pinkBalloon();
      }
    } 
  }

  function redBalloon()
  {
    //creating red Balloons randomly anywhere on screen
    var red = createSprite(0,Math.round(random(20,370)),10,10);
    red.addImage(red_balloonImage);
    red.velocityX=4;
    red.lifetime=150; 
    red.scale=0.1;
    redBalloonGroup.add(red);
  }

  function greenBalloon()
  {
    //creating green Balloons randomly anywhere on screen
    var green= createSprite(0,Math.round(random(20,370)),10,10);
    green.addImage(green_balloonImage);
    green.velocityX=4;
    green.lifetime=150;
    green.scale=0.1;
    greenBalloonGroup.add(green);
  }


  function blueBalloon()
  {
    //creating blue Balloons randomly anywhere on screen
    var blue = createSprite(0,Math.round(random(20,370)),10,10);
    blue.addImage(blue_balloonImage);
    blue.velocityX=4;
    blue.lifetime=150;
    blue.scale=0.1;
    blueBalloonGroup.add(blue);
  }

  
  function pinkBalloon()
  {
    //creating pink Balloons randomly anywhere on screen
    var pink = createSprite(0,Math.round(random(20,370)),10,10);
    pink.addImage(pink_balloonImage);
    pink.velocityX=4;
    pink.lifetime=150;
    pink.scale=1.2;
    pinkBalloonGroup.add(pink);
  }

