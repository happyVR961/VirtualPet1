//Create variables here
var database;
var dog, happyDog, foodStock;
var Dog,Dog1;
var Food;
function preload()
{
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", function(data){
    Food = data.val();
  });
  Dog = createSprite(200,240,10,10);
   //Dog.shapeColor = "red";
   Dog.scale = 0.5;
   Dog.addImage( dog);
}

function draw() {  
  background(46,139,87);
  
  if (keyWentDown("UP_ARROW")){
    writeStock(Food);
    
    Dog.addImage( dog);
  }
  if (keyWentUp("UP_ARROW")){
    Dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(15);
  fill("black");
  text("Food Remaining : " + Food , 50,50);
  //text("Note : Press UP_ARROW key to feed Drago milk!", 100,100);

}
// function readStock(data){
//   foodS = data.val();
// }

function writeStock(x){
  x = x-1;
database.ref('/').set({
  Food:x
  
})
}


