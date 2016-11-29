//Navigation bar
$(document).ready(function() {
    $('.material-button-toggle').click(function() {
        $(this).toggleClass('open');
        $('.option').toggleClass('scale-on');
    });
});

$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});


//Bootstrap Carousel controls
$(function(){
    $('.carousel.slide').carousel({
        interval: 10000,
        pause: "hover"
    });

    $('input').focus(function(){
       $("#myCarousel").carousel('pause');
    }).blur(function() {
       $("#myCarousel").carousel('cycle');
    });
});