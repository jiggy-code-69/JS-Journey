<input type="text" id="search-input" placeholder="Search name...">

<!-- The table -->
<table>
  <thead>
    <tr>
      <th>Number</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><input type="checkbox" class="name-checkbox" />John</td>
    </tr>
    <tr>
      <td>2</td>
      <td><input type="checkbox" class="name-checkbox" />Jane</td>
    </tr>
    <tr>
      <td>3</td>
      <td><input type="checkbox" class="name-checkbox" />Bob</td>
    </tr>
    <tr>
      <td>4</td>
      <td><input type="checkbox" class="name-checkbox" />Alice</td>
    </tr>
  </tbody>
</table>

<!-- The search bar -->
// Get all the checkboxes with the class 'name-checkbox'
var checkboxes = document.querySelectorAll('.name-checkbox');

// Add a click event listener to each checkbox
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', function() {
    // Get the parent <tr> element of the clicked checkbox
    var row = this.parentNode.parentNode;

    // Get the name column <td> element
    var nameColumn = row.querySelector('td:nth-child(2)');

    // Uncheck all other checkboxes in the table
    for (var j = 0; j < checkboxes.length; j++) {
      if (checkboxes[j] !== this) {
        checkboxes[j].checked = false;
        checkboxes[j].parentNode.parentNode.querySelector('td:nth-child(2)').style.backgroundColor = 'white';
      }
    }

    // If the checkbox is checked, set the background color of the name column <td> element to yellow
    if (this.checked) {
      nameColumn.style.backgroundColor = 'yellow';
    } else {
      // If the checkbox is unchecked, remove the background color
      nameColumn.style.backgroundColor = 'white';
    }
  });
}

// Get the search input element
var searchInput = document.getElementById('search-input');

// Add a keyup event listener to the search input element
searchInput.addEventListener('keyup', function() {
  // Get the search query
  var searchQuery = this.value.toLowerCase();

  // Get all the name column <td> elements
  var nameColumns = document.querySelectorAll('td:nth-child(2)');

  // Loop through all the name column <td> elements
  for (var i = 0; i < nameColumns.length; i++) {
    var name = nameColumns[i].textContent.toLowerCase();

    // Check if the name contains the search query
    if (name.indexOf(searchQuery) !== -1) {
      // If it does, show the row
      nameColumns[i].parentNode.style.display = '';
    } else {
      // If it doesn't, hide the row
      nameColumns[i].parentNode.style.display = 'none';
    }
  }
});
