$(window).on('scroll', scrollHandler);

function scrollHandler() {
    var windowScroll = $(window).scrollTop();
    var aboutHeight = $('.about').height();
    
    if(windowScroll >= aboutHeight) {
        $("#about-btn").css('color', '#4A4A4A');
        $('#contact-btn').css('color', '#4A4A4A');
    }else {
        $("#about-btn").css('color', 'white');
        $('#contact-btn').css('color', 'white');
    }
    
    var headerPosition = $('.header').offset().top;
    var aboutPosition = $('.about').offset().top;
    var contactPosition = $('.contact').offset().top;
    if(windowScroll >= headerPosition) {
        $('.header .vertical-center').animate(
            {opacity: '1', top: '0px'}, 1000
        );
    }
    
    if(windowScroll >= aboutPosition) {
        $('.about .vertical-center').animate(
            {opacity: '1', top: '0px'}, 1000
        );
        
        $('.skill').each(function() {
            var skill = $(this);
            
            var percentage = skill.find('.percentage').text();
            skill.find('.inner-bar').animate({
                'width': percentage
            },1000);
        });
    }
    
    if(windowScroll >= contactPosition) {
        $('.contact .vertical-center').animate(
            {opacity: '1', top: '0px'}, 1000
        );
    }
}

$('#about-btn').click(function() {
    var aboutPosition = $('.about').offset().top;
    $('html, body').animate({scrollTop: aboutPosition}, 1000);
});

$('#contact-btn').click(function() {
    var contactPosition = $('.contact').offset().top;
    $('html, body').animate({scrollTop: contactPosition}, 1000);
});

scrollHandler();