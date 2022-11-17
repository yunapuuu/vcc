$(function(){
    $('.menu_button').on('click', function(){
        var btn = document.getElementsByClassName('btn');
        $(".menu_content").toggleClass('isActive');
    })
})

function scrollToTop(){
    scrollToTop(0,0);
}

$(function(){
    $(".menu-content a").on('click', function(){
        var elmHash = $(this).attr('href');
        var pos = $(elmHash).offset().top;
        $('body, html').animate({scrollToTop: pos},500);
        return false;
    })
})

