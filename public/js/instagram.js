$(document).ready ( function () {

  $("img").attr("draggable", "false");

  var array = $(".contain-story");
  for( let i = 1, j= 90; i < array.length; i++, j+=90) {
    array[i].style.transform = "translateX(" + j + "px)";
  }
  
  $(".message-container").click( function() {
    $(this).css("width", "90%");
    $(".message > i").hide();
    $(".react-emojies").css({
      "display": "flex",
      "flex-direction": "column"
    });
    $(".story").css("filter", "blur(2.5px)");
  });

  $(document).click((e) => {
    $except = $(".message-container, .input-message");
    if(!$except.is(e.target)) {
      $(".message-container").css("width", "80%");
      $(".message > i").show();
      $(".react-emojies").hide();
      $(".story").css("filter", "blur(0)");
    }
  });

});

function resizeText(text) {
  
  (text.value) ? $(".message-container > input").show() && $(".react-emojies").hide() 
  : $(".message-container > input").hide() && $(".react-emojies").css({"display": "flex",
  "flex-direction": "column"});
}




