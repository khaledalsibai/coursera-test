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


//Bootstrap Carousel
$(function() {
    $('#madinah-carousel').carousel();
});()
