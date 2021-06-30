Webcam.set({
  width: 350,
  height: 300,
  image_format: "png",
  png_quality: 90,

  constraints: {
    facingMode: "enviroment",
  },
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML =
      '<img id="captured_image" src="' + data_uri + '"/>';
  });
}

console.log("mI5 version:", mI5.version);
classifier = mI5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded() {
  console.log("Model Loaded");
}

function check() {
  img = document.getElementById("captured_image");
  classifier.classify(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
  }
}
