$(document).ready(function(){
  $("img").click(function(){
    $(this).toggle();
    $(this).siblings("img").toggle();
  });
});
