

const products = [];


//Factory funtion for adding products
const addProduct = (id, productImg, productTitle, ProductDiscription,src) => {
    const product = {
        id,
        productImg,
        productTitle,
        ProductDiscription,
        src
    }
   products.push(product);
};


//Add Products
addProduct("1","./image/food1.jpg","Card title","This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","./newpage.html");
addProduct("2","./image/food2.jpg","Card title","This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","./newpage.html");
addProduct("3","./image/food3.jpg","Card title","This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","./newpage.html");


//fuction for generate product html

const createHtml = (id, productImg, productTitle, ProductDiscription,src) => {
    const html = `<div class="card mx-2 bg-dark" id=${id}>
    <img src="${productImg}" class="card-img-top border-bottom border-danger border-3" alt="...">
    <div class="card-body">
      <h5 class="card-title">${productTitle}</h5>
      <p class="card-text text-secondary">${ProductDiscription}</p>
      <a href="${src}" target="_blank" class="card-link text-white">READ MORE</a>
    </div>
  </div>`;
  return html;

};

//Function for display products on screem
const render = () => {
     // Generate HTML for each product and join
     let productsToRender = "";
     products.forEach((item) => {
         const Newproduct = createHtml(item.id, item.productImg, item.productTitle, item.ProductDiscription,item.src);
        productsToRender += Newproduct;
    });
     // Set HTML to render products
     document.getElementById("row").innerHTML = productsToRender;

}

render();


