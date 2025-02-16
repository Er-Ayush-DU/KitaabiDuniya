var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



function toggleFAQ(index) {
  var answer = document.getElementById('faq' + index);
  var icon = document.getElementById('icon' + index);

  if (answer.style.display === 'none' || answer.style.display === '') {
    answer.style.display = 'block';
    icon.classList.remove('bi-plus-lg');
    icon.classList.add('bi-dash-lg');
  } else {
    answer.style.display = 'none';
    icon.classList.remove('bi-dash-lg');
    icon.classList.add('bi-plus-lg');
  }
}


document.addEventListener("DOMContentLoaded", function () {
  // Price data in an array (original price and discounted price for each book)
  let books = [
    { original: 492.00, discount: 410.00 },
    { original: 140.00, discount: 70.00 },
    { original: 250.00, discount: 200.00 },
    { original: 300.00, discount: 100.00 },
    { original: 1000.00, discount: 460.00 },
    { original: 826.00, discount: 700.00 },
    { original: 600.00, discount: 240.00 },
    { original: 520.00, discount: 499.00 },
    { original: 492.00, discount: 410.00 },
    { original: 140.00, discount: 70.00 },
    { original: 250.00, discount: 200.00 },
    { original: 300.00, discount: 100.00 },
    { original: 1000.00, discount: 460.00 },
    { original: 826.00, discount: 700.00 },
    { original: 600.00, discount: 240.00 },
    { original: 520.00, discount: 499.00 }
  ];

  // Select all book price sections
  let bookPriceElements = document.querySelectorAll(".sale-price");

  // Loop through each book and update the price
  bookPriceElements.forEach((priceElement, index) => {
    if (books[index]) {
      let originalPriceElement = priceElement.querySelector("del");
      let discountedPriceElement = priceElement.querySelector("ins bdi");

      if (originalPriceElement) {
        originalPriceElement.innerHTML = `<span class="woocommerce-Price-amount amount">
          <bdi><span class="woocommerce-Price-currencySymbol">₹</span>${books[index].original.toFixed(2)}</bdi>
        </span>`;
      }

      if (discountedPriceElement) {
        discountedPriceElement.innerHTML = `<span class="woocommerce-Price-currencySymbol">₹</span>${books[index].discount.toFixed(2)}`;
      }
    }
  });

  // Remove extra quotes from price display
  document.querySelectorAll(".woocommerce-Price-amount bdi").forEach(el => {
    el.innerHTML = el.innerHTML.replace(/["']/g, ''); // Remove quotes
  });
});

