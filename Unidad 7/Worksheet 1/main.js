// WS 1 --> 5, 8; WS 3 --> 1, 3, 7, 8, 9, 10

$("document").ready( () => {
    // Exercise 5
    $("#boton").click( () => {
        $("ul li:first").hide();
    });

    //Exercise 8
    $("div h2").css("font-size", "18px");

    $("#noticia1h2").click( () => {
        $("#noticia1p").toggle();
    });
    
    $("#noticia2h2").click( () => {
        $("#noticia2p").toggle();
    });
    
    $("#noticia3h2").click( () => {
        $("#noticia3p").toggle();
    });

    $("div").hover(function () {
        $(this).css("background-color", "lightblue");
    });

    $("div").mouseout(function () {
        $(this).css("background-color", "white");
    });
});