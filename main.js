var noseX = 0;
var noseY = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",getPoses);
}

function draw(){
    background("black");
}

function modelLoaded(){
    console.log("model is loaded")
}

function getPoses(results){
    if(results.length>0){
    console.log(results);

    
    }
}