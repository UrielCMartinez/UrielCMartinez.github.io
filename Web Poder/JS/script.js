$(document).ready(function(){

    $(".btn-descripcion").click(function() {
        // Obtener el contenedor de la tarjeta actual
        var tarjetaContainer = $(this).closest(".tarjeta-container");
        
        // Aplicar la rotación solo a la tarjeta actual
        tarjetaContainer.css("transform", "rotateY(180deg)");
    });

    $(".btn-cerrar").click(function() {
        // Obtener el contenedor de la tarjeta actual
        var tarjetaContainer = $(this).closest(".tarjeta-container");
        
        // Aplicar la rotación solo a la tarjeta actual
        tarjetaContainer.css("transform", "rotateY(0deg)");
    });

});
