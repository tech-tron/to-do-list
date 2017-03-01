//add quote
$(document).ready(function(){
  getQuote();
})

function getQuote(){
  //gonna get quote from un made json
  var jQuote = "When you want it more than you want to breath, you can do anything";
  //hover over: show author details
  var jAuthor
  $('#quote').text(jQuote);
}
