
var canvas = new fabric.Canvas('myCanvas');
var ball_obj;
ball_x = 0;
ball_y = 0;
hole_x = 800;
hole_y = 430;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	{
		fabric.Image.fromURL("player.png", function(Img) {
		player_object = Img;
	
		player_object.scaleToWidth(150);
		player_object.scaleToHeight(140);
		player_object.set({
		top:player_y,
		left:player_x
		});
		canvas.add(player_object);
	
		});
	}
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img1)
									{
      									ball_obj=Img1;
	  									ball_obj.scaleToHeight(50);
	  									ball_obj.scaleToWidth(50);
	  									ball_obj.set({
      									top:ball_y,
	  									left:ball_x});
	  									canvas.add(ball_obj);
    								}
						);

	fabric.Image.fromURL("golf-h.png", function(Img2)
									{
      									golf_hole_obj=Img2;
	  									golf_hole_obj.scaleToHeight(50);
	  									golf_hole_obj.scaleToWidth(50);
	  									golf_hole_obj.set({
      									top:hole_y,
	  									left:hole_x});
	  									canvas.add(golf_hole_obj);
    								}
						);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if ((ball_x>=hole_x&&ball_x<=hole_x+50)&&(ball_y>=hole_y&&ball_y<=hole_y+50))
	{
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You Hove Hit the Goal!";
		document.getElementById("myCanvas").style.borderColor="red";
	}

	
	else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{ 
		if(ball_y >=0)
		{
			 ball_y= ball_y-1;
			 canvas.remove(ball_obj);
		     new_image();
		}
	}

	function down()
	{
		if(ball_y <450)
		{
		ball_y = ball_y+1;
		canvas.remove(ball_obj);
		new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x-1;
			canvas.remove(ball_obj);
		     new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x+1;
			canvas.remove(ball_obj);
		     new_image();
		}
	}
	
}

