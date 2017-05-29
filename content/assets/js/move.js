var animal = {
    data : data_map["forest"],
    find:function(){
        var table = document.querySelector("#map");
        var tr = $("#map").children("tr")
        for(var i = 0 ;i<tr.length;i++){
            var td = tr.eq(i).find("td");
            for(var j = 0 ;j<td.length;j++){
                var history_income_type = td.eq(j).attr("class");
                if(history_income_type =="material sleep"){
                    td.eq(j).removeClass("material sleep" ).addClass("material air");
                    td.eq(j-1).removeClass("material air" ).addClass("material sleep");
                }
            }
        }
        setTimeout("animal.find()", 1000);
        
    },
    move:function(i,j){
        var tr = $("#map").children("tr")
        var td = tr.eq(i).find("td");
        td.eq(j).removeClass("material sleep" ).addClass("material air");
        td.eq(j-1).removeClass("material air" ).addClass("material sleep");
    }
    
}