$(document).ready ( function () {

  $(".input-container").click (() => {
    $target = $(".input-text");
    $(".close-logo").show();
    $target.width(162);
  });
  
  $(document).click((e) => {
    $contain = $(".input-text, .input-container, .search-logo");
    if(!$contain.is(e.target)) {
      $(".close-logo").hide(1);
      setTimeout("$target.width(63.63)", 10);
    }
  });

  $(".contain-pic, .story-text").click( () => {
    $("nav, .container").hide();
    $("section").show();
  });

  $(".p-close").click( () => {
    $("nav, .container").show();
    $("section").hide();
  });

  $("img").attr("draggable", "false");

});


