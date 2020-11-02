class Paper{
    constructor(radius){
        this.body=Bodies.circle(200,200,radius,{restitution:0.3,friction:0.5,density:1.2});
      this.radius=radius;
        
        World.add(world,this.body);
    }
    display(){
       var pos=this.body.position;
        ellipseMode(RADIUS);
      fill("green");
      ellipse(pos.x,pos.y,this.radius);
      
    }
}