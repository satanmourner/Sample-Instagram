$(document).ready ( function () {

  $(".contain-pic, .story-text").click( () => {
    $(".container").hide();
    $("section").css({
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    });
  });

  $(".close-story").click( () => {
    $(".container").show();
    $("section").hide();
  });

  $("img").attr("draggable", "false");

  $(".more, .borderDown").click( () => {
    $(".more-section").fadeToggle(80);
    $(".story").css("filter", "blur(2.5px)");
  });
  $(document).click((e) => {
    $except = $(".more-section, .more");
    if($(".more.section") && !$except.is(e.target)) {
      $(".more-section").hide();
    }
  })

  var array = $(".contain-story");
  for( let i = 1, j= 90; i < array.length; i++, j+=90) {
    array[i].style.transform = "translateX(" + j + "px)";
  }

  // $(".arrow-story").click( () => {
  //   $(".body-story").css("transform3d", "skewZ(12deg)")
  // });


  // $(".arrow-story").click( () => {
  //   $(".body-story").css("transform", "rotateY(60deg");
  // })

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




