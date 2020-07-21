class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.rank = null;
        this.index = null;
    }
    getCount(){
        var playercountref = database.ref('playercount');
        playercountref.on("value", (data)=>{
         playerCount = data.val();   
        });

    }
    updateCount(count){
        database.ref('/').update({
            playercount : count
        });
    }
    update(){
        var playerindex = "players/player" + this.index;
        database.ref(playerindex).set({
            name : this.name, 
            distance : this.distance
        });
    }
    static getplayerinfo(){
        var playerinforef= database.ref('players');
        playerinforef.on("value", (data)=>{
            allPlayers = data.val();
            
        });

    }
    carsAtEnd(){
        var carsatendref = database.ref('carsAtEnd');
        carsatendref.on("value",(data)=>{
            this.rank = data.val();
        });

    }
    static updatecarsAtEnd(rank){
        database.ref('/').update({
            carsAtEnd : rank

        });
        console.log("get");
    }
}