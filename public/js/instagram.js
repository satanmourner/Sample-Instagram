$(document).ready ( function () {

  $(".input-container").click (() => {
    $target = $(".input-text");

    $(".close-logo").show();
    $target.width(162);
  });
  
  $(".close-logo").click( () => {
    $(".close-logo").hide(1);
    setTimeout("$target.width(62)", 10);
  });

});


