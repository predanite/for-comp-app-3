function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(500,250);
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded)
}
function draw(){
   image(video,0,0,300,300)
   classifier.classify(video,gotResult)
}

function modelLoaded(){
  console.log("model is loaded")
}

function gotResult(error,results){
  if(error)
  {
    console.error(error)
  }
  else{
   document.getElementById("cheese").innerHTML=results[0].label
   document.getElementById("sneeze").innerHTML=results[0].confidence.toFixed(3)
  }
}