var animal = {
    data : data_map["forest"],
    size : 0,
    find:function(){
        var table = document.querySelector("#map");
        var tr = $("#map").children("tr")
        for(var i = 0 ;i<tr.length;i++){
            var td = tr.eq(i).find("td");
            for(var j = 0 ;j<td.length;j++){
                var history_income_type = td.eq(j).attr("class");
                if(history_income_type =="material sleep"){
                    var type = Math.random()*4;
                    // var type = 2
                    if(0<type&&type<=1){
        
                        if( td.eq(j-1).attr("class" )=="material air"){
                            if( td.eq(j).attr("title")==0){
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                            }else if(td.eq(j).attr("title")>=60){
                                td.eq(j+1).removeClass("material air" ).addClass("material sleep");
                                td.eq(j+1).attr("title",30);td.eq(j).attr("title",30);
                            }
                            else{
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                                td.eq(j-1).removeClass("material air" ).addClass("material sleep");
                                td.eq(j-1).attr("title",td.eq(j).attr("title")-1);
                                td.eq(j).attr("title",0);
                            }
                           
                        }    
                        else if(td.eq(j-1).attr("class")=="material grass"){
                            td.eq(j).removeClass("material sleep" ).addClass("material air");
                            td.eq(j-1).removeClass("material grass" ).addClass("material sleep");
                            td.eq(j-1).attr("title",td.eq(j).attr("title")+5);
                             td.eq(j).attr("title",0);
                        }
                    }
                    else if(1<type&&type<=2){
                        if( td.eq(j+1).attr("class" )=="material air"){
                            if( td.eq(j).attr("title")==0){
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                            }else if(td.eq(j).attr("title")>=60){
                                td.eq(j+1).removeClass("material air" ).addClass("material sleep");
                                td.eq(j+1).attr("title",30);td.eq(j).attr("title",30);
                            }else{
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                                td.eq(j+1).removeClass("material air" ).addClass("material sleep");
                                td.eq(j+1).attr("title",td.eq(j).attr("title"));
                                td.eq(j).attr("title",0);
                            }
                        }else if(td.eq(j+1).attr("class" )=="material grass"){
                            td.eq(j).removeClass("material sleep" ).addClass("material air");
                            td.eq(j+1).removeClass("material grass" ).addClass("material sleep");
                            td.eq(j+1).attr("title",td.eq(j).attr("title"));
                            td.eq(j).attr("title",0);
                        }
                    }
                    else if(2<type&&type<=3){
                        var td2 = tr.eq(i-1).find("td");
                        if(td2.eq(j).attr("class" )=="material air"){
                             if( td.eq(j).attr("title")==0){
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                            }else if(td.eq(j).attr("title")>=60){
                                td.eq(j+1).removeClass("material air" ).addClass("material sleep");
                                td.eq(j+1).attr("title",30);td.eq(j).attr("title",30);
                            }else{
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                                td2.eq(j).removeClass("material air" ).addClass("material sleep");
                                td2.eq(j).attr("title",td.eq(j).attr("title"));
                                td.eq(j).attr("title",0);
                            }
                        }
                        else if(td2.eq(j).attr("class" )=="material grass"){
                            td.eq(j).removeClass("material sleep" ).addClass("material air");
                            td2.eq(j).removeClass("material grass" ).addClass("material sleep");
                            td2.eq(j).attr("title",td.eq(j).attr("title"));
                            td.eq(j).attr("title",0);
                        }
                    }
                    else if(3<type&&type<=4 ){
                        var td2 = tr.eq(i+1).find("td");
                        if(td2.eq(j).attr("class" )=="material air"){
                            if( td.eq(j).attr("title")==0){
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                            }else if(td.eq(j).attr("title")>=60){
                                td.eq(j+1).removeClass("material air" ).addClass("material sleep");
                                td.eq(j+1).attr("title",30);td.eq(j).attr("title",30);
                            }else{
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                                td2.eq(j).removeClass("material air" ).addClass("material sleep");
                                td2.eq(j).attr("title",td.eq(j).attr("title"));
                                td.eq(j).attr("title",0);
                            }
                        }
                        else if(td2.eq(j).attr("class" )=="material grass"){
                            td.eq(j).removeClass("material sleep" ).addClass("material air");
                            td2.eq(j).removeClass("material grass" ).addClass("material sleep");
                            td2.eq(j).attr("title",td.eq(j).attr("title"));
                            td.eq(j).attr("title",0);
                        }
                    }
                }
            }
        }
        setTimeout("animal.find()", 500);
        
    },
    move:function(i,j){
        var tr = $("#map").children("tr")
        var td = tr.eq(i).find("td");
        td.eq(j).removeClass("material sleep" ).addClass("material air");
        td.eq(j-1).removeClass("material air" ).addClass("material sleep");
    }
    
}
var sleep = {
    energy : 20,
}