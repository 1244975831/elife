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