function setup() {
    canvas = createCanvas(500,380);
    canvas.position(700,140);

    Video = createCapture(VIDEO);
    Video.size(500,500);
    Video.position(40,80);

    start_pose = ml5.poseNet(Video,modelloaded);
    start_pose.on('pose',gotposes);
}
function modelloaded() {
    console.log("model is loaded");
}
function draw() {
    background("#7bfc03");

    textSize(difference);
    text('Tanish', 10,250);
    fill("red");
}
function gotposes(results) {
    if(results.length > 0) {
        console.log(results);

        left_w_x = results[0].pose.leftWrist.x;
    right_w_x = results[0].pose.rightWrist.x;
    difference = Math.floor(left_w_x - right_w_x);

    console.log("left_w = " + left_w_x + "," + "right_w = " + right_w_x + "," + "difference = " + difference);

    document.getElementById("result").innerHTML = difference;
    }
    
}