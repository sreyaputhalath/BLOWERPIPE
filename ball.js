class Ball
{
    constructor(x,y,width,height){
       this.width=width
       this.height=height 
       var options={
           isStatic:false,
           restitution:0.08

       }
       this.body=Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.body)
    }
    display(){
        
        var pos= this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rect(0,0,this.width,this.height)
        pop()
    }
}