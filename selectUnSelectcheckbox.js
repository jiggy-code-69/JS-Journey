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
      <td><input type="checkbox" class="name-checkbox" name="name1" value="John">John</input></td>
    </tr>
    <tr>
      <td>2</td>
      <td><input type="checkbox" class="name-checkbox" name="name2" value="Jane">Jane</input></td>
    </tr>
    <tr>
      <td>3</td>
      <td><input type="checkbox" class="name-checkbox" name="name3" value="Bob">Bob</input></td>
    </tr>
    <!-- Add additional rows as needed -->
  </tbody>
</table>


js part

// Get all the checkboxes with the class 'name-checkbox'
var checkboxes = document.querySelectorAll('.name-checkbox');

// Loop through the checkboxes and add a click event listener to each one
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
