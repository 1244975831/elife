var animal = {
    data : data_map["forest"],
    size : 0,
    maxenergy:160,
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
                                if(td.eq(j+1).attr("class")=="material air"){
                                    td.eq(j+1).removeClass("material air" ).addClass("material sleep");
                                    td.eq(j+1).attr("title",30);td.eq(j).attr("title",30);
                                }
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
                            td.eq(j-1).attr("title",parseInt(td.eq(j).attr("title"))+15);
                            td.eq(j).attr("title",0);
                        }
                    }
                    else if(1<type&&type<=2){
                        if( td.eq(j+1).attr("class" )=="material air"){
                            if( td.eq(j).attr("title")==0){
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                            }else if(td.eq(j).attr("title")>=60){
                                if(td.eq(j+1).attr("class")=="material air"){
                                    td.eq(j+1).removeClass("material air" ).addClass("material sleep");
                                    td.eq(j+1).attr("title",30);td.eq(j).attr("title",30);
                                }
                            }else{
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                                td.eq(j+1).removeClass("material air" ).addClass("material sleep");
                                td.eq(j+1).attr("title",td.eq(j).attr("title")-1);
                                td.eq(j).attr("title",0);
                            }
                        }else if(td.eq(j+1).attr("class" )=="material grass"){
                            td.eq(j).removeClass("material sleep" ).addClass("material air");
                            td.eq(j+1).removeClass("material grass" ).addClass("material sleep");
                            td.eq(j+1).attr("title",parseInt(td.eq(j).attr("title"))+15);
                            td.eq(j).attr("title",0);
                        }
                    }
                    else if(2<type&&type<=3){
                        var td2 = tr.eq(i-1).find("td");
                        if(td2.eq(j).attr("class" )=="material air"){
                             if( td.eq(j).attr("title")==0){
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                            }else if(td.eq(j).attr("title")>=60){
                                if(td.eq(j+1).attr("class")=="material air"){
                                    td.eq(j+1).removeClass("material air" ).addClass("material sleep");
                                    td.eq(j+1).attr("title",30);td.eq(j).attr("title",30);
                                }
                            }else{
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                                td2.eq(j).removeClass("material air" ).addClass("material sleep");
                                td2.eq(j).attr("title",td.eq(j).attr("title")-1);
                                td.eq(j).attr("title",0);
                            }
                        }
                        else if(td2.eq(j).attr("class" )=="material grass"){
                            td.eq(j).removeClass("material sleep" ).addClass("material air");
                            td2.eq(j).removeClass("material grass" ).addClass("material sleep");
                            td2.eq(j).attr("title",parseInt(td.eq(j).attr("title"))+15);
                            td.eq(j).attr("title",0);
                        }
                    }
                    else if(3<type&&type<=4 ){
                        var td2 = tr.eq(i+1).find("td");
                        if(td2.eq(j).attr("class" )=="material air"){
                            if( td.eq(j).attr("title")==0){
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                            }else if(td.eq(j).attr("title")>=80){
                               if(td.eq(j+1).attr("class")=="material air"){
                                    td.eq(j+1).removeClass("material air" ).addClass("material sleep");
                                    td.eq(j+1).attr("title",30);td.eq(j).attr("title",30);
                                }
                            }else{
                                td.eq(j).removeClass("material sleep" ).addClass("material air");
                                td2.eq(j).removeClass("material air" ).addClass("material sleep");
                                td2.eq(j).attr("title",td.eq(j).attr("title")-1);
                                td.eq(j).attr("title",0);
                            }
                        }
                        else if(td2.eq(j).attr("class" )=="material grass"){
                            td.eq(j).removeClass("material sleep" ).addClass("material air");
                            td2.eq(j).removeClass("material grass" ).addClass("material sleep");
                            td2.eq(j).attr("title",parseInt(td.eq(j).attr("title"))+15);
                            td.eq(j).attr("title",0);
                        }
                    }
                }
                if(history_income_type =="material grass"){
                    var td2 = tr.eq(i-1).find("td");
                    var td3 = tr.eq(i+1).find("td");
                    if(td.eq(j).attr("title")>=20){
                        if(td.eq(j-1).attr("class")=="material air"){
                            td.eq(j-1).removeClass("material air" ).addClass("material grass");
                            td.eq(j).attr("title",0);td.eq(j+1).attr("title",0);
                        }else if(td.eq(j+1).attr("class")=="material air"){
                            td.eq(j+1).removeClass("material air" ).addClass("material grass");
                            td.eq(j).attr("title",0);td.eq(j+1).attr("title",0);
                        }else if(td2.eq(j).attr("class")=="material air"){
                            td2.eq(j).removeClass("material air" ).addClass("material grass");
                            td.eq(j).attr("title",0);td2.eq(j).attr("title",0);
                        }else if(td3.eq(j).attr("class")=="material air"){
                            td3.eq(j).removeClass("material air" ).addClass("material grass");
                            td.eq(j).attr("title",0);td3.eq(j).attr("title",0);
                        }else{
                             td.eq(j).attr("title",5);
                        }
                    }else{
                        td.eq(j).attr("title",parseInt(td.eq(j).attr("title"))+1);
                    }
                }
                if(history_income_type =="grass material sleep"){
                     td.eq(j).removeClass("grass material sleep" ).addClass(" material sleep");
                }
                if(history_income_type =="material hunter"){
                    var td2 = tr.eq(i-1).find("td");
                    var td3 = tr.eq(i+1).find("td");

                    if(td.eq(j).attr("title")<=0){
                        td.eq(j).removeClass("material hunter").addClass("material air");
                        td.eq(j).attr("title",0);
                    }else if(td.eq(j).attr("title")>=animal.maxenergy){
                        if(td.eq(j+1).attr("class")=="material air"){
                            td.eq(j+1).removeClass("material air").addClass("material hunter");
                            td.eq(j).attr("title",60);td.eq(j+1).attr("title",60);
                        }
                    }

                   if(td.eq(j-1).attr("class" )=="material sleep"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td.eq(j-1).removeClass("material sleep" ).addClass("material hunter");
                        td.eq(j-1).attr("title",parseInt(td.eq(j).attr("title"))+30);
                        td.eq(j).attr("title",0);
                   }else if(td.eq(j+1).attr("class" )=="material sleep"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td.eq(j+1).removeClass("material sleep" ).addClass("material hunter");
                        td.eq(j+1).attr("title",parseInt(td.eq(j).attr("title"))+30);
                        td.eq(j).attr("title",0);
                   }else if(td2.eq(j).attr("class")=="material sleep"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td2.eq(j).removeClass("material sleep" ).addClass("material hunter");
                        td2.eq(j).attr("title",parseInt(td.eq(j).attr("title"))+30);
                        td.eq(j).attr("title",0);
                   }else if(td3.eq(j).attr("class")=="material sleep"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td3.eq(j).removeClass("material sleep" ).addClass("material hunter");
                        td3.eq(j).attr("title",parseInt(td.eq(j).attr("title"))+30);
                        td.eq(j).attr("title",0);
                   }else if(td.eq(j-1).attr("class" )=="material grass"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td.eq(j-1).removeClass("material grass" ).addClass("material hunter");
                        td.eq(j-1).attr("title",parseInt(td.eq(j).attr("title"))+10);
                        td.eq(j).attr("title",0);
                   }else if(td.eq(j+1).attr("class" )=="material grass"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td.eq(j+1).removeClass("material grass" ).addClass("material hunter");
                        td.eq(j+1).attr("title",parseInt(td.eq(j).attr("title"))+10);
                        td.eq(j).attr("title",0);
                   }else if(td2.eq(j).attr("class" )=="material grass"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td2.eq(j).removeClass("material grass" ).addClass("material hunter");
                        td2.eq(j).attr("title",parseInt(td.eq(j).attr("title"))+10);
                        td.eq(j).attr("title",0);
                   }else if(td3.eq(j).attr("class" )=="material grass"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td3.eq(j).removeClass("material grass" ).addClass("material hunter");
                        td3.eq(j).attr("title",parseInt(td.eq(j).attr("title"))+10);
                        td.eq(j).attr("title",0);
                   }else if(td2.eq(j-1).attr("class" )=="material sleep"&&td2.eq(j).attr("class" )=="material air"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td2.eq(j).removeClass("material air" ).addClass("material hunter");
                        td2.eq(j).attr("title",parseInt(td.eq(j).attr("title"))-1);
                        td.eq(j).attr("title",0);
                   }else if(td2.eq(j+1).attr("class" )=="material sleep"&&td2.eq(j).attr("class" )=="material air"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td2.eq(j).removeClass("material air" ).addClass("material hunter");
                        td2.eq(j).attr("title",parseInt(td.eq(j).attr("title"))-1);
                        td.eq(j).attr("title",0);
                   }else if(td3.eq(j-1).attr("class" )=="material sleep"&&td3.eq(j).attr("class" )=="material air"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td3.eq(j).removeClass("material air" ).addClass("material hunter");
                        td3.eq(j).attr("title",parseInt(td.eq(j).attr("title"))-1);
                        td.eq(j).attr("title",0);
                   }else if(td3.eq(j+1).attr("class" )=="material sleep"&&td3.eq(j).attr("class" )=="material air"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td3.eq(j).removeClass("material air" ).addClass("material hunter");
                        td3.eq(j).attr("title",parseInt(td.eq(j).attr("title"))-1);
                        td.eq(j).attr("title",0);
                   }else if(td2.eq(j-1).attr("class" )=="material grass"&&td2.eq(j).attr("class" )=="material air"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td2.eq(j).removeClass("material grass" ).addClass("material hunter");
                        td2.eq(j).attr("title",parseInt(td.eq(j).attr("title"))-1);
                        td.eq(j).attr("title",0);
                   }else if(td2.eq(j+1).attr("class" )=="material grass"&&td2.eq(j).attr("class" )=="material air"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td2.eq(j).removeClass("material grass" ).addClass("material hunter");
                        td2.eq(j).attr("title",parseInt(td.eq(j).attr("title"))-1);
                        td.eq(j).attr("title",0);
                   }else if(td3.eq(j-1).attr("class" )=="material grass"&&td3.eq(j).attr("class" )=="material air"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td3.eq(j).removeClass("material grass" ).addClass("material hunter");
                        td3.eq(j).attr("title",parseInt(td.eq(j).attr("title"))-1);
                        td.eq(j).attr("title",0);
                   }else if(td3.eq(j+1).attr("class" )=="material grass"&&td3.eq(j).attr("class" )=="material air"){
                        td.eq(j).removeClass("material hunter" ).addClass("material air");
                        td3.eq(j).removeClass("material grass" ).addClass("material hunter");
                        td3.eq(j).attr("title",parseInt(td.eq(j).attr("title"))-1);
                        td.eq(j).attr("title",0);
                   }else{
                        var type = Math.random()*4;
                        if(0<type&&type<=1){
                            if(td.eq(j-1).attr("class" )=="material air"){
                                td.eq(j).removeClass("material hunter" ).addClass("material air");
                                td.eq(j-1).removeClass("material air" ).addClass("material hunter");
                                td.eq(j-1).attr("title",parseInt(td.eq(j).attr("title"))-1);
                                td.eq(j).attr("title",0);
                            }else{
                                type = type+1;
                            }
                        }
                        if(1<type&&type<=2){
                            if(td.eq(j+1).attr("class" )=="material air"){
                                td.eq(j).removeClass("material hunter" ).addClass("material air");
                                td.eq(j+1).removeClass("material air" ).addClass("material hunter");
                                td.eq(j+1).attr("title",parseInt(td.eq(j).attr("title"))-1);
                                td.eq(j).attr("title",0);
                            }else{
                                type = type+1;
                            }
                        }
                        if(2<type&&type<=3){
                            if(td2.eq(j).attr("class" )=="material air"){
                                td.eq(j).removeClass("material hunter" ).addClass("material air");
                                td2.eq(j).removeClass("material air" ).addClass("material hunter");
                                td2.eq(j).attr("title",parseInt(td.eq(j).attr("title"))-1);
                                td.eq(j).attr("title",0);
                            }else{
                                type = type+1;
                            }
                        }
                        if(3<type&&type<=4){
                            if(td3.eq(j).attr("class" )=="material air"){
                                td.eq(j).removeClass("material hunter" ).addClass("material air");
                                td3.eq(j).removeClass("material air" ).addClass("material hunter");
                                td3.eq(j).attr("title",parseInt(td.eq(j).attr("title"))-1);
                                td.eq(j).attr("title",0);
                            }else{
                                type = type+1;
                            }
                        }
                   }
                       
                }
                if(history_income_type =="air material hunter"){
                     td.eq(j).removeClass("air material hunter" ).addClass(" material hunter");
                }
                if(history_income_type =="air material"){
                     td.eq(j).removeClass("air material" ).addClass(" material air");
                }
            }
        }
        setTimeout("animal.find()", 300);
        
    },
    sleepaction:function(i,j){
        var tr = $("#map").children("tr")
        var td = tr.eq(i).find("td");
        td.eq(j).removeClass("material sleep" ).addClass("material air");
        td.eq(j-1).removeClass("material air" ).addClass("material sleep");
    }
    
}
