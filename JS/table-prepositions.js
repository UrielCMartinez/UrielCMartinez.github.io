$(function(){
    var table;
    $.getJSON('../JSon/Prepositions.json',function(data){
        table=data.table;
        iniciando(0);
    });
    function iniciando(){
        $("table-prepositions-time").empty();
        jQuery.each(table.rows, function(i,row){
            var r="";
            $.each(row,function(index,valor){
                if(index=="Preposition"){
                    r=r+"<tr><td>"+"<span>"+valor+"</td>";
                }
                else{
                    r=r+"<td>"+valor+"</td>";
                }
                
            });
            r+="</tr>";
            $("table").append(r);
        });
    }
});