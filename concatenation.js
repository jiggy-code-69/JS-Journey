<!DOCTYPE html>
<html lang="en">
	<head>
    	<meta charset="utf-8">
    	<meta name="description" content="This app simulates when your parental unit is really mad at you">
    	<meta name="keywords" content="mom, dad, yell">

		<title>Angry Parent Simulator</title>

		<!-- external CSS link -->
		
	</head>
	<body>

		<h1>YOU DONE MESSED UP</h1>

		<form>
			<label for="firstName"> First Name: </label>
      <input id="firstName" type="text" placeholder="First Name"><br>
			<label for="firstMiddle"> First Middle Name: </label>
			<input id="firstMiddle" type="text" placeholder="First Middle Name"><br>
			<label for="lastMiddle"> Last Middle Name: </label>
			<input id="lastMiddle" type="text" placeholder="Last Middle Name"><br>
			<label for="lastName"> Last Name: </label>
			<input id="lastName" type="text" placeholder="Enter First Name">
		</form>

		<button id="yell" type="button" name="button">YELL</button>

		<h2 id="placeToYell"></h2>


		<script type="text/javascript" src="main.js">
      
      document.getElementById('yell').addEventListener('click', addString)

function addString(){
  
const fName = document.getElementById('firstName').value;
const fMid = document.getElementById('firstMiddle').value;
const lMid = document.getElementById('lastMiddle').value;
const lName = document.getElementById('lastName').value;

  document.getElementById('placeToYell').innerText = fName + ' ' + fMid + ' ' + lMid + ' ' + lName; 
}
</script>
	</body>
</html>
