///////////////////// FUNCTION A TESTER APP No 1 ////////////////////
fetch('http://localhost:3000/api/cameras')
.then((resp) => resp.json())
.then(function (data) {
    showCameras(data);
})

// display num of items in cart
let cartNumber = localStorage.getItem('cartNumber');
productNumber = parseInt(cartNumber);
document.getElementById('spanCartNb').innerText = productNumber


///////////////////// FUNCTION A TESTER APP No 2 ////////////////////
function showCameras(data) {

    console.log(data);

    var mainContainer = document.getElementById("container");
    
    for (var i = 0; i < data.length; i++) {
        const card = `
        <div class="card mx-auto products" style="width: 18rem;">
            <img src="${data[i].imageUrl}" class="card-img-top" alt="${data[i].name}">
        <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <h5 class="card-price">${data[i].price/100}€</h5>
            <p class="card-text">${data[i].description}</p>
            <a href="product.html?id=${data[i]._id}" class="btn-shop link-id">Details</a>

        </div>
        </div>`;

      var container = document.getElementById("myData");
     
      document.getElementById("myData").innerHTML += card;      
    }
}
