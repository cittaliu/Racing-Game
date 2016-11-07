
// $('.start').on('click', function(){
//     $(".text-center").remove();
//     $("body").css("animation-delay", "20s");
//     $("body").css("background", "url('img/602.jpg')");
//     $("body").css("background-size", "80%");
//
//     $('<div/>', { id: 'board1', class: 'col-md-12 fade-in'}).appendTo('#game');
//     $('<div/>', { id: 'board2', class: 'col-md-12 fade-in'}).appendTo('#game');
//     //add the first car by appending a div with a image to the board
//     $('<div/>', { id: 'car1', class: 'fade-in'}).appendTo('#board1');
//     $('<div/>', { id: 'pole1', class: 'pole'}).appendTo('#board1');
//     $('<div/>', { id: 'pole2', class: 'pole'}).appendTo('#board1');
//     $("#car1").append("<img id='player1' src='img/blue.png'/>");
//     //add the second car
//     $('<div/>', { id: 'car2', class: 'fade-in'}).appendTo('#board2');
//     $('<div/>', { id: 'pole3', class: 'pole'}).appendTo('#board2');
//     $('<div/>', { id: 'pole4', class: 'pole'}).appendTo('#board2');
//     $("#car2").append("<img id='player2' src='img/red.png'/>");
//     // var left = parseInt($(".pole").css("left"), 10);
//     // console.log(left);
// });




function Player(id, keycode, position, carColor){
  this.id = id;
  this.keycode = keycode;
  this.position = position;
  this.carColor = carColor;
}

function startGame(){
  var playerList = [];
  var player1 = new Player('CAR 1', 0, 'blue');
  var player2 = new Player('CAR 2', 0, 'red');
  var count1 = 0;
  var count2 = 0;
  playerList.push(player1);
  playerList.push(player2);

  function isWin(e){
    alert(e.id + " wins!");
    location.reload();

  }

  $(document).keydown(function(e){
      //e.preventDefault();
      var position1 =$('#car1').position();
      var position2 =$('#car2').position();

      if(count1 >= 59){
        isWin(player1);
      }else if(count2 >= 59){
        isWin(player2);
      }else{

      switch (e.keyCode){
        case 37:    //car1 move left
            if(position1.left>0){
              $("#car1").css('left', position1.left - 20 +'px');
              count1--;
            }
            break;
        case 38:    //car1 move up
            $("#car1").css('top', position1.top - 20 +'px');
            break;
        case 39:    //car1 move right
            $("#car1").css('left', position1.left + 20 +'px');
            count1++;
            break;
        case 40:    //car1 move down
            if(position1.top<0){
              $("#car1").css('top', position1.top + 20 +'px');
            }
            break;
        case 65:    //car2 move left "character: a"
            if(position2.left>0){
              $("#car2").css('left', position2.left - 20 +'px');
              count2--;
            }
            break;
        case 87:    //car2 move up "character: w"
            $("#car2").css('top', position2.top - 20 +'px');
            break;
        case 68:    //car2 move right "character: d"
            $("#car2").css('left', position2.left + 20 +'px');
            count2++;
            break;
        case 88:    //car2 move down "character: z"
            if(position2.top<0){
              $("#car2").css('top', position2.top + 20 +'px');
            }
            break;
          }
      }

  });



}
$(document).ready(function() {
//   // all code to manipulate the DOM
//   // goes inside this function
  //startGame();
  //var left;
  $('.start').on('click', function(){
      $(".text-center").remove();
      $("body").css("animation-delay", "20s");
      $("body").css("background", "url('img/602.jpg')");
      $("body").css("background-size", "80%");

    //  $('<div/>', { id: 'board1', class: 'col-md-12 fade-in'}).appendTo('#game');
    //  $('<div/>', { id: 'board2', class: 'col-md-12 fade-in'}).appendTo('#game');
      //add the first car by appending a div with a image to the board
      $('<div/>', { id: 'car1', class: 'fade-in'}).appendTo('#board');
      // $('<div/>', { id: 'pole1', class: 'pole'}).appendTo('#board1');
      // $('<div/>', { id: 'pole2', class: 'pole'}).appendTo('#board1');
      $("#car1").append("<img id='player1' src='img/blue.png'/>");
      //add the second car
      $('<div/>', { id: 'car2', class: 'fade-in'}).appendTo('#board');
      // $('<div/>', { id: 'pole3', class: 'pole'}).appendTo('#board2');
      // $('<div/>', { id: 'pole4', class: 'pole'}).appendTo('#board2');
      $("#car2").append("<img id='player2' src='img/red.png'/>");
      // left = parseInt($(".pole").css("left"), 10);
      // console.log(left);
  });
    // var left = parseInt($(".pole").css("left"), 10);
  startGame();


  // var board1= $('#board1');
  // var car1 = $('#car1');
  // var pole = $('.pole');
  // var pole1 = $('#pole1');
  // var pole2 = $('#pole2');



  // var boardWidth = parseInt(board1.width().replace(/[^-d.]/g, ''));
  // var boardHeight = parseInt(board1.height().replace(/[^-d.]/g, ''));
  // var poleInitialPosition = parseInt(pole.css('left').replace(/[^-d.]/g, ''));
  // var poleInitialHeight = parseInt(pole.css('height').replace(/[^-d.]/g, ''));
  // var car1_left = parseInt(car1.css('left'));
  // var car1_height = parseInt(car1.css('height'));
  //
  // var the_game = setInterval(function(){
  //   var poleCurrentPosition = parseInt(pole.css('left').replace(/[^-d.]/g, ''));
  //   pole.css('left', poleCurrentPosition - 5 + 'px');
  // }, 40);


//

});
