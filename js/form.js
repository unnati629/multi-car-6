class Form{
    constructor(){
        this.title= createElement('h1');
        this.input=createInput("ENTER YOUR NAME");
        this.button=createButton('play');
        this.reset = createButton('reset');
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 100 ,100);
        this.input.position(displayWidth/2 - 100,300);
        this.reset.position(displayWidth-100, 20);
        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
        });
        this.button.position(displayWidth/2 - 100,350);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount = playerCount + 1;
            player.index= playerCount;
            player.update();
            player.updateCount(playerCount);
           
            this.greeting = createElement('h2');
            this.greeting.position(300,300);
            this.greeting.html("Welcome " + player.name + " to the Game!! ");
        });
        
    }
    hide(){
        this.button.hide();
        this.title.hide();
        this.input.hide();
        this.greeting.hide();
    }
}