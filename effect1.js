$(window).on('load', function() {
    $('.loading').css('opacity', '0');
    $('.container').css('opacity', '1');
});

$(document).ready(function() {
    var vw = $(window).width() / 2;

    $(window).resize(function() {
        vw = $(window).width() / 2;
        positionBalloons(vw);
    });

    $('#turn_on').click(function() {
        $('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange')
            .addClass('bulb-glow-yellow bulb-glow-red bulb-glow-blue bulb-glow-green bulb-glow-pink bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').then(function() {
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function() {
        var audio = $('.song')[0];
        audio.play();
        glowBalloons();
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').then(function() {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function() {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').then(function() {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    $('#balloons_flying').click(function() {
        animateBalloons();
        $(this).fadeOut('slow').then(function() {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function() {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').then(function() {
            $('#light_candle').fadeIn('fast');
        });
    });

    $('#light_candle').click(function() {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').then(function() {
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function() {
        repositionBalloons(vw);
        showBalloonsText();
        $(this).fadeOut('slow').then(function() {
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function() {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').then(function() {
            $('.message').fadeIn('slow');
        });
        messageLoop(0);
    });

    function positionBalloons(vw) {
        $('#b1').animate({ top: 240, left: vw - 350 }, 500);
        // Add similar animation for the other balloons
    }

    function glowBalloons() {
        $('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange')
            .addClass('bulb-glow-yellow-after bulb-glow-red-after bulb-glow-blue-after bulb-glow-green-after bulb-glow-pink-after bulb-glow-orange-after');
    }

    function animateBalloons() {
        $('.balloon-border').animate({ top: -500 }, 8000);
        $('#b1, #b4, #b5, #b7, #b9').addClass('balloons-rotate-behaviour-one');
        $('#b2, #b3, #b6, #b8').addClass('balloons-rotate-behaviour-two');
        loopAnimation('#b1');
        // Add similar loop for other balloons
    }

    function loopAnimation(elementId) {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $(elementId).animate({ left: randleft, bottom: randtop }, 10000, function() {
            loopAnimation(elementId);
        });
    }

    function repositionBalloons(vw) {
        // Reposition balloons
    }

    function showBalloonsText() {
        $('.balloons h2').fadeIn(3000);
    }

    function messageLoop(i) {
        $("p:nth-child(" + i + ")").fadeOut('slow').then(function() {
            i = i + 1;
            $("p:nth-child(" + i + ")").fadeIn('slow').then(function() {
                if (i < 50) {
                    messageLoop(i);
                }
            });
        });
    }
});