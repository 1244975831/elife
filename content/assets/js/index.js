var world = {
    "unitSize":10,
    "load":function(){
        $("#page").append("<div id='forest' class='world'></div>");
    }
}
$(document).ready(function(){
    layout.initPage();
    world.load();
    map.get();
    map.load();
    // setInterval("animal.find()","1000");
    // for(var i =0 ; i<8 ;i++){
    animal.find();
        
    // }
    // animal.find();
});
function addsleep(){
    var addflag = 0;
    var table = document.querySelector("#map");
    var tr = $("#map").children("tr");
    for(var i = 0 ;i < tr.length ; i++){
        var td = tr.eq(i).find("td");
        for(var j = 0 ;j < td.length ; j++){
            var history_income_type = td.eq(j).attr("class");
            if( history_income_type=="material air"){
                 td.eq(j).removeClass("material air" ).addClass("material sleep");
                 td.eq(j).attr("title",30);
                 addflag = 1;
                 break;
            }
        }
        if(addflag == 1 ){
            break;
        }
    }
}
function addhunter(){
    var addflag = 0;
    var table = document.querySelector("#map");
    var tr = $("#map").children("tr");
    for(var i = 0 ;i < tr.length ; i++){
        var td = tr.eq(i).find("td");
        for(var j = 0 ;j < td.length ; j++){
            var history_income_type = td.eq(j).attr("class");
            if( history_income_type=="material air"){
                 td.eq(j).removeClass("material air" ).addClass("material hunter");
                 td.eq(j).attr("title",60);
                 addflag = 1;
                 break;
            }
        }
        if(addflag == 1 ){
            break;
        }
    }
}
function refresh(){
    location.reload() ;
}