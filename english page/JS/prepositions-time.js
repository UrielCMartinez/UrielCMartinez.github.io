$(function(){
    var rows1;
    var rows2;
    var rows3;
    var rows4;
    
    // Cargar datos para la primera tabla
    $.getJSON('../JSon/Prepositions-time.json', function(data){
        rows1 = data['table-pre1'].rows;
        iniciando('table-pre1', rows1);
    });
    
    // Cargar datos para la segunda tabla
    $.getJSON('../JSon/Prepositions-time.json', function(data){
        rows2 = data['table-pre2'].rows;
        iniciando('table-pre2', rows2);
    });
    // Cargar datos para la tercera tabla
    $.getJSON('../JSon/Prepositions-time.json', function(data){
        rows3 = data['table-pre3'].rows;
        iniciando('table-pre3', rows3);
    });
    // Cargar datos para la cuarta tabla
    $.getJSON('../JSon/Prepositions-time.json', function(data){
        rows4 = data['table-pre4'].rows;
        iniciando('table-pre4', rows4);
    });

    function iniciando(tableId, rows){
        var tableBody = $("#" + tableId + " tbody"); // Seleccionar el cuerpo de la tabla por ID
        tableBody.empty();
        
        $.each(rows, function(i, row){
            var r = "<tr>";
            r += "<td>" + row.Preposition + "</td>";
            r += "<td>" + row.Traduccion + "</td>";
            r += "<td>" + row.Ejemplo + "</td>";
            r += "</tr>";
            tableBody.append(r);
        });
    }
});


