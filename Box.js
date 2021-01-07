class Box{
    constructor(x,y,width,height){
        var option={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body)
        this.width=width;
        this.height=height;
    }
    display(){
        var angle=this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}