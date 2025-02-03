let listContainer = document.querySelector(".category_list_container");
fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (element) =>
        ` <div class="box">
                <a href="productlist.html?category=${element.category}">
                    <h2>${element.category}</h2>
                </a>
            </div>`
    )
    .join(" ");
  listContainer.innerHTML = markup;
}
