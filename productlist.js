const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const myCategory = searchParams.get("category");
const nyheader = document.querySelector("h1");

let productlistContainer = document.querySelector(".container");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  //nyheader.textContent = data.length > 0 ? data[0].category : "No products found";

  const markup = data
    .map(
      (product) =>
        `
      <div class="card ${product.soldout ? "sold-img" : ""}">

                        <div class="img_case">
                            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="placeholder">

                            
                        </div>
                        
                        <h4>${product.productdisplayname}</h4>
                        <h3>${product.articletype}|${product.brandname}</h3>
                        <div>
                        <p class="price ${product.discount && "decor"}">DKK ${product.price},-</p>
                        <div class="nyprice ${product.discount && "vis"}">
                        <p> Now DKK ${product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price},-</p></div>
                        </div>
                        <a href="product.html?id=${product.id}">Read more</a>
 
                
                  <div class="discount ${product.discount && "vis"}">
                            <p>-${product.discount}%</p></div>
            

                    

                     <div class="sold ${product.soldout ? "vis" : ""}">
                            <p>SoldOut!</p></div>
            

                    </div>
                    
                     `
    )
    .join(" ");

  productlistContainer.innerHTML = markup;
}
