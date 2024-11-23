$('.menu > li').mouseenter(function(){
    $('.sub').stop().slideDown()
})
$('.menu > li').mouseleave(function(){
    $('.sub').stop().slideUp()
})