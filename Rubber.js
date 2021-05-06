class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	
	 var rubber_options={
		 restitution:0.3,
		 density:1,
		 friction:5,

	 }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2,rubber_options)
		World.add(world, this.body);

		console.log(this.body);

		
	}
	display()
	{
			var rubberpos=this.body.position;	
			var angle=this.body.angle;
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate (angle);
			ellipseMode(RADIUS);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

			ellipse(0,0,this.r,this.r);

			pop()
	}

}