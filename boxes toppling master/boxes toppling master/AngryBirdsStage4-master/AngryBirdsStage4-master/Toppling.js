class Toppling extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,50,height,angle);
 
    Matter.Body.setAngle(this.body, angle);
   }
}