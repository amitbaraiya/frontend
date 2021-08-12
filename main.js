table = document.getElementById("table");
table.innerHTML = "<tr><th>Topic</th><th>Skills</th></tr>";

for (let i in data_table) {
	let data = data_table[i];
	let dir =  "./src/" + data.dir;

	let row = `<tr><td><a href="${dir}">${data.topic}</a></td><td><a href="${dir}">${data.skill}</a></td></tr>`
	table.innerHTML += row;
}

table = document.getElementById("tasks");
table.innerHTML = "<tr><th>Task Name</th></tr>";

for (let i in data_table) {
	let data = seocnd_table[i];
	let dir =  "./srctwo/" + data.dir;

	let row = `<tr><td><a href="${dir}">${data.topic}</a></td></tr>`
	table.innerHTML += row;
}