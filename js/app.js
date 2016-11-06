$('.reset').on('click', function(){
    location.reload();
  });

$('.start').on('click', function(){
    $(".text-center").remove();
    $("body").css("animation-delay", "20s");
    $("body").css("background", "url('img/602.jpg')");
    $("body").css("background-size", "80%");
    //add the first car by appending a div with a image to the board
    $('<div/>', { id: 'car1', class: 'fade-in'}).appendTo('#board');
    $("#car1").append("<img id='player1' src='img/blue.png'/>");
    //add the second car
    $('<div/>', { id: 'car2', class: 'fade-in'}).appendTo('#board');
    $("#car2").append("<img id='player2' src='img/red.png'/>");

});

$(document).ready(function() {
//   // all code to manipulate the DOM
//   // goes inside this function

});
