

var table=document.getElementById("myTable");
function createTable() {
	let row=prompt();
	let col=prompt();
	for (let i = 0; i < row; i++) {
		var rows = document.createElement("tr");
		for (let j = 0; j < col; j++) {
		var cols=document.createElement("td");
			cols.innerHTML = `Row-${i} Column-${j}`;
           rows.appendChild(cols);
		}
		table.appendChild(rows);
	}
		
	
	
}
