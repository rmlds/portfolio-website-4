$(document).ready(function () {
  let menu = $("#nav-menu");

  $("a[href='#home']").click(function(event) {
    event.preventDefault();
    smoothScroll("#home");
  });

  $("a[href='#about']").click(function(event) {
    event.preventDefault();
    smoothScroll("#about");
  });

  $("a[href='#contact']").click(function(event) {
    event.preventDefault();
    smoothScroll("#contact");
  });

  $("a[href='#home-mobile']").click(function(event) {
    event.preventDefault();
    menu.fadeOut(300, function() { smoothScroll("#home") });
  });

  $("a[href='#about-mobile']").click(function(event) {
    event.preventDefault();
    menu.fadeOut(300, function() { smoothScroll("#about") });
  });

  $("a[href='#contact-mobile']").click(function(event) {
    event.preventDefault();
    menu.fadeOut(300, function() { smoothScroll("#contact") });
  });

});

let smoothScroll = (element) => {
  $('html, body').animate({
    scrollTop: $(element).offset().top
  }, 1000);
}
