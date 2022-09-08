$(function(){
  $('#three-lines').click(function(){  
    if ($('header').hasClass('open')){
      $('header').removeClass('open');
    }
    else{
    $('header').addClass('open');
    }
  });

  $("#mask, #hamburger a").click(function(){
    $('header').removeClass('open');
  });
  
  $('.pickup-slider').slick({
    centerMode: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerPadding: '100px',
    swipeToSlide: true,

    responsive: [
    
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        centerPadding: '50px'
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });


  $(window).scroll( function(){
    
    /* Check the location of each desired element */
    $('.feature-container img').each( function(){
        
        var center_of_object = $(this).offset().top + $(this).outerHeight()*0.7;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > center_of_object ){
            
            $(this).animate({
              'opacity':'1',
              top:0
            },1000);
                
        }
        
    }); 

  });


  $('a[href^="#"]').click(function(){
    // リンクを取得
    let href= $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top -50;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 800, "swing");
    return false;
  });

});