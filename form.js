class form{
constructor(){
    this.input = createInput("Name");
    this.button = createButton('PLAY');
    this.greeting = createElement('h1');
    this.greeting2 = createElement('h1');
    this.title = createElement('h1');
    this.image = loadImage("bgds.png");
    this.title3 = createElement('h1');
        
}


    display(){
        image(this.image,0,0, displayWidth, displayHeight);
        this.title.html("SPACE INVADERS GAME");
        this.title.position(displayWidth/2 + 100, 0);
    
        this.input.position(displayWidth/2 + 150 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 150, displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            this.greeting.html("Welcome " + name );
            this.greeting2.html("ALL THE BEST !");
            this.greeting.position(displayWidth/2 + 110, displayHeight/4);
            this.greeting2.position(displayWidth/2 + 110, displayHeight/4 + 50);
           gameState = "PLAY";
          });
          

        

        

        
       

        
        
}
hide(){
    this.greeting.hide();
    this.title.hide();
}
}