let productlistContainer = document.querySelector(".container");
fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
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

                        <a href="product.html">Læse mere</a>
                        <div class="discount">
                            <p>34%</p>
                        </div>

                    </div>`
    )
    .join(" ");
  productlistContainer.innerHTML = markup;
}
