$(document).ready(function() {
  $('.fullpage').fullpage({
    scrollingSpeed: 1000,
    sectionSelector: '.fullpage-item',
    scrollOverflow: true,
    responsiveHeight: 360,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
    menu: '.menu',
    afterRender: function(){
      $('.projects__last').html($('.projects__wrap').length);
    },
    afterSlideLoad: function (section, origin, destination) {
      $('.projects__first').html(++destination.index);
    }
  });

  $(document).on('click', '.scroll-down', function(){
    fullpage_api.moveSectionDown();
  });

  $(document).on('click', '.fixed__hamburger', openMenu);
  $(document).on('click', '.main-menu__close', closeMenu);
  $(document).on('.calc__range input', '.calc', changeInput);
  $(document).on('click', '.projects__mini a', changeImg);

  function openMenu(event) {
    $('.main-menu').addClass('main-menu--active');
  }

  function closeMenu(event) {
    $('.main-menu').removeClass('main-menu--active');
  }

  function changeInput(event) {
    $(this).find('.calc__range output').val($(this).find('.calc__range input').val());
  }

  function changeImg(event) {
    event.preventDefault();
    $('.projects__big img').attr('src', $(this).attr('data-src'));
  }

});
