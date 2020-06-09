    
$(document).ready(function(){
    
    //header gnb hover시 lnb show/hide
    $('.gnb').mouseover(function(){
            $(this).children('.lnb').show();
    })
    $('.gnb').mouseout(function(){
            $(this).children('.lnb').hide();
    })
    
    //nav_btn 클릭시 navigation show/ close 클릭시 hide
    $('.menunav').find('img').click(function(){
        $('.nav').animate({left:0});
    })
    $('.close_nav').find('a').click(function(){
        $('.nav').animate({left:'100%'});
    })
})