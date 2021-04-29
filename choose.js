class choose{
    constructor(){
        this.title3 = createElement('h1');
        this.button3 = createButton('PLAY');
        this.alpha = loadImage("shipalpha.png");
        this.beta = loadImage("shipbeta.png");
        this.gamma = loadImage("spaceship.png");
       // this.ship1 = createSprite(displayWidth/2 - 50, displayHeight/2 - 30, 20,20 );
        
    }

    display(){
        this.title3.position(displayWidth/2 + 100, 100);
        this.title3.html("CHOOSE YOUR SPACESHIP");

        

        this.button3.position(displayWidth/2 + 150, displayHeight/2);

        
        //   ship1 = createSprite(displayWidth/2 - 300, displayHeight/2 - 30, 20,20 );
        // ship1.addImage("im", this.alpha);

        // var ship2 = createSprite(displayWidth/2 + 50, displayHeight/2 - 30, 20,20);
        // ship2.addImage("y", this.beta);

        // var ship3 = createSprite(displayWidth/2, displayHeight+ 20, 20,20);
        // ship3.addImage("s", this.gamma);

        
        this.button3.mousePressed(()=>{
            gameState = "PLAY";
            }
            )
    }

    hide1(){
//ship1.visible = false;
this.title3.hide();
this.button3.hide();
    }
}