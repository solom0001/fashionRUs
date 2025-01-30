let productContainer = document.querySelector(".product_grid");
fetch("https://kea-alt-del.dk/t7/api/products/1163")
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <div class="product-image">
                <img src="imgs/redJersey.webp" alt="pic2">
            </div>
            <div class="product-info">
                <h2>Product Information</h2>
                <h4>Model name:</h4>
                <p>${data.productdisplayname}</p>
                <h4>Color:</h4>
                <p>${colour1}</p>
                <h4>Inventory number:</h4>
                <p>1163</p>
                <h2>Nike</h2>
                <p>Nike, creating experiences for today’s athlete</p>
            </div>
            <div class="product-summary">
                <h2>Mean Team India Cricket Jersey</h2>
                <p>Nike | Tshirts</p>

                <label for="size">Choose a size:</label>
                <select id="size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <button>Add to basket</button>
            </div>
    `;
  });
