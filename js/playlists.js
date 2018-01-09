$(function(){
  //hide all playlists after page loads
  $(".playlist").hide();

  /*
   * Single function that detects any clicks on playlist synopses
   *
   */
  $(".button").click(function(){
    var playlist=$(this).find("iframe");
    playlist.toggle();
  });
});
