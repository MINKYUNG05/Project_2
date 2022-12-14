// mobile menu
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


// movement elements
$(function () {
    $('#global').click(function () {
        $('#box9 ul li').removeClass("active");
        $(this).addClass("active");

        $("#b91").fadeIn("slow");
        $("#b92").hide();
        $("#b93").hide();
        $("#b94").hide();

    });


    $('#internet').click(function () {
        $('#box9 ul li').removeClass("active");
        $(this).addClass("active");

        $("#b92").fadeIn("slow");
        $("#b91").hide();
        $("#b93").hide();
        $("#b94").hide();

    });

    $('#users').click(function () {
        $('#box9 ul li').removeClass("active");
        $(this).addClass("active");
        $("#b93").fadeIn("slow");
        $("#b91").hide();
        $("#b92").hide();
        $("#b94").hide();

    });

    $('#grammys').click(function () {
        $('#box9 ul li').removeClass("active");
        $(this).addClass("active");
        $("#b91").hide();
        $("#b92").hide();
        $("#b93").hide();
        $("#b94").fadeIn("slow");

    });
});

//*스크롤에 따 나타나는 요소 1슬라이더
$(document).ready(function () {
    $(window).scroll(function () {
        $('.mySwiper').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소 2슬라이더
$(document).ready(function () {
    $(window).scroll(function () {
        $('.swiper-wrapper').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소 3슬라이더
$(document).ready(function () {
    $(window).scroll(function () {
        $('#box4_slider').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소
$(document).ready(function () {
    $(window).scroll(function () {
        $('#box6_slider').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소
$(document).ready(function () {
    $(window).scroll(function () {
        $('#box5_title').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소
$(document).ready(function () {
    $(window).scroll(function () {
        $('#box7_title').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });
});

//*스크롤에 따 나타나는 요소
$(document).ready(function () {
    $(window).scroll(function () {
        $('#box8_tit').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소
$(document).ready(function () {
    $(window).scroll(function () {
        $('#box10tit').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });
});


//*스크롤에 따 나타나는 요소
$(document).ready(function () {
    $(window).scroll(function () {
        $('#box11tit').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        $('#footer3tit').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });
});


//팝업열기&닫기
$(function () {
    $('.popup-open').click(function () {
        $('#wrap').css('display', 'block', );
    });

    $('#popup-close').click(function () {
        $('#wrap').css('display', 'none');
    
    });
});


window.onload = function(){
    
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints : {
        600: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 4,
        },
    }
});

    var swiper2 = new Swiper(".mySwipermulti", {
    slidesPerView: 1,
    spaceBetween: 10,
    // loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints : {
        550: {
            slidesPerView: 2,
        },
        863: {
            slidesPerView: 3,
        },
        1299: {
            slidesPerView: 4,
        },
        1330: {
            slidesPerView: 5,
        },
    }
});
}
    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
      
    //     loop: true,
        
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    // });
    
    //     var swiper2 = new Swiper(".mySwipermulti", {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     loop: true,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    // });


