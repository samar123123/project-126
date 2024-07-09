song1 = "";
song2 = "";

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,400);
}

function preload(){
    song1 =loadSound("music.mp3");
    song2 = loadSound("heat.mp3.mp3");
}

