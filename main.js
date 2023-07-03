make_it_right_song="";
life_goes_on_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Peter_pan_song = loadSound("make-it-right.mp3");
    Harry_potter_theme_song = loadSound("life-goes-on.mp3");
}

function draw(){
    image(video,0,0,600,530);
}