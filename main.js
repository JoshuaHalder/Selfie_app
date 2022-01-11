var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("text_area").innerHTML="";
  recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("text_area").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
      console.log("taking your selfie in 5 seconds");
      speak();
    }
    
}

function speak(){
  var speech=window.speechSynthesis;
  var text="taking your selfie in 5 seconds";
  var data=new SpeechSynthesisUtterance(text);
  speech.speak(data);
  Webcam.attach(camera);

  setTimeout(function() 
  { take_snapshot();
     save(); }, 5000);
};

Webcam.set({
  width:300,
  height:200,
  image_format:'png',
  png_quality:90
});
var camera=document.getElementById("camera");

function take_snapshot(){
  Webcam.snap(function(data_URL){
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_URL+'"/>';
  })
}

function save() {
   link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ; 
    link.href = image; 
    link.click();
};