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


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Table</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-4">
    <table class="table table-bordered">
      <thead class="table-light">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="productTableBody">
        <!-- JS will populate here -->
      </tbody>
    </table>
  </div>

  <script>
    // Array of products
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
      }
    ];

    // Function to render products into the table
    function renderProducts() {
      const tbody = document.getElementById("productTableBody");
      tbody.innerHTML = ""; // clear existing rows

      products.forEach(product => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.description}</td>
          <td>${product.price}</td>
          <td><img src="${product.imageUrl}" alt="${product.name}" width="50"></td>
          <td>
            <button class="btn btn-sm btn-primary me-1" onclick="editProduct(${product.id})">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">
              <i class="bi bi-trash3"></i>
            </button>
          </td>
        `;

        tbody.appendChild(tr);
      });
    }

    // Edit product function
    function editProduct(id) {
      const product = products.find(p => p.id === id);
      if (product) {
        alert(`Edit product: ${product.name}`);
        // Here you can open modal or form to edit
      }
    }

    // Delete product function
    function deleteProduct(id) {
      const index = products.findIndex(p => p.id === id);
      if (index !== -1) {
        products.splice(index, 1);
        renderProducts(); // re-render table after deletion
      }
    }

    // Initial render
    renderProducts();
  </script>
</body>
</html>