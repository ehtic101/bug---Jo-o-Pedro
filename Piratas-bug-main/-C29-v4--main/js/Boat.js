class Boat {
  constructor(x, y, w, h, bp, ba) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };

    this.w = w;
    this.h = h;
    this.a = ba;
    this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.boatPosition = bp;
    this.image = loadImage("./assets/boat.png");
    World.add(world, this.body);
  }

  animate() {
    this.speed += 0.05 % 1.1;
  }

  remove(index) {
    Matter.World.remove(world, boats[index].body);
    boats.splice(index, 1);    
  }
  

  display() {

    var angle = this.body.angle;
    var pos = this.body.position;
    var tamanho = this.a.length;
    var index = floor(this.speed % this.a.length);


    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    //mostrar a imagem
    image(this.a[index], 0, this.boatPosition, this.w, this.h);
    noTint();
    pop();

  }
}