var slide;
var pic = 0;
window.onload = function ()
{
 	slide = document.getElementById('img');
	image = new Array();
	image[0] = new Image();
	image[0].src = "vighnesh22.jpg";
	image[1] = new Image();
	image[1].src = "vighnesh23.jpg";
	image[2] = new Image();
	image[2].src = "vighnesh24.jpg";
	image[3] = new Image();
	image[3].src = "vighnesh25.jpg";
	image[4] = new Image();
	image[4].src = "vighnesh26.jpg";
	image[5] = new Image();
	image[5].src = "vighnesh27.jpg";
	image[6] = new Image();
	image[6].src = "vighnesh28.jpg";
	image[7] = new Image();
	image[7].src = "vighnesh29.jpg";
	image[8] = new Image();
	image[8].src = "vighnesh30.jpg";
}
function previous()
{
 
	if(pic == 0)
	{
 		pic = 8; 
		slide.src = image[pic].src;
	}
	else
	{
		pic--;
		slide.src = image[pic].src;
	}
}
function next()
{
	if(pic == 8)
	{
		pic = 0;
		slide.src = image[pic].src;
	}
	else
	{
		pic++;
		slide.src = image[pic].src;
	} 
}
