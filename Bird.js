class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png")
    this.tragectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    console.log(this.body.velocity.x);
    console.log(this.body.position.x);

    if(this.body.position.x > 200 && this.body.velocity.x >1){
    var position = [this.body.position.x,this.body.position.y];
    this.tragectory.push(position);
    }

    for(var i=0; i <this.tragectory.length; i++){
      image(this.smokeimage,this.tragectory[i][0],this.tragectory[i][1]);
    }
  }
}
