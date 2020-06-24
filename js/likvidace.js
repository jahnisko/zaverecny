$(function () {
    $("#zmena").on("click", () => {
        zmenaBarvy();
        blikajiciNavbar();
        $(".jop").text("Klikněte na německou vlajku");
        $(".vlajka").on("click", () => {
            $(".vlajka").attr("src", "./img/angela.jpg");
            $(".jop").text("Přejeďte myšítkem na kancléřku :))");
            $(".vlajka").mouseover(function () {
                $(".vlajka").attr("src", "./img/vw.jpg");
                $(".jop").text("Hle, Volkswagen (das Auto).")
                $(".vlajka").css({"border-radius": "50%"});
            });
        })
    });
})
function zmenaBarvy() {
    $("header").slideUp("slow");
    $(".progress-bar").fadeOut(1000);
    $(".progress-bar").fadeIn(1000);
    magie();
    setTimeout(zmenaBarvy, 1000);
    $("header").slideDown("slow");
}
function blikajiciNavbar() {
    $(".nvbr").toggleClass("navbar-dark bg-danger");
    $(".nvbr").hide(3000);
    $(".nvbr").show(1000);
    setTimeout(blikajiciNavbar, 1000);
}
function magie() {
    $(".gr").toggleClass("bg-dark", 3000);
    $(".blok").hide(3000);
    $('.gr').toggle({ direction: "left" }, 3000);
    $(".blok").show(3000);
    $('.gr').animate({ width: 'toggle' }, 3000);
}

