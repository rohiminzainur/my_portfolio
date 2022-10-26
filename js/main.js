jQuery(document).ready(function () {
    // -------------------------------------------------------------------------------
    // Custom Functions
    // -------------------------------------------------------------------------------

    // Logo
    var $logo = $('#logo');

    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }
    // Show Logo
    $('.menu .tabs a').click(function () {
        $logo.fadeIn('slow');
    });
    // Hide Logo
    $('.tab-profile').click(function () {
        $logo.fadeOut('slow');
    });


    $('#yellow-color').click(function (e) {
        $(".main-wrapper-resume").attr("id", "yellow");
    });

    $('#red-color').click(function (e) {
        $(".main-wrapper-resume").attr("id", "red");
    });

    $('#blue-color').click(function (e) {
        $(".main-wrapper-resume").attr("id", "blue");
    });

    $('#green-color').click(function (e) {
        $(".main-wrapper-resume").attr("id", "green");
    });



    $("#setting-icon").click(function () {
        $(".color-box").toggleClass("main");
    });


    $(document).ready(function () {
        $(".socials-text").click(function () {
            $(".socialicons").toggleClass("main");
        });
    });

    var $catsfilter = $('.cats-filter');
    $catsfilter.find('a').click(function () {
        var currentOption = $(this).attr('data-filter');
        $(this).parent().parent().find('a').removeClass('current');
        $(this).addClass('current');
    });


    var $plist = $('#portfolio-list');
    var $pfilter = $('#portfolio-filter');

    $plist.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    $pfilter.find('a').click(function () {
        var selector = $(this).attr('data-filter');

        $plist.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });


    // --------------------------------------------------------------------------------
    // Menu
    // --------------------------------------------------------------------------------

    // Needed Variables

    var $content = $("#content");

    // Run easytabs
    $content.easytabs({
        animate: true,
        updateHash: false,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 600,
        tabs: ".tmenu",
        tabActiveClass: 'active',
    });

    // Hover Menu Effect
    $content.find('.tabs li a').hover(
        function () {
            $(this).stop().animate({
                marginTop: "-7px"
            }, 200);
        },
        function () {
            $(this).stop().animate({
                marginTop: "0px"
            }, 300);
        }
    );
});