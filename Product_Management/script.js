const addProductBtn = document.querySelector("#addProduct")
addProductBtn.addEventListener("click",function(){

})

const products = [
      {
        id: 1,
        name: "Laptop",
        description: "High performance laptop",
        price: "$1200",
        imageUrl: "https://via.placeholder.com/50"
      },
      {
        id: 2,
        name: "Phone",
        description: "Smartphone with great camera",
        price: "$800",
        imageUrl: "https://via.placeholder.com/50"
      },
      {
        id: 3,
        name: "Headphones",
        description: "Noise-cancelling headphones",
        price: "$150",
        imageUrl: "https://via.placeholder.com/50"
      },
      {
        id: 4,
        name: "Covers",
        description: "Noise-cancelling headphones",
        price: "$150",
        imageUrl: "https://via.placeholder.com/50"
      },
      {
        id: 5,
        name: "Power Bank",
        description: "Noise-cancelling headphones",
        price: "$150",
        imageUrl: "https://via.placeholder.com/50"
      },
      {
        id: 6,
        name: "Adapters",
        description: "Noise-cancelling headphones",
        price: "$150",
        imageUrl: "https://via.placeholder.com/50"
      }
    ];


function renderProducts()