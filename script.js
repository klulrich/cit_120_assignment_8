var inputBox = document.body.querySelector(".text");
var messageBox = document.body.querySelector(".message");
var list = [];

document.body.querySelector(".submit").addEventListener("click", function(){
   messageBox.innerHTML="";
  if(inputBox.value == "coolStudent123"){
    list.push({
      name:inputBox.value,
    });
    renderList();
    makeText();
    makeButton();
  }else{
    messageBox.innerHTML="Incorrect. Try: coolStudent123";
  }
})
document.body.querySelector("BUTTON").addEventListener("click", function(){
    noteCheck();
})
function renderList(){
  document.body.querySelector(".list").innerHTML="";
  for(var i=0; i<list.length; i++){
    var itmEle = document.createElement("h3");
    itmEle.innerHTML="Name: "+list[i].name;
    document.body.querySelector(".list").innerHTML=(itmEle.innerHTML);
  }
}
function makeText(){
  var newBox = document.createElement("INPUT");
  newBox.setAttribute("type", "text");
  newBox.setAttribute("placeholder", "Make a note, fren.");
  document.body.appendChild(newBox);
}
function makeButton(){
  var noteSubmit = document.createElement("BUTTON");
  var buttonText = document.createTextNode("Check Note");
  noteSubmit.appendChild(buttonText);
  document.body.appendChild(noteSubmit);
}
function noteCheck(){
  if("INPUT".value=/^[0-9]+$/ && "INPUT".value.length>1){
    messageBox.innerHTML="Note taken!";
  }else{
    messageBox.innerHTML="Please use numbers only and type more than 1 character."
  }
}