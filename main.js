function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 145, 100, 350, 275)

    rect(70, 420, 500, 20);
    rect(70, 40, 500, 20);
    rect(40, 20, 20, 400);
    rect(580, 20, 20, 400);

    fill(4, 113, 143);
    stroke(4, 113, 143);
    circle(50, 50, 80);

    fill(4, 113, 143);
    stroke(4, 113, 143);
    circle(590, 50, 80);

    fill(4, 113, 143);
    stroke(4, 113, 143);
    circle(50, 430, 80);

    fill(4, 113, 143);
    stroke(4, 113, 143);
    circle(590, 430, 80);


}

function take_snapshot() {
    save("projectpic.png");
}