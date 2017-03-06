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
    document.getElementById('quote').style.color = color[counter];
    document.getElementById('header').style.color = color[counter];
    document.getElementById('header').style.border = "1px "+color[counter]+" dashed";
    document.getElementById('title').style.border = "1px "+color[counter]+" solid";
    document.getElementById('list').style.borderRight = "1px "+color[counter]+" dashed";
    document.getElementById('list').style.borderLeft = "1px "+color[counter]+" dashed";
    document.getElementById('list').style.color = color[counter];
    $('p').css("border-top", "2px "+color[counter]+" solid");

    document.getElementById('battery').className = "fa fa-battery-"+counter+" fa-5x"
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
    console.log("ready");
    $.getJSON("quote.json", function(data){
      console.log(data);
      var jQuote = data.quote.content[0];
      var jAuthor = data.quote.author[0];
      var jType = data.quote.type[0];
      $('#quote').text(jQuote);
    });
  }

})
