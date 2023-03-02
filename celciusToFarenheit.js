fetchCelcius<h4>Celcius</h4>
<input type="number" id="fetchCelcius" placeholder="enter tempreature">
<br>
<br>
<button id="convertToFar">Convert to Farenheit</button>

<h1 id="displayTemp"></h1>

<script>
  
  document.getElementById('convertToFar').addEventListener('click', temp)

function temp(){
  celcius = document.getElementById('fetchCelcius').value
  document.getElementById('displayTemp').innerText = celcius * 9/5 + 32;
}

</script>
