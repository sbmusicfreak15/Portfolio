!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.6983304, lng: -121.9620175},
    zoom: 10
  });
  var marker = new google.maps.Marker({
    position: {lat: 37.6983304, lng: -121.9620175},
    map: map,
    title: 'Im Local!',
    animation: google.maps.Animation.BOUNCE
  });
  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  marker.addListener('click', function() {
    map.setZoom(16);
    map.setCenter(marker.getPosition());
  });
}

//loading the DOM

$(document).ready(function(){
  $("#message-box").css("border", "2px solid #654a4e");
  $("#button").on("click", function(){
    var comment3 = $("#message-box").val();
    var comment = $("#name").val();
    var comment2 = $("#email").val();
    console.log(comment);
    $("#visible-comment1").html(comment);
    $("#visible-comment2").html(comment2);
    $("#visible-comment3").html("Thanks for submitting! You will recieve a response within 24 hours");
    $("#message-box").hide();
    return false;
  });
  $("#message-box").on("keyup", function(){
      console.log("keyup happened");
      var charCount = $("#message-box").val().length;
      console.log(charCount);
      $("#char-count").html(charCount);
      if (charCount > 50) {
        $("#char-count").css("color","red");
      } else {
        $("#char-count").css("color","black");
      };
  });
  //exercise 2.9
  for( var i = 0; i < works.length; ++i ){
    $("#work").append("\
      <div class='col-sm-3 col-md-3'>\
        <a href=' + works[i].url + ' class='work-img'>\
          <img class='img-responsive' src='" + works[i].pic + "'>\
          <span class='info'><p class='proj-title'>Title:</p> '" + works[i].title + "' </span>\
        </a>\
      </div>\
    ");
    var images = $("#work img")
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
  };
  $(".work-img").mouseenter(function(){
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });

  // Tooltip
  $(function () {
      $('#item1').tooltip();
    });
});
