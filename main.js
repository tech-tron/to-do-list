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
  setInterval(getQuote, 10000);

  function updateColor() {
    styleElements(counter);
    counter++;
    if(counter < 2){
      document.getElementById('battery').style.backgroundColor = "#fff";

    }else{
      document.getElementById('battery').style.backgroundColor = "#111"
    }
    if(counter  == 5){
      counter = 0;
    };
  };

  function styleElements(counter){
    document.getElementById('header').style.color = color[counter];
    document.getElementById('header').style.border = "1px "+color[counter]+" dashed";
    document.getElementById('title').style.border = "1px "+color[counter]+" solid";
    document.getElementById('list').style.borderRight = "1px "+color[counter]+" dashed";
    document.getElementById('list').style.borderLeft = "1px "+color[counter]+" dashed";
    document.getElementById('list').style.color = color[counter];
    $('p').css("border-top", "2px "+color[counter]+" solid");
    document.getElementById('battery').className = "fa fa-battery-"+counter+" fa-5x"
    $('body').css("background-color", color[counter]);
    //document.getElementById('quote').style.color = color[counter];
  };

  function addListItem(text){
    var listItem = $('#list').append('<p id="listItem">'+text+'</p>');
    $('p').click(function(event){
      this.remove();
      userInput.focus();
      userInput.select();
    });
    userInput.focus();
    userInput.select();
  };

  function getQuote(){
    //add math.random of jQoute.length
    $.getJSON("quote.json", function(data){
      var current =
        Math.round(Math.random() * data.quote.content.length);
        console.log(current);
      var jQuote = data.quote.content[current];
      var jAuthor = data.quote.author[current];
      var jType = data.quote.type[current];

      $('#quote').text(jQuote);

    });
  }

})
