
<table class="demo">

	<thead>
	<tr>
		<th>Header 1</th>
		<th>Header 2</th>
		<th>Header 3</th>
		<th>Header 4</th>
		<th>Header 5</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
	</tr>
	<tr>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
	</tr>
	<tr>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
	</tr>
	<tr>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
	</tr>
	<tr>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
		<td>sfsdfsdfsf</td>
	</tr>
	<tbody>
</table>

<style>

	.demo {
		border: 1px solid #C0C0C0;
		border-collapse: collapse;
		padding: 5px;
	}
	.demo th {
		border: 1px solid #C0C0C0;
		padding: 5px;
		background: #F0F0F0;
	}
	.demo td {
		border: 1px solid #C0C0C0;
		padding: 5px;
	}
/* Hover effect */
#attnd-tb td:last-child{
  /* pointer-events: none; */
}
.demo td:hover{
  background-color: #6e95e9 !important;
  cursor: pointer;
  color:#fff !important;
  }
  .highlighted {
      background-color: #dde5f759 !important;
  }
  .demo tr:hover{
  background-color: #dde5f759 !important;
  }
  
  </style>
  
  
   $('.demo td').hover(function() {
            var t = parseInt($(this).index()) + 1;
            $('.demo td:nth-child(' + t + ')').addClass('highlighted');
        },
        function() {
            var t = parseInt($(this).index()) + 1;
            $('.demo td:nth-child(' + t + ')').removeClass('highlighted');
        });
