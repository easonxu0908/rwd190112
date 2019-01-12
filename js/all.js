$(document).ready(function () {
  $('.showmenu').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-show');
  });

  $('.jq_feature').click(function (event) {
    event.preventDefault();
    x = $("#description_head").position();
    $('html,body').animate({
      scrollTop: x.top
    }, 500);
  });

  $('.jq_main').click(function (event) {
    event.preventDefault();
    x = $("#today_chef").position();
    $('html,body').animate({
      scrollTop: x.top
    }, 1000);
  });

  $('.jq_map').click(function (event) {
    event.preventDefault();
    x = $("#reserve").position();
    $('html,body').animate({
      scrollTop: x.top
    }, 1000);
  });

  $(window).resize(function () {
    wdth = $(window).width();
    if (wdth < 500) {
      $('.line').hide();
    } else if (wdth >= 500) {
      $('.line').show();
    }
  });

});