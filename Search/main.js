var search = document.getElementById("search");
const listArray = document.getElementById("listArray");

async function searchText(text) {
  const response = await fetch("data.json");
  const data = await response.json();
  let matches = data.filter((x) => {
    const regex = new RegExp(`^${text}`, "gi");
    return x.name.match(regex);
  });
  if (text === "") {
    listArray.innerHTML = "";
    matches = "";
  }
  showList(matches);
}
function showList(data) {
  if (data.length > 0) {
    const list = data
      .map(
        (x) => `<ul>
    <li>${x.name}</li>
    </ul>`
      )
      .join("");
    listArray.innerHTML = list;
  } else {
    listArray.innerHTML = "";
  }
}
search.addEventListener("input", () => searchText(search.value));
