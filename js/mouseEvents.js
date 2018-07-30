$(function(){
  var highlightedTag=null;
  //whether or not highlightedUL is null determines whether the highlighted item is a heading or a list item
  var highlightedUL=null;

  //mouseover checks for category headers
  $("#softwareheader").mouseover(function(){
    revertHighlight("#softwareheader");
    highlightOnMouseover("./images/coverimages/software.jpg","#softwareheader","#softwareUL");
  });
  $("#musicheader").mouseover(function(){
    revertHighlight("#musicheader");
    highlightOnMouseover("./images/coverimages/music.jpg","#musicheader", "#musicUL");
  });
  $("#designheader").mouseover(function(){
    revertHighlight("#designheader");
    highlightOnMouseover("./images/coverimages/soon.jpg","#designheader","#designUL");
  });
  $("#photoheader").mouseover(function(){
    revertHighlight("#photoheader");
    highlightOnMouseover("./images/coverimages/generic.jpg","#photoheader","#photoUL");
  });
  $("#essayheader").mouseover(function(){
    revertHighlight("#essayheader");
    highlightOnMouseover("./images/coverimages/analysis.jpg","#essayheader","#essayUL");
  });

  /*
   * mouseover checks for list items
   * png over jpeg to preserve transparency
   */

  $("#freeweight").mouseover(function(){
    revertHighlight("#freeweight");
    highlightOnMouseover("./images/coverimages/soon.jpg","#freeweight",null);
  });

  $("#hanoh").mouseover(function(){
    revertHighlight("#hanoh");
    highlightOnMouseover("./images/coverimages/generic.jpg","#hanoh", null);
  });

  $("#aacc").mouseover(function(){
    revertHighlight("#aacc");
    highlightOnMouseover("./images/coverimages/aacc.jpg","#aacc",null);
  });

  $("#skphoto").mouseover(function(){
    revertHighlight("#skphoto");
    highlightOnMouseover("./images/coverimages/skphoto.jpg","#skphoto", null);
  });

  $("#identitymusicessay").mouseover(function(){
    revertHighlight("#identitymusicessay");
    highlightOnMouseover("./images/coverimages/essay.jpg","#identitymusicessay", null);
  });

  $("#originalmusic").mouseover(function(){
    revertHighlight("#originalmusic");
    highlightOnMouseover("./images/coverimages/season1.jpg","#originalmusic",null);
  });

  $("#playlists").mouseover(function(){
    revertHighlight("#playlists");
    highlightOnMouseover("./images/coverimages/generic.jpg","#playlists",null);
  });

  $("#twitch").mouseover(function(){
    revertHighlight("#twitch");
    highlightOnMouseover("./images/coverimages/twitch.jpg","#twitch",null);
  });

  $("#aaslcproject").mouseover(function(){
    revertHighlight("#aaslcproject");
    highlightOnMouseover("./images/coverimages/aaslc.jpg","#aaslcproject",null);
  });

  $("#drakextobyfox").mouseover(function(){
    revertHighlight("#drakextobyfox");
    highlightOnMouseover("./images/coverimages/drakextobyfox.jpg","#drakextobyfox",null);
  });

  $("#artwork").mouseover(function(){
    revertHighlight("#artwork");
    highlightOnMouseover("./images/coverimages/artwork.jpg","#artwork",null);
  });

  //convenience function for resetting highlighted item
  function revertHighlight(currtag){
    //not the first mouseover and previous mouseover wasn't this item
    if(highlightedTag == null || highlightedTag == currtag){
      return;
    }
    //prev highlighted item was a header
    else if(highlightedUL != null){
      $(highlightedTag).attr("style","background-color:#fca89f;");
      $(highlightedUL).attr("style","border-bottom:solid 3px #fca89f;");
    }
    //otherwise the prev highlighted item was a list item
    else{
      $(highlightedTag).attr("style","color:#fca89f;");
    }
  }

  //convenience function for highlighting headers on mouseover
  function highlightOnMouseover(imgsrc, currtag, ulname){
    $("#rightimg").attr("src", imgsrc);
    if(ulname != null){
      $(currtag).attr("style","background-color:#a2eeef;");
      $(ulname).attr("style","border-bottom:solid 3px #a2eeef;");
      highlightedUL=ulname;
      highlightedTag=currtag;
    }
    else{
      $(currtag).attr("style","color:#a2eeef;");
      highlightedTag=currtag;
      highlightedUL=null;
    }
  }
});
