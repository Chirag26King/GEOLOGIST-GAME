class Stone{
	constructor(x,y)
	{
	// assign options to the stone
	
	 var stone_options={
		 restitution:0.8,
		 density:12,
		 friction:0.9,

	 }
		this.x=x;
		this.y=y;
		this.width=100;
        this.height=50;
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height,stone_options);
		World.add(world, this.body);

		//console.log(this.body);

		
	}
	display()
	{
			var stonepos=this.body.position;	
			var angle=this.body.angle;
			push()
			translate(stonepos.x, stonepos.y);
			rotate (angle);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("grey");
			
            rect(0,0,this.width,this.height);
            

			

			pop()
	}

}