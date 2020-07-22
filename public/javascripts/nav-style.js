$(document).ready(function () {
  let landing = $('.landing-showcase')
  let landingHeight = landing.outerHeight() + 50;

  let nav = $('.navbar').first();

  let navClone = nav.clone(true).addClass('fixed-top').css('transform', 'translateY(-100%)');
  navClone.appendTo('body');

  $(document).scroll(function () {
    navClone.toggleClass('scrolled', $(document).scrollTop() > landingHeight);
  });

});
