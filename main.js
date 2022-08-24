var idk=window.webkitSpeechRecognition;
var cat=new idk();
function start(){
    console.log("hello");
    document.getElementById("voice").innerHTML="";
    cat.start();
    
}
cat.onresult=function(event){
    var content=event.results[0][0].transcript;
    document.getElementById("voice").innerHTML=content;
    if(content=="take my selfie"){
 speak();
 

}

}
function speak(){
    var river=window.speechSynthesis;
    speakdata="take my selfie in 5 seconds";
    var utter=new SpeechSynthesisUtterance(speakdata);
    river.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
snapshot();
save();
    },5000);
    

}
function save(){
    link=document.getElementById("picture");
    image=document.getElementById("li").src;
    link.href=image;
    link.click();
}
Webcam.set({
    width:320,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});
camera=document.getElementById("camera");
function snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='li' src='"+data_uri+"'>";
    });

}

