$(function () {
    if (/Mobi/.test(navigator.userAgent)) {
        $(".scrollUp").hide(0);
    }
    else{
        $(".scrollUp").hide(0);
        let trida = "text-warning";
        $(".scrollUp").on("mouseover", function () {
            $(this).addClass(trida);
        });
        $(".scrollUp").on("mouseleave", function () {
            $(this).removeClass(trida);
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $(".scrollUp").show(300);
            }
            else
                $(".scrollUp").hide(300);
        });
        $(".scrollUp").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, 800);
            return false;
        });
    }
});