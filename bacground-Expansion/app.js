// document.addEventListener("DOMContentLoaded", function () {
//     const headerImg = document.querySelector("#header__img");

//     window.addEventListener("scroll", function () {
//         let scrollTop = window.scrollY || document.documentElement.scrollTop;
//         let scaleValue = (100 + scrollTop / 10) / 100;

//         headerImg.style.transform = `scale(${scaleValue})`;
//         headerImg.style.top = `-(${scrollTop} / 50)%`
//     });
// });

//jQuery
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    $("#header__img").css({
        transform: "scale(" + (100 + scroll / 10) / 100 + ")",
        top: -(scroll / 50) + "%",
    });
});
