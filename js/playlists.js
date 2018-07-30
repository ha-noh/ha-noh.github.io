$(function(){
  /*
   * (1) inserts and shows playlist iframe on first click
   * (2) Finds the child of the button being clicked on and hides
   */

  $("#good4u").click(function(){
    var body = document.getElementById("good4u_body");
    if(body == null)
      $("#good4u").append('<iframe id="good4u_body" class="playlist" width="60%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/399940685&amp;color=%23a2eeef&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>');

    //how to prevent clicks while iframe is loading?
    else
      $("#good4u_body").toggle();
  });

  $("#spacedout").click(function(){
    var body= document.getElementById("spacedout_body");
    if(body == null)
      $("#spacedout").append('<iframe id="spacedout_body" class="playlist" width="60%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/399912305&amp;color=%23fca89f&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>');

    else
      $("#spacedout_body").toggle();
  });

  $("#dark").click(function(){
    var body= document.getElementById("dark_body");
    if(body == null)
      $("#dark").append('<iframe id="dark_body" class="playlist" width="60%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/399924764&amp;color=%23a2eeef&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>');
    else
      $("#dark_body").toggle();
  });

  $("#lofi").click(function(){
    var body= document.getElementById("lofi_body");
    if(body == null)
      $("#lofi").append('<iframe id="lofi_body" class="playlist" width="60%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/71313547&amp;color=%23fca89f&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>');
    else
      $("#lofi_body").toggle();
  });

  $("#edmpop").click(function(){
    var body= document.getElementById("edmpop_body");
    if(body == null)
      $("#edmpop").append('<iframe id="edmpop_body" class="playlist" width="60%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/399937715&amp;color=%23a2eeef&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>');
    else
      $("#edmpop_body").toggle();
  });

  $("#abstract").click(function(){
    var body= document.getElementById("abstract_body");
    if(body == null)
      $("#abstract").append('<iframe id="abstract_body" class="playlist" width="60%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/399939821&amp;color=%23fca89f&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>');
    else
      $("#abstract_body").toggle();
  });
  
  /* function template
  $("#beef").click(function(){
    var body= document.getElementById("beef_body");
    if(body == null)
    else
      $("#beef_body").toggle();
  });
  */
});
