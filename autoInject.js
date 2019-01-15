	<html>

	<head>

	<title>Event!!!</title>

	<script type="text/javascript">

	function trigger()

	{

	document.getElementById("hover").addEventListener("mouseover", popup);

	function popup()

	{

	alert("Welcome to my WebPage!!!");

	}

	}

	</script>

	<style>

	p

	{

	     font-size:50px;

	     position: fixed;

	     left: 550px;

	     top: 300px;

	}

	</style>

	</head>

	<body  onload="trigger();">

	<p id="hover">Welcome!!!</p>

	</body>

	</html>
 
 <html> 
<head> 
<title>t1</title> 
<script type="text/javascript"> 
	function addNode() { var newP = document.createElement("p"); 
	var textNode = document.createTextNode(" This is a new text node"); 
	newP.appendChild(textNode); document.getElementById("firstP").appendChild(newP); } 
</script> </head> 
<body> <p id="firstP">firstP<p> </body> 
</html>

var x=1, y=2,
z=
x+y;
document.getElementById("myText").className = "anyclass";
