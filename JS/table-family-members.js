$(function(){
    var rows1;
    var rows2;
    var rows3;
    var rows4;
    var rows5;
    var rows6;
    // Cargar datos para la primera tabla
    $.getJSON('../JSon/family-members.json', function(data){
        rows1 = data['table-fam1'].rows;
        iniciando('table-fam1', rows1);
    });
    // Cargar datos para la segund tabla
    $.getJSON('../JSon/family-members.json', function(data){
        rows2 = data['table-fam2'].rows;
        iniciando('table-fam2', rows2);
    });
    // Cargar datos para la tercer tabla
    $.getJSON('../JSon/family-members.json', function(data){
        rows3 = data['table-fam3'].rows; 
        iniciando('table-fam3', rows3);
    });
    // Cargar datos para la cuarta tabla
    $.getJSON('../JSon/family-members.json', function(data){
        rows4 = data['table-fam4'].rows; 
        iniciando('table-fam4', rows4);
    });
    // Cargar datos para la quinta tabla
    $.getJSON('../JSon/family-members.json', function(data){
        rows5 = data['table-fam5'].rows; 
        iniciando('table-fam5', rows5);
    });
    // Cargar datos para la seis tabla
    $.getJSON('../JSon/family-members.json', function(data){
        rows6 = data['table-fam6'].rows; 
        iniciando('table-fam6', rows6);
    });

    function iniciando(tableId, rows){
        var tableBody = $("#" + tableId + " tbody"); // Seleccionar el cuerpo de la tabla por ID
        tableBody.empty();
        
        $.each(rows, function(i, row){
            var r = "<tr>";
            r += "<td>" + row.Miembro + "</td>";
            r += "<td>" + row.Traduccion + "</td>";
            r += "<td>" + row.Pronunciacion + "</td>";
            r += "</tr>";
            tableBody.append(r);
        });
    }
});



