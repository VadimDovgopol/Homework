$(document).ready(function () {

    let ua = navigator.userAgent.toLowerCase();
    let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    let trigger = false;
    let nightMode = localStorage.getItem('nightMode');
    let triggerForspecificationBtn = false;

    var fontSize = localStorage.getItem('font-size');

    if (isAndroid || iOS === true) {
        $("body").addClass("mobile")
    }
    if (nightMode === "true") {
        trigger = true;

    } else {
        trigger = false;
    }


    $(".email").on("click", function () {
        $(".input-item").addClass("active")
    })

    $('.section1 .content-wrapper').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",

        // autoplay: true,
        // autoplaySpeed: 2000,

    });
    $('.section6 .content-mob').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
    });
    $('.section8 .content-mob').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
    });
    $('.section10 .content-mob').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
    });

});
