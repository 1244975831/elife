
var layout = {
    "initPage":function(){
        $(".page").css({
            "width":$(window).width()+"px",
            "height":$(window).height()+"px",
        });
    },
    "initMaterial":function(){
        $(".map").css({
            "width":world.unitSize*70 + "px",
            "height":world.unitSize*28 + "px",
            "margin-left":($(window).width()-world.unitSize*70)/2,
            "margin-bottom":($(window).width()-world.unitSize*50)/4,
        });
        $("#add").css({
            "margin-left":($(window).width()-world.unitSize*70)/2,
            "margin-bottom":($(window).width()-world.unitSize*50)/8,
        });
        $("#addhunter").css({
            "margin-left":($(window).width()-world.unitSize*70)-50,
            "margin-bottom":($(window).width()-world.unitSize*50)/8,
        });
        $("#refresh").css({
            "margin-left":($(window).width()-world.unitSize*70)+($(window).width()-world.unitSize*70)/2-80,
            "margin-bottom":($(window).width()-world.unitSize*50)/8,
        });
    },
}
$(window).resize(function(){
    layout.initPage();
    layout.initMaterial();
});
