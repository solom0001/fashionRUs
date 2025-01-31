let productId = 1163;
let productContainer = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  productContainer.innerHTML = `
     <div class="product_grid">
    <div class="product-image">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="pic2">
            </div>
            <div class="product-info">
                <h2>Product Information</h2>
                <h4>Model name:</h4>
                <p>${data.productdisplayname}</p>
                <h4>Color:</h4>
                <p>${data.basecolour}</p>

                <h4>Other name:</h4>
                <p>${data.variantname}</p>
                <h2>${data.brandname}</h2>
                <p>${data.brandbio}</p>
            </div>
            <div class="product-summary">
                <p>${data.description}</p>

                <h4>Category:</h4>
                <p>${data.category} | ${data.subcategory} | ${data.articletype}</p>

                <div class="sizefit_box">
                <label for="size"><b> Choose a size:</b></label>
                <select id="size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <button>Add to basket</button>
                </div>
            </div>
            </div>
    `;
}
