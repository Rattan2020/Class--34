class Rope{

    constructor(bodyA,pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            length:500
        }
        this.body=Constraint.create(options);
        this.bodyA=bodyA;
        this.pointB=pointB;
        World.add(world,this.body);

    }

    display(){

        var posA=this.bodyA.position;
        var posB=this.pointB;
        push();
        strokeWeight(5);
        stroke("yellow");
        line(posA.x,posA.y,posB.x,posB.y);
        pop();


    }
}