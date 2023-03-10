function setup(){

    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(650,60);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    background("yellowgreen");
    textSize(difference);
    fill("darkblue");
    text("Sreekar",100,250);
    
}

function modelLoaded(){
    console.log("Model Loaded");
}

difference = 0;
leftWristX = 0;
rightWristX = 0;

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}