const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage(bg);
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    


}

     async function getBackgroundImg(){

    // write code to fetch time from API
    var reponse = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responceJASON = await reponse.jason();
    var datetime = responceJASON.datetime
    // write code slice the datetime
    hour = datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<06 ){ 
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08){
     bg = "sunrise2.png";
    }else if(hour>=23 && hour<=00){
        bg = "sunset10.png";
    }else if(hour>=00 && hour<=03){
        bg = "sunset11.png";
    }else if(hour>=03 && hour<=06){
        bg = "sunset12.png";
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}