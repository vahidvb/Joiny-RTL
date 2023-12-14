$(document).ready(function () {
    $('[data-bs-toggle=tooltip]').tooltip();

    // start close navbar
    $('.navbar-toggler').click(function () {
        $('.navbar-toggler i').toggleClass('d-none');
    })
    // end close navbar

    /* remove pre loading section */
    $('.preloader').delay(2000).fadeOut('slow');
    /* remove pre loading section */

    // start header & button-up show
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('header').addClass('sticky');
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
            $('header').removeClass('sticky');
        }
    });

    $(".btn-up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    // end header & button-up show

    // start collapse
    $('.hamburger').click(function () {
        $('.hamburger').addClass('h-active');
        $('.navbar-collapse').css('transform', 'translateX(0)');
        $('.hover-collapse').css('visibility', 'visible');
        $('.hamburger').css('z-index', '2');
    })

    $('.hover-collapse').click(function () {
        $('.hover-collapse').css('visibility', 'hidden');
        $('.navbar-collapse').css('transform', 'translateX(-200%)');
        $('.hamburger').removeClass('h-active');
        $('.hamburger').css('z-index', '3');
    })
    // end collapse

    // start counter
    $('.counter').waypoint(function () {
        $(".number-counter").each(function () {
            const options = {
                useEasing: true,
                useGrouping: false,
                separator: ',',
                decimal: '.',
            };
            const counter = new CountUp(this, 0, $(this).html(), 0, 9.5, options);
            if (!counter.error) {
                counter.start();
            }
        });
        this.destroy();
    }
        , {
            offset: '100%'
        });
    // end counter

    // start clients slider
    $('.clients-slider').owlCarousel({
        loop: false,
        rtl: true,
        margin: 15,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class=\"fas fa-chevron-right\"></i>", "<i class=\"fas fa-chevron-left\"></i>"],
        responsive: {
            0: {
                items: 1
            },

            992: {
                items: 2
            },

            1200: {
                items: 3
            }
        }
    });
    // end clients slider

    // start team slider
    $('.team-slider').owlCarousel({
        loop: false,
        rtl: true,
        margin: 15,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class=\"fas fa-chevron-right\"></i>", "<i class=\"fas fa-chevron-left\"></i>"],
        responsive: {
            0: {
                items: 1
            },

            576: {
                items: 2
            },

            1200: {
                items: 3
            }
        }
    });
    // end team slider

    // start brands slider
    $('.brands-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 15,
        autoWidth: false,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },

            576: {
                items: 3
            },

            768: {
                items: 4
            },

            1200: {
                items: 6
            }
        }
    });
    // end brands slider
})