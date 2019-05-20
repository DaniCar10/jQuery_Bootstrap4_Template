$(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css("background-color", "rgba(0 , 64, 123, 0.9)")
        } else {
            $('.navbar').css("background-color", "transparent")
        }
    });
