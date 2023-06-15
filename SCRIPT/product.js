//let items = document.getElementById("prod-item")
//items.innerHTML=localStorage.getItem("products") 

function product_list() {
    
    items.innerHTML+=`<div class="card" style=" margin: 10px; width: 18rem;">
   <img src="${Img.value}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${prod.Names}</h5>
     <p class="card-text">${prod.Description}</p>
     <p class="card-text">${prod.Price}</p>
     <a href="#" class="btn btn-primary">Buy Now</a>
   </div>
 </div>`
}