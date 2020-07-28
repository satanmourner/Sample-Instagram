$(document).ready ( function () {

  $("img").attr("draggable", "false");

  var array = $(".contain-story");
  for( let i = 1, j= 90; i < array.length; i++, j+=90) {
    array[i].style.transform = "translateX(" + j + "px)";
  }

});


