
var layout = {
    "initPage":function(){
        $(".page").css({
            "width":$(window).width()+"px",
            "height":$(window).height()+"px"
        });
    },
    "initMaterial":function(){
        $(".map").css({
            "width":world.unitSize*70 + "px",
            "height":world.unitSize*28 + "px"
        });
    },
}
$(window).resize(function(){
    layout.initPage();
    layout.initMaterial();
});
