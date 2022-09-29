let http = new XMLHttpRequest();
http.open('get', 'products.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         output += `
         <div class="pro">
        <img src="${item.image}" alt="${item.image}">
        <div class="des">
            <span> adidas</span>
            <h5>${item.title}</h5>
        <div class="star">
            <span class="material-icons-outlined" id="star">star</span>
            <span class="material-icons-outlined" id="star">star</span>
            <span class="material-icons-outlined" id="star">star</span>
            <span class="material-icons-outlined" id="star">star</span>
            <span class="material-icons-outlined" id="star">star</span>

        </div>
        <h4>${item.price}$$</h4>
    </div>
    <a href="#" class="cart"><span class="material-icons-outlined">shopping_cart</span></a>
    </div>
    `;
      }
      document.querySelector(".pro-container").innerHTML = output;
   }
}
