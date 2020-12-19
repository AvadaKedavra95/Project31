class Ball{
    constructor(x,y){
        var options = {
            restitution : 0.7,
            density : 0.50,
            friction : 1
        }

        this.body  = Bodies.circle(x,y,10,options);
        this.radius =10 ;
        World.add(world,this.body);
        this.image=loadImage("plinko.png");

      
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,20,20);
        pop();
        
    }
}