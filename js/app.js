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

function Player(id, keycode, position, carColor){
  this.id = id;
  this.keycode = keycode;
  this.position = position;
  this.carColor = carColor;
}


function startGame(){
  var playerList = [];
  var player1 = new Player('car1', 0, 'blue');
  var player2 = new Player('car2', 0, 'red');
  playerList.push(player1);
  playerList.push(player2);


  $(document).keydown(function(e){
      e.preventDefault();
      var position1 =$('#car1').position();
      var position2 =$('#car2').position();

      switch (e.keyCode){
        case 37:    //car1 move left
            if(position1.left>0){
              $("#car1").css('left', position1.left - 20 +'px');
            }
            break;
        case 38:    //car1 move up
            $("#car1").css('top', position1.top - 20 +'px');
            break;
        case 39:    //car1 move right
            $("#car1").css('left', position1.left + 20 +'px');
            break;
        case 40:    //car1 move down
            if(position1.top<0){
              $("#car1").css('top', position1.top + 20 +'px');
            }
            break;
        case 65:    //car1 move left "character: a"
            if(position2.left>0){
              $("#car2").css('left', position2.left - 20 +'px');
            }
            break;
        case 87:    //car2 move up "character: w"
            $("#car2").css('top', position2.top - 20 +'px');
            break;
        case 68:    //car2 move right "character: d"
            $("#car2").css('left', position2.left + 20 +'px');
            break;
        case 88:    //car2 move down "character: z"
            if(position2.top<0){
              $("#car2").css('top', position2.top + 20 +'px');
            }
            break;
      }
  });



}
$(document).ready(function() {
//   // all code to manipulate the DOM
//   // goes inside this function
  startGame();

//

});
