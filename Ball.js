class Ball{

    constructor(x,y,radius){
var options={
isStatic:false,
restitution:1
}
this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;
World.add(world,this.body);

    }

    display(){

        var pos=this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("black");
        ellipse(pos.x,pos.y,this.radius*2,this.radius*2);
        pop();
    }
}