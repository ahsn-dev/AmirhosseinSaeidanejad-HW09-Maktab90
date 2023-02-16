const products = [
  {
    id: 1,
    name: "همبرگر معمولی",
    price: 8000,
    image: "./img/hamburger.png",
  },
  {
    id: 2,
    name: "همبرگر مخصوص",
    price: 10000,
    image: "./img/hamburger.png",
  },
  {
    id: 3,
    name: "همبرگر معمولی با قارچ و پنیر",
    price: 10000,
    image: "./img/hamburger.png",
  },
  {
    id: 4,
    name: "همبرگر مخصوص با قارچ و پنیر",
    price: 20000,
    image: "./img/hamburger.png",
  },
  {
    id: 5,
    name: "سیب زمینی سرخ کرده ویژه",
    price: 25000,
    image: "./img/french_fries.png",
  },
  {
    id: 6,
    name: "سیب زمینی سرخ کرده",
    price: 10000,
    image: "./img/french_fries.png",
  },
  {
    id: 7,
    name: "نوشابه رژیمی",
    price: 6000,
    image: "./img/soda.png",
  },
  {
    id: 8,
    name: "نوشابه",
    price: 5000,
    image: "./img/soda.png",
  },
  {
    id: 9,
    name: "سالاد فصل",
    price: 8000,
    image: "./img/salad.png",
  },
  {
    id: 10,
    name: "سالاد سزار",
    price: 25000,
    image: "./img/ceasar.png",
  },
  {
    id: 11,
    name: "سالاد فصل",
    price: 8000,
    image: "./img/salad.png",
  },
  {
    id: 12,
    name: "سالاد سزار",
    price: 25000,
    image: "./img/ceasar.png",
  },
];

let cart = {
  items: [],
  total: 0,
};

const renderProducts = () => {
  const productDiv = document.getElementById("products");
  productDiv.innerHTML = "";

  products.forEach((item, index) => {
    productDiv.innerHTML += `
          <div class="col mt-2">
          <div
            class="d-flex justify-content-between bg-white px-2 py-1 rounded"
          >
            <div class="d-flex align-items-center">
              <img src="${item.image}" />
              <div class="d-flex flex-column">
                <span class="fw-bold">${item.name}</span>
                <span>${item.price} تومان</span>
                <div dir="ltr" class="align-self-start btn-group mt-3">
                  <button
                  onclick="removeFromCart(${index})"
                    class="d-flex justify-content-center align-items-center btn btn-danger btn-sm">
                    <ion-icon name="remove-outline"></ion-icon>
                  </button>
                  <span id="itemCount-${index}"
                  class="qty orderCount d-flex justify-content-center align-items-center count-number text-center bg-body-tertiary">
                  0
                  </span>              
                  <button
                    onclick="addToCart(${index})"
                    class="d-flex justify-content-center align-items-center btn btn-danger btn-sm">
                    <ion-icon name="add-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
            <div class="d-flex align-self-end text-start">
            <span id="itemCost-${index}" class="item-cost">۰ تومان</span>
            </div>
          </div>
        </div>`;
  });
};

const renderCartItems = () => {
  const totalPriceEl = document.getElementById("totalPrice");
  const serviceCharge = document.getElementById("serviceCharge");
  const discountCode = document.getElementById("discountCode").value;
  let totalPrice = 0;

  if (cart.items.length === 0) {
    totalPriceEl.innerHTML = "۰ تومان";
    serviceCharge.innerHTML = "۰ تومان";
  }

  cart.items.forEach((item) => {
    totalPrice += item.total;
  });

  let discountPercent = 0;

  if (discountCode === "golden") {
    discountPercent = 30;
  } else if (discountCode === "silver") {
    discountPercent = 20;
  } else if (discountCode === "bronze") {
    discountPercent = 10;
  }

  const discountAmount = (totalPrice * discountPercent) / 100;
  const finalPrice = totalPrice - discountAmount;

  totalPriceEl.innerHTML = `${finalPrice} تومان`;
  serviceCharge.innerHTML = `${finalPrice * 0.05} تومان`;
  document.getElementById("discount").innerHTML = `${discountPercent} درصد`;

  // Set the payableAmount paragraph to the final price
  document.getElementById("payableAmount").textContent = `${finalPrice} تومان`;
};

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", renderCartItems);

const addToCart = (productIndex) => {
  const product = products[productIndex];

  let existingProduct = false;

  let newCartItems = cart.items.reduce((state, item) => {
    if (item.name === product.name) {
      existingProduct = true;

      const newItem = {
        ...item,
        qty: item.qty + 1,
        total: (item.qty + 1) * item.price,
      };
      return [...state, newItem];
    }
    return [...state, item];
  }, []);

  if (!existingProduct) {
    newCartItems.push({
      ...product,
      qty: 1,
      total: product.price,
    });
  }

  cart = {
    ...cart,
    items: newCartItems,
  };

  const countSpan = document.getElementById(`itemCount-${productIndex}`);
  const itemCount =
    newCartItems.find((item) => item.name === product.name)?.qty || 0;
  countSpan.textContent = itemCount;

  const costSpan = document.getElementById(`itemCost-${productIndex}`);
  const itemCost =
    newCartItems.find((item) => item.name === product.name)?.total || 0;
  costSpan.textContent = `${itemCost} تومان`;

  renderCartItems();
};

const removeFromCart = (productIndex) => {
  const product = products[productIndex];

  let newCartItems = cart.items.reduce((state, item) => {
    if (item.name === product.name) {
      const newItem = {
        ...item,
        qty: item.qty - 1,
        total: (item.qty - 1) * item.price,
      };
      if (newItem.qty > 0) {
        return [...state, newItem];
      } else {
        return state;
      }
    }
    return [...state, item];
  }, []);

  cart = {
    ...cart,
    items: newCartItems,
  };

  const countSpan = document.getElementById(`itemCount-${productIndex}`);
  const itemCount =
    newCartItems.find((item) => item.name === product.name)?.qty || 0;
  countSpan.textContent = itemCount;

  const costSpan = document.getElementById(`itemCost-${productIndex}`);
  const itemCost =
    newCartItems.find((item) => item.name === product.name)?.total || 0;
  costSpan.textContent = `${itemCost} تومان`;

  renderCartItems();
};

renderProducts();
renderCartItems();

const resetElements = () => {
  for (let i = 0; i < products.length; i++) {
    document.getElementById(`itemCost-${i}`).textContent = "۰ تومان";
    document.getElementById(`itemCount-${i}`).textContent = "0";
  }

  document.getElementById("totalPrice").textContent = "۰ تومان";
  document.getElementById("serviceCharge").textContent = "۰ تومان";
  document.getElementById("discount").textContent = "۰ درصد";
  document.getElementById("discountCode").value = "";
  document.getElementById("payableAmount").textContent = "۰ تومان";
};

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", resetElements);
