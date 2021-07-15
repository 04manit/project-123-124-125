var noseX=0,noseY=0,difference=0,left_wrist_x=0,right_wrist_x=0;
console.log("came");
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initiallized. !");
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("NoseX = "+noseX);
        console.log("NoseY = "+noseY);
        left_wrist_x = result[0].pose.leftWrist.x;
        right_wrist_x = result[0].pose.rightWrist.x;
        difference = Math.floor(left_wrist_x - right_wrist_x);
        console.log("Left_wrist_x = "+left_wrist_x);
        console.log("Right_wrist_x = "+right_wrist_x);
    }
}
function draw(){
    background('#808080');
    document.getElementById("square_side").innerHTML = "Font size of the text will be = "+difference+"px";
    text('Manit', noseX, noseY);
    textSize(difference);
}