 
var SpeechRecognition = window.webkitSpeechRecognition;
  
var my_agent = new SpeechRecognition();

 function my_start(){

    document.getElementById("text").value = "";

    my_agent.start();
 }

 my_agent.onresult = function (event){
   console.log(event);
   document.getElementById("text").value = event.results[0][0].transcript;

   my_speak();

 }

 function my_speak(){

   var my_synth  = window.speechSynthesis;

   speak_data = document.getElementById("text").value;

 Utter_data = new SpeechSythesisUtterance(speak_data);

   my_synth.speak(Utter_data);


 }