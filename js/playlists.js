$(function(){

  //hide all playlists after page loads
  $("iframe").each(function(){
    this.onload = function(){
      $(this).hide();
    };
  });

  /*
   * Single function that detects any clicks on playlist synopses
   * Finds the child of the button being clicked on.
   */
  $(".button").click(function(){
    var playlist=$(this).siblings("iframe");
    playlist.toggle();
  });
});
