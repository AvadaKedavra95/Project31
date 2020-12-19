class Plinko{
    constructor(x,y){
        var options = {
            isStatic : true

        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        fill("white");
        stroke("black");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
} 