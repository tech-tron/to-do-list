$(document).ready(function(){
  var userInput = document.getElementById('userInput');

  getQuote();

  var color = [
    "#700000",
    "#700000",
    "#FF9900",
    "#FFCC11",
    "#32CD32"
  ];

  var counter = 0;

  userInput.focus();
  userInput.onkeyup = function(event){
    if(event.which === 13){
      addListItem(userInput.value)
    };
  };

  setInterval(updateColor, 400);

  function updateColor() {
    styleElements(counter);
    nthRowUpdate(counter);
    counter++;
    if(counter < 2){
      document.getElementById('header').style.backgroundColor = "#fff";
    }else{
      document.getElementById('header').style.backgroundColor = "#111"
    }
    if(counter  == 5){
      counter = 0;
    };
  };
  function nthRowUpdate(counter){
    $("p").each(function(i){
      if (i % 2 == 1) {
        $(this).css("color", color[counter]);
      };
    });
  };

  function styleElements(counter){
    document.getElementById('quote').style.color = color[counter];
    document.getElementById('header').style.color = color[counter];
    document.getElementById('header').style.border = "1px "+color[counter]+" dashed";
    document.getElementById('title').style.border = "1px "+color[counter]+" solid";
    document.getElementById('list').style.borderRight = "1px "+color[counter]+" dashed";
    document.getElementById('list').style.borderLeft = "1px "+color[counter]+" dashed";
    document.getElementById('list').style.backgroundColor = color[counter];
    document.getElementById('battery').className = "fa fa-battery-"+counter+" fa-5x"
  };

  function addListItem(text){
    $('#list').append('<p id="listItem">'+text+'</p>')
    userInput.focus();
    userInput.select();
  };

  function getQuote(){
    //gonna get quote from un made json
    var jQuote = "When you want it more than you want to breath, you can do anything";
    //hover over: show author details
    var jAuthor
    $('#quote').text(jQuote);
  }

})
