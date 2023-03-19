<table id="myTable">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
      <th>Header 4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox" id="checkbox1" class="checkbox">dsf</td>
      <td>asdasd</td>
      <td>qwert</td>
      <td>hghdf</td>
    </tr>
    <tr>
      <td><input type="checkbox" id="checkbox2" class="checkbox"></td>
      <td> Column 1</td>
      <td> Column 2</td>
      <td> Column 3</td>
    </tr>
    <tr>
      <td><input type="checkbox" id="checkbox3" class="checkbox"></td>
      <td> Column 1</td>
      <td> Column 2</td>
      <td> Column 3</td>
    </tr>
    <tr>
      <td><input type="checkbox" id="checkbox4" class="checkbox"></td>
      <td> Column 1</td>
      <td> Column 2</td>
      <td> Column 3</td>
    </tr>
    <tr>
      <td><input type="checkbox" id="checkbox5" class="checkbox"></td>
      <td> Column 1</td>
      <td> Column 2</td>
      <td> Column 3</td>
    </tr>
    <tr>
      <td><input type="checkbox" id="checkbox6" class="checkbox"></td>
      <td> Column 1</td>
      <td> Column 2</td>
      <td> Column 3</td>
    </tr>
    <tr>
      <td><input type="checkbox" id="checkbox7" class="checkbox"></td>
      <td> Column 1</td>
      <td> Column 2</td>
      <td> Column 3</td>
    </tr>
    <tr>
      <td><input type="checkbox" id="checkbox8" class="checkbox"></td>
      <td> Column 1</td>
      <td> Column 2</td>
      <td> Column 3</td>
    </tr>
  </tbody>
</table>

<button class="btn" id="submit-btn" type="button">Submit</button>





<style>
table {
  border-collapse: collapse;
  width: 100%;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  font-size: 14px;
}

th, td {
  text-align: left;
  padding: 12px;
  border: 1px solid #ddd;
}

th {
  background-color: #4CAF50;
  color: white;
}

tr:hover {
  background-color: #f5f5f5;
}

.checkbox {
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
}
.selected {
  background-color: blue;
}

.selected:hover {
  background-color: blue;
}
.btn {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-right: 20px;
  float: right;
}

.btn:hover {
  background-color: #3e8e41;
  cursor: pointer;
}


</style>







const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', function() {
    // Uncheck previously selected checkbox
    const prevSelected = document.querySelector('.selected input[type="checkbox"]:checked');
    if (prevSelected && prevSelected !== checkbox) {
      prevSelected.checked = false;
      prevSelected.parentElement.parentElement.classList.remove('selected');
    }
    
    // Toggle selected class on clicked checkbox row
    this.parentElement.parentElement.classList.toggle('selected');
  });
});


const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function() {
  const selectedCheckbox = document.querySelector('.selected input[type="checkbox"]');
  
  if (selectedCheckbox) {
    const columnData = selectedCheckbox.parentElement.nextElementSibling.nextElementSibling;
    const selectedData = columnData.parentElement.children[0].textContent;
    
    Swal.fire({
      title: 'Selected Data',
      text: `You have selected: ${selectedData}`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } else {
    Swal.fire({
      title: 'No Data Selected',
      text: 'Please select a row before clicking submit.',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
  }
});
