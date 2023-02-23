<!DOCTYPE html>
<html lang="en">
	<head>
    	<meta charset="utf-8">
    	<meta name="description" content="This app lets you know today is class, the weekend, or a boring day">
    	<meta name="keywords" content="class, weekend, boring">

		<title>What is today?</title>

	</head>
	<body>

		<h1>What is today?</h1>

		<form>
			<label for="day"> Day of the week: </label>
			<input id="day" type="text" placeholder="Day of the week">
		</form>

		<button id="checkBtn" type="button" name="button">check</button>

		<h2 id="placeToSee"></h2>


		<script type="text/javascript">
      document.getElementById('checkBtn').addEventListener('click', whatIsToday)

function whatIsToday(){
  const day = document.getElementById('day').value.toLowerCase();
  
  if((day === 'monday') || (day === 'tuesday')){
     document.getElementById('placeToSee').innerText = day + ' is a working day';
     }
    else if((day === 'wednesday') || (day === 'thursday')){
     document.getElementById('placeToSee').innerText = day + 'is a boring day';
     }
     else if((day === 'friday') || (day === 'saturday') || (day === 'sunday')){
     document.getElementById('placeToSee').innerText = `It's Partyyy Time`;
     }

}


      </script>
	</body>
</html>
