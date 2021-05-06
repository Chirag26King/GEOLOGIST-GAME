class Iron{
	constructor(x,y)
	{
	// assign options to the iron
	
	 var iron_options={
		 restitution:0.8,
		 density:30,
		 friction:3,

	 }
		this.x=x;
		this.y=y;
		this.width=100;
        this.height=100;
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height,iron_options);
		World.add(world, this.body);

		//console.log(this.body);

		
	}
	display()
	{
			var ironpos=this.body.position;	
			var angle=this.body.angle;
			push()
			translate(ironpos.x, ironpos.y);
			rotate (angle);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("cyan");
			
            rect(0,0,this.width,this.height);
            

			

			pop()
	}
}