class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2);
		stroke(225);
		//line(con.pointA.x,con.pointA.y,bob.position.x,bob.position.y);
		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES

		
	}

}