class Snake {  

    constructor() {
      
      this.body = [];
      this.body[0] = createVector(0, 0);
      this.xdir = 0
      ;
      this.ydir = 0;
  
    }
    
    setDir(x, y) {
      this.xdir = x;
      this.ydir = y;
    
    }
    update() {    
      this.body[0].x += this.xdir;
      this.body[0].y += this.ydir;
    }
    
    eat(pos) {
      let x = this.body[0].x;
      let y = this.body[0].y;
      
      if (x == pos.x && y == pos.y) {
        print("FOOD EATEN");
        return true;
      }
      return false;
    }
  
    endGame() {
      let x = this.body[0].x;
      let y = this.body[0].y;
      
      if(x > w-1 || x < 0 || y > h-1 || y < 0) {
        return true
      }
    }
    show() { 
      fill(0);
      noStroke();
      rect(this.body[0].x, this.body[0].y, 1, 1);
    }  
  }