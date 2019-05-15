$(document).ready(function () {
  $('body').children().mouseover(function(e){
    $(".highlighted").removeClass("highlighted")
    $(e.target).addClass("highlighted");
  }).mouseout(function(e) {
    $(this).removeClass("highlighted")
  })
})
