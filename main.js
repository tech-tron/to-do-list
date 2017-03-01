//add quote
$(document).ready(function(){
  getQuote();
  alert("document is ready");
})

function getQuote(){
  //gonna get quote from un made json
  var jQuote = "When you want it more than you want to breath, you can do anything";
  var jAuthor = "unknown";
  $('#quote').text(jQuote+" ~"+jAuthor);
}
