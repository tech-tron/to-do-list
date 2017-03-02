//add quote
$(document).ready(function(){
  var userInput = document.getElementById('userInput');

  getQuote();
  var idHolder = 0;
  userInput.focus()

  userInput.onkeyup = function(event){
    if(event.which === 13){
      addListItem(userInput.value)
    }
  }



  function addListItem(text){
    idHolder++;
    $('#list').append('<p id="'+idHolder+'">'+text+'</p>')
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
})
