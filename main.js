table = document.getElementById("table");
table.innerHTML = "<tr><th>Topic</th><th>Skills</th></tr>";

for (let i in data_table) {
	let data = data_table[i];
	let dir =  "./src/" + data.dir;

	let row = `<tr><td><a href="${dir}">${data.topic}</a></td><td><a href="${dir}">${data.skill}</a></td></tr>`
	table.innerHTML += row;
}