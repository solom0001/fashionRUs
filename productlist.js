const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const myCategory = searchParams.get("category");
const nyheader = document.querySelector("h1");

let productlistContainer = document.querySelector(".container");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  nyheader.textContent = data.length > 0 ? data[0].category : "No products found";
  const markup = data
    .map(
      (product) =>
        `<div class="card">

                        <div class="img_case">
                            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="placeholder">
                        </div>
                        <h4>${product.productdisplayname}</h4>
                        <h3>${product.category}|${product.subcategory}|${product.articletype}</h3>
                        <p>DKK ${product.price}</p>

                        <a href="product.html?id=${product.id}">Læse mere</a>
                        <div class="discount">
                            <p>34%</p>
                        </div>

                    </div>`
    )
    .join(" ");
  console.log(markup);
  productlistContainer.innerHTML = markup;
}
