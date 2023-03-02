<!doctype html>
<html lang="en-us">
<head>
	<meta charset="utf-8">
	<title>Bachelor Code</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1>Who has the final rose?: </h1>

		<h2 class="contestant ">Claire</h2>
		<h2 class="contestant rose">Nikki</h2>
	</header>
 
	<section>
		<img id="claire" class="hidden" src="https://cdn.glitch.global/c85b3f4f-e0a6-468a-93fd-4d83b66a471f/claire.jpg?v=1672049832083">
		<img id="nikki" class="hidden" src="https://cdn.glitch.global/c85b3f4f-e0a6-468a-93fd-4d83b66a471f/nikki.jpg?v=1672049837245">
	</section>

	<script src="script.js"></script>
</body>
</html>


<script>
const contestants = document.querySelectorAll('.contestant');
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose));

function checkForRose(click){
  if(click.target.classList.contains('rose')){
    document.getElementById('nikki').classList.toggle('hidden');
  }
  else{
    alert('wrong');
  }
}
</script>
