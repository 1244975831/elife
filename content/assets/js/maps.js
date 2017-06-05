var map = {
    data:null,
    level:{
        "forest":{}
    },  
    get : function(mapName){
        this.data = data_map["forest"];
    },
    load:function(){
        var table_map = document.createElement("table");
        table_map.className = "map";
        table_map.id = "map";
        table_map.border = 0;
        $(".world").append(table_map);
        for(var i in this.data){
            var tr = document.createElement("tr");
            for(var j in this.data[i]){
                var td = document.createElement("td");
                switch(this.data[i][j]){
                    case " ":td.className=this.material.air.class;td.title=0;break;
                    case "*":td.className=this.material.grass.class;td.title=5;break;
                    case "#":td.className=this.material.wall.class;td.title=0;break;
                    case "O":td.className=this.material.sleep.class;td.title=40;break;
                    case "&":td.className=this.material.hunter.class;td.title=80;break;
                    default:break;
                }
                $(tr).append(td);
            }
            $("#map").append(tr);
        }
        
        layout.initMaterial();
    },
    material:{
        "grass":{
            class:"material grass",
        },
        "air":{
            class:"material air"
        },
        "sleep":{
            class:"material sleep"
        },
        "wall":{
            class:"material wall"
        },
        "hunter":{
            class:"material hunter"
        }
    }
}