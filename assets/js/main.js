const visualSlide = new Swiper('.visual-slide',{
  loop: true,
  speed : 1000,
  autoplay: {
    delay: 3000,
  },
  pagination:{
    el:".pagination",
    clickable: true,
  },
 })

 const rollSlide = new Swiper('.roll-slide',{
  slidesPerView:'auto',
  spaceBetween:20,
  freeMode:true,
  loop: true,
  speed : 5000,
  autoplay: {
    delay: 0,
  },
 })







$("#gnb .has-child").hover(function(){
  $('#header').css('--height',"64px");
  $(this).find('.depth2').addClass('on');
  $(this).find('.depth2-item').css({ opacity: 1 });

},function(){
  $('#header').css('--height',0);
  $(this).find('.depth2').removeClass('on')
}) 



$('#gnb .has-child').mouseleave(function(){
  $('#gnb .depth2-item').removeClass('active');
  $('#gnb .depth2-item:first-child').addClass('active');
})



$("#gnb .depth2-item").hover(function(){
    $('#gnb .depth2-item').removeClass('active');
    $(this).addClass('active');
 
})


/**
 * 
 * 사이드메뉴
 * 
 */

$('.btn-menu, .btn-close').click(function(){
  $('.side-nav').toggleClass('on');
  $('body').toggleClass('hidden');
  $('.side-nav .depth2').hide();
  $('.btn-arrow').removeClass('active');
});

$('.side-nav .has-child .btn-arrow').click(function () {
  $(this).toggleClass('active').closest('.depth1-item').find('.depth2').slideToggle();
});



let lastScroll = 0;
$(window).scroll(function(){
  curr = $(this).scrollTop();

  if (curr > lastScroll) {
    $('#header').addClass('hide');
  } else {
    $('#header').removeClass('hide');
  }
  lastScroll = curr;
})





$('.language-wrap .link').click(function(){
  $(this).toggleClass('active').siblings('.link').removeClass('active');
})

$('#footer .btn-site').click(function(){
  $(this).toggleClass('active').siblings('.site-list').stop().slideToggle();

  const expanded = $(this).hasClass('active');
  $(this).attr('aria-expanded', expanded ? 'true' : 'false');
})


$('.btn-control').on('click', function () {

  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('#introVideo').get(0).currentTime=0;
    $('#introVideo').get(0).play()
  } else {
    $(this).addClass('active');
    $('#introVideo').get(0).pause();
  }

});


