let contents = document.getElementById('tbl-bd')

let products = [
    {
        id:"1",
        Name:"Longboard",
        Description:"This is a 41-inch Cruiser Longboard",
        Image:"https://i.postimg.cc/wT97kTZ2/633e4672325eb33a4d376970-junli-41-inch-freeride-skateboard.jpg"
    },
    {
        id:"2",
        Name:"Cruiser",
        Description:"This is a cruiser skateboards",
        Image:"https://i.postimg.cc/W1c4Wpdt/WALNUT-SKATE-COMPLETES-OBFIVE-OB5-HNCWAL-1.jpg"
    },
    {
        id:"3",
        Name:"Dancing Longboard",
        Description:"This is a cruiser longboard for dancing",
        Image:"https://i.postimg.cc/kXSnrrSZ/btfl-longboards-sydney-dancer-komplett-longboard-45.png"
    },
    {
        id:"4",
        Name:"Santa Cruz freestyle",
        Description:"This is a freestyling skateboard",
        Image:"https://i.postimg.cc/fRbzy8gj/santa-cruz-classic-dot-mid-7-80-skate-completo.jpg"
    }
]

products.forEach(product => {
    contents.innerHTML += `
    <tr>
    <th scope="row">${product.id}</th>
    <td>${product.Name}</td>
    <td>${product.Description}</td>
    <td><img style="height: 70px;" src="${product.Image}"></td>
    <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
    <td><button type="button" class="btn btn-secondary btn-sm">Remove</button></td>
</tr>`
})