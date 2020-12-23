class drop {
    constructor(){
        this.image=loadImage("images/drop.jpg");
this.body=Bodies.circle(random(100,350),120,20);
World.add(world,this.body);

    }
  display(){
  imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,20);

  }
}
