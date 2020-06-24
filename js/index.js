$(function () {
    const cas = 900; //Čas, po který pojede animace
    //Zde pomocí tzv. agenta detekujeme, zdali se stránka prohlíží na mobilním zařízení
    if (/Mobi/.test(navigator.userAgent)) {
        //Pokud ano, dojde ke skrytí scrollovací šipky - nejde na mobilech vidět text
        $(".scrollUp").hide(0);
    }
    //Pokud se nejedná o mobilní zařízení, tak:
    else{
        //Ze začátku skryjeme scrollovací šipku
        $(".scrollUp").hide(0);
        //Do proměnné trida si uložíme barvu scrollovací šipky (Bootstrap žlutá)
        let trida = "text-warning";
        //Když uživatel přejede myší na scrollovací sipku, tak:
        $(".scrollUp").on("mouseover", function () {
            //se přidá třída z proměnné trida, tzn. "text-warning"
            $(this).addClass(trida);
        });
        //Když uživatel opustí myší objekt scrollovací šipky, tak:
        $(".scrollUp").on("mouseleave", function () {
            //se odstraní třída "text-warning" (proměnná trida) z tagu přidruženému třídě .scrollUp
            $(this).removeClass(trida);
        });
        //Objekt window znamená okno prohlížeče
        //Když dojde k posunu obrazovky, tak:
        $(window).scroll(function () {
            //pokud je rolování od vrchu větší jak 100, tak:
            if ($(this).scrollTop() > 100) {
                //dojde k zobrazení objektu scrollovací šipky, která má třídu .scrollUp
                $(".scrollUp").show(300);
            }
            //pokud rolování od vrchu je jiné hodnoty, tak:
            else{
                //dojde ke skrytí objektu scrollovací šipky
                $(".scrollUp").hide(300);
            }
        });
        //V případě, že uživatel klikne na objekt scrollovací šipky (pokud je v hide()), tak:
        $(".scrollUp").on("click", function () {
            //dojde k vytvoření animace, která okno prohlížeče přesune na začátek za čas 0,9 sekundy, viz konstanta cas
            $("html, body").animate({ scrollTop: 0 }, cas);
            // a z kompatibilních důvodů vrátí hodnotu boolean - false
            return false;
        });
    }
});