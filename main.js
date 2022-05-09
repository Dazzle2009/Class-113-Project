function preload(){

}

function setup(){
    canvas= createCanvas(640, 480);
    canvas.position(350, 250);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);
}

function takeSnapshot(){
    save('picture.jpg');
}