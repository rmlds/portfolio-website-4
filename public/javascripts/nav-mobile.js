$(document).ready(function () {
  let menu = $("#nav-menu");
  
  $("#nav-open").click(function() {
    menu.fadeIn();
  });

  $("#nav-close").click(function() {
    menu.fadeOut();
  });
});
