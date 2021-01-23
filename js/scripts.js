$(document).ready(function () {


    $("body").removeClass("preload");
    console.log("Hi, my name is jQuery and I'm working");


    $("li").hover(
        function () {
            $(this).find(".color-frame").addClass("selected");
            $(this).find(".item-title").addClass("white");
        },
        function () {
            $(this).find(".color-frame").removeClass("selected");
            $(this).find(".item-title").removeClass("white");
        }
    );

    $("#rincones").mouseenter(
        function () {
            $(".home-background").find("img").attr("src", "img/Goya-baile-manzanares.jpg");
        }
    );

    $("#comer").mouseenter(
        function () {
            $(".home-background").find("img").attr("src", "img/sanchez-cotan.jpg");
        }
    );

    $("#cultura").mouseenter(
        function () {
            $(".home-background").find("img").attr("src", "img/El_Quitasol.jpg");
        }
    );

    $("#taller").mouseenter(
        function () {
            $(".home-background").find("img").attr("src", "img/La cometa.jpg");
        }
    );

    function mediaSize() {

        if (window.matchMedia('(max-width: 900px)').matches) {
            $("#comer").click(
                function () {
                    setTimeout(
                        function () {
                            window.location = "gallery-articles.html";
                        }, 1000);
                }
            );

        } else {
            $("#comer").click(
                function () {
                    window.location = "gallery-articles.html"
                });
        }
    };

    mediaSize();
    window.addEventListener('resize', mediaSize, false);



})
