class box
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution:0,
            friction:1,			
		}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h, options);
		this.visibility=255;
 		World.add(world, this.body);
	}

    display()
	{
		if(this.body.speed < 6)
		{			
					
			push();
			var boxPos=this.body.position;
			translate(boxPos.x, boxPos.y);		
			rotate(this.body.angle)
			fill(200,128,128)
			rectMode(CENTER)			
			rect(0,0,this.w, this.h);			
			pop();
		}
		else
		{
			World.remove(world,this.body);
			push();
			this.visibility=this.visibility-3;
			tint(255,this.visibility);
			//rect(0,0,this.w, this.h);			
			pop();
		}
		 		
	}

	score()
	{
		if(this.visibility < 0 && this.visibility > -1000)	
		{
			score++;
		}
	}

}
