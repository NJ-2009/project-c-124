rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model is trained on');
}

function draw(){
    background('#000000');
    fill('#FF0000');
    textSize(difference);
    text(Nirvaan,50,400);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);

        console.log("leftWristX="+leftWristX+"rightWristX ="+rightWristX+"difference="+difference);
    }
    
}