$(function(){
    var table;
    $.getJSON('JSon/irregular-Verbs.json',function(data){
        table=data.table;
        iniciando(0);
    });
    function iniciando(){
        $("table-verbs").empty();
        jQuery.each(table.rows, function(i,row){
            var r="";
            $.each(row,function(index,valor){
                if(index=="Infinitive"){
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