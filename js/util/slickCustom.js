$('#cards').slick({
    // dots: true,
    infinite: true,
<<<<<<< HEAD
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
=======
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
>>>>>>> aefdad78ac551e21415135d71086c18b335b6677
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    pauseOnHover: false,
    swipeToSlide: true,
    arrows: true,
    accessibility: true,
    swipe: true,
    touchMove: true,
    rows: 2,
    adaptiveHeight: true,
    appendArrows: $('#Band'),
    responsive: [
        {
            breakpoint: 1360,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});