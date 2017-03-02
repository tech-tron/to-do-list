//add quote
$(document).ready(function(){
  var userInput = document.getElementById('userInput');
  var listItem = document.createElement('li')

  getQuote();
  count = 0;
  userInput.focus()

  userInput.onkeyup = function(event){
    if(event.which === 13){
      addListItem(userInput.value)
    }
  }

})

function addListItem(text){
  $('#list').append('<li id="'+count+'">'+text+'</li>')
  userInput.focus();
  userInput.select();
}

function getQuote(){
  //gonna get quote from un made json
  var jQuote = "When you want it more than you want to breath, you can do anything";
  //hover over: show author details
  var jAuthor
  $('#quote').text(jQuote);
}
