function preload()
{

}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelready);
    posenet.on('pose',gotposes);
    
}

function draw()
{
    image(video,0,0,500,500);
}

function modelready()
{
    console.log("yay it worked")
}
function gotposes(result)
{
    if(result.length > 0)
    {
        console.log(result);
        console.log("")
    }
}
function save1()
{
    save("mypicture.png")
}