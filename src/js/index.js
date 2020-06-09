
//main slide banner
$(".banner").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});


//main newmenu slide
$(".nmimg").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});


$(document).ready(function(){
    
    //main fadein 효과
    $(window).scroll( function(){
        $('.fadein1').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','padding-top':'0px'},1000);
            }
        });
        $('.fadein2').each( function(i){

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element/1.2 ){
                $(this).animate({'opacity':'1','padding-top':'0px'},1000);
            }        
        });
    });
    
})