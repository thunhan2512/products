const products = [
  { name: "iPhone 15 Pro Max", brand: "Apple", price: 29590000 },
  { name: "iPhone 13", brand: "Apple", price: 13500000 },
  { name: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: 26990000 },
  { name: "Samsung Galaxy A54", brand: "Samsung", price: 8500000 },
  { name: "Oppo Reno 11", brand: "Oppo", price: 10990000 },
];

function render(productList) {
  const container = document.getElementById("product-container");
  const html = productList
    .map(
      (item) => `
    <div class="product-card">
      <h3>${item.name}</h3>
      <p>Thương hiệu: ${item.brand}</p>
      <p>Giá: ${item.price.toLocaleString("vi-VN")} ₫</p>
    </div>
  `,
    )
    .join("");

  container.innerHTML = html;
}

function showAll() {
  render(products);
}

function filterPrice() {
  const filterproduct = products.filter((item) => item.price <= 20000000);
  render(filterproduct);
}

showAll();
