$(document).ready(function () {
  $.getJSON("menu.json", function (data) {
    output = `<ul class="none">`;

    for (let i in data) {
      output += `<li>`;
      output += dataToHTML(data[i]);
      output += `</li>`;
    }

    output += `</ul>`;
    $("#Menu").html(output);
  });
});

/* $("summary").click(function () {
  window.location = $(this).find("a").attr("href");
  return false;
}); */

function dataToHTML(data) {
  output = "";

  if (data.sub) {
    output = `<details>`;
    output += `<summary><i class="${data.id[1]} space" aria-hidden="true"></i>${data.id[0]}</summary><ul class="ulist">`;
    for (let i in data.sub) {
      output += `<li>`;
      output += dataToHTML(data.sub[i]);
      output += `</li>`;
    }
    output += `</details>`;
  } else {
    output = `<a href='#'><i class="${data.id[1]} space" aria-hidden="true"></i>${data.id[0]}</a>`;
  }

  return output;
}
