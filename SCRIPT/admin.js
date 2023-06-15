let contents = document.getElementById('tbl-bd')

let products = [
    {
        id:"Longboard",
        Name:"Mac",
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
    }
]

products.forEach(product => {
    contents.innerHTML += `
    <tr>
    <th scope="row">${product.id}</th>
    <td>${product.Name}</td>
    <td>${product.Description}</td>
    <td>R${product.price}</td>
    <td><img style="height: 70px;" src="${product.Image}"></td>
    <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1${product.id}" fdprocessedid="23zym">Edit</button>

    <div class="modal fade" id="exampleModal1${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Insert Product Details</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="form" name="forms">
              <div class="mb-3">
                <label for="id" class="col-form-label">Cartegory:</label>
                <input type="text" class="form-control" name="id" id="product-idE${product.id}" placeholder="type of skateboard">
              </div>
              <div class="mb-3">
                <label for="Name" class="col-form-label">Name:</label>
                <input type="text" class="form-control" name="name" id="product-nameE${product.id}" placeholder="name of product">
              </div>
              <div class="mb-3">
                <label for="Description" class="col-form-label">Description:</label>
                <input type="text" class="form-control" name="discri" id="product-descriptE${product.id}" placeholder="Describe product">
              </div>
              <div class="mb-3">
                <label for="image" class="col-form-label">Image:</label>
                <input type="text" class="form-control" name="img" id="product-imgE${product.id}" placeholder="enter image URL">
              </div>
              <div class="mb-3">
                <label for="price" class="col-form-label">pricing:</label>
                <input type="text" class="form-control" name="price" id="product-priceE${product.id}" placeholder="price of prod e.g 2000">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <input id="insert" type="button" onclick="Edit()" value="Save changes">
          </div>
        </div>
      </div>
    </div></td>
    <td><button type="button" class="btn btn-secondary btn-sm" onclick="del_btn(${JSON.stringify(products)})">Remove</button></td>
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
let display = document.getElementById("prod-items")

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
    <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1${prod.id}" fdprocessedid="23zym">Edit</button>

    <div class="modal fade" id="exampleModal1${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Insert Product Details</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="form" name="forms">
              <div class="mb-3">
                <label for="id" class="col-form-label">Cartegory:</label>
                <input type="text" class="form-control" name="id" id="product-idE${prod.id}" placeholder="type of skateboard">
              </div>
              <div class="mb-3">
                <label for="Name" class="col-form-label">Name:</label>
                <input type="text" class="form-control" name="name" id="product-nameE${prod.id}" placeholder="name of product">
              </div>
              <div class="mb-3">
                <label for="Description" class="col-form-label">Description:</label>
                <input type="text" class="form-control" name="discri" id="product-descriptE${prod.id}" placeholder="Describe product">
              </div>
              <div class="mb-3">
                <label for="image" class="col-form-label">Image:</label>
                <input type="text" class="form-control" name="img" id="product-imgE${prod.id}" placeholder="enter image URL">
              </div>
              <div class="mb-3">
                <label for="price" class="col-form-label">pricing:</label>
                <input type="text" class="form-control" name="price" id="product-priceE${prod.id}" placeholder="price of prod e.g 2000">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <input id="insert" type="button" onclick="Edit()" value="Save changes">
          </div>
        </div>
      </div>
    </div></td>
    <td><button id="remove" type="button" class="btn btn-secondary btn-sm">Remove</button></td>
</tr>`
}


function Edit(product){
  this.id = document.querySelector(`#product-idE${product.id}`).value,
  this.Names = document.querySelector(`#product-nameE${product.id}`).value,
  this.Description = document.querySelector(`#product-descriptE${product.id}`).value,
  this.Images=  document.querySelector(`#product-imgE${product.id}`).value,
  this.Price = document.querySelector(`#product-priceE${product.id}`).value
  let change = products.findIndex(a =>{
    return a.id == product.id
  })
  products[change]= Object.assign({}, this)
  localStorage.setItem("products",JSON.stringify(products))
}

function save() {
  let local_prod = JSON.stringify(products)
  localStorage.setItem("products",local_prod)
  
}

function show() {
    let data =localStorage.getItem("products") 
    obj=JSON.parse(data); 
}



function deleting(){
    btn_remove = [...document.querySelectorAll("#remove")];
    btn_remove.forEach((products)=>{
        products.addEventListener("click", remove)
    })
}

function remove(event){
    display.innerHTML = "";
    let start_point = btn_remove.indexOf(event.target);
    featured_products.splice(start_point, 1);
    localStorage.setItem("products",local_prod);
    add()
}

/*const sortItem = document.querySelector("#sort-items");
function sortItems() {
  products = products.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    } else {
      return 1;
    }
  });
  contents.innerHTML = "";
  displayProducts();
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

function renderlist(){
    contents.innerHTML
    products
}