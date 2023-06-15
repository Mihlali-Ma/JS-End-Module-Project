let contents = document.getElementById('tbl-bd')

let products = [
    /*{
        id:"1",
        Name:"Longboard",
        Description:"This is a 41-inch Cruiser Longboard",
        Image:"https://i.postimg.cc/wT97kTZ2/633e4672325eb33a4d376970-junli-41-inch-freeride-skateboard.jpg",
        price:2500.00
    },
    {
        id:"2",
        Name:"Cruiser",
        Description:"This is a cruiser skateboards",
        Image:"https://i.postimg.cc/W1c4Wpdt/WALNUT-SKATE-COMPLETES-OBFIVE-OB5-HNCWAL-1.jpg",
        price:3000.00
    },
    {
        id:"3",
        Name:"Dancing Longboard",
        Description:"This is a cruiser longboard for dancing",
        Image:"https://i.postimg.cc/kXSnrrSZ/btfl-longboards-sydney-dancer-komplett-longboard-45.png",
        price:3500.00
    },
    {
        id:"4",
        Name:"Santa Cruz freestyle",
        Description:"This is a freestyling skateboard",
        Image:"https://i.postimg.cc/fRbzy8gj/santa-cruz-classic-dot-mid-7-80-skate-completo.jpg",
        price:4000.00
    }*/
]

products.forEach(product => {
    contents.innerHTML += `
    <tr>
    <th scope="row">${product.id}</th>
    <td>${product.Name}</td>
    <td>${product.Description}</td>
    <td>R${product.price}</td>
    <td><img style="height: 70px;" src="${product.Image}"></td>
    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
    <td><button type="button" class="btn btn-secondary btn-sm">Remove</button></td>
</tr>`
})


//DOM
let form = document.getElementById("form")
let id = document.getElementById("product-id")
let Name = document.getElementById("product-name")
let Describe = document.getElementById("product-descript")
let Img = document.getElementById("product-img")
let price = document.getElementById("product-price")
document.getElementById("insert")
let btn_remove= document.getElementById("remove")


//ADD function
function add() {
    let prod = {
        id:id.value,
        Names:Name.value,
        Description:Describe.value,
        Images:Img.value,
        Price:price.value

    }
    id.value=prod.id;
    Name.value=prod.Names;
    Describe.value=prod.Description;
    Img.value=prod.Images;
    price.value=prod.Price;
    products.push(prod)
    
    console.log(products);
    save()
    contents.innerHTML += `
    <tr>
    <th scope="row">${prod.id}</th>
    <td>${prod.Names}</td>
    <td>${prod.Description}</td>
    <td>R${prod.Price}</td>
    <td><img style="height: 70px;" src="${Img.value}"></td>
    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
    <td><button id="remove" type="button" class="btn btn-secondary btn-sm" onclick="delete_products()">Remove</button></td>
</tr>`

   

}



function save() {
    localStorage.setItem("products",contents.innerHTML)
}

function show() {
    contents.innerHTML=localStorage.getItem("products")    
}

show()

/*function del_btn(){
    btn_remove = [...document.querySelectorAll("#remove")];
    btn_remove.forEach((products)=>{
        products.addEventListener("click", delete_products)
    })
}

function delete_products(event){
    display.innerHTML = "";
    let start_point = btn_remove.indexOf(event.target);
    featured_products.splice(0, 1);
    localStorage.setItem("products",contents.innerHTML);
    add()
}*/

const sortItem = document.querySelector("#sort-items");
function sortItems() {
  products = products.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    } else {
      return 1;
    }
  });
  console.log(products);
  add()
  save()
  show()
  
}

/*=const sortItem = document.querySelector("#sort");
function sortItems() {
  products = products.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });
  prodList.innerHTML = "";
  displayProducts();
  console.log("hi");
  displayProducts();.0*/