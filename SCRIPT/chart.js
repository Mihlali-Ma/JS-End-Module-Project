let hello = document.getElementById("hi")
let names = document.querySelector(".card-title")
let descri = document.querySelector(".card-text")
let pricing = document.querySelector("#costs")
let imag = document.querySelector("#images")

let checkout_items=[
   
]
let result = document.getElementById("output")
function add_cart() {
       contents.innerHTML=localStorage.getItem("products")    
       let prod = {
        Names:Name.value,
        Description:Describe.value,
        Images:Img.value,
        Price:price.value
    }
    //test1
    Name.value=prod.Names;
    Describe.value=prod.Description;
    Img.value=prod.Images;
    price.value=prod.Price;
    checkout_items.push(prod)
    console.log(products);
    result.innerHTML += `
    <tr>
        <td>${prod.Names}</td>
        <td>${prod.Description}</td>
        <td>R${prod.Price}</td>
        <td><img style="height: 70px;" src="${Img.value}"></td>
        <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
        <td><button id="remove" type="button" class="btn btn-secondary btn-sm" onclick="delete_products()">Remove</button></td>
    </tr>`
    
    //test2
   /* chart= {
        prodName:names,
        Img:imag,
        discript:descri,
        prices:pricing
    }
    checkout_items.push(chart)
    result.innerHTML +=``*/
    
}
