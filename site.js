var cartItems = [];
var totalPrice = 0;
var weightHoney = 0;
var weightThymeHoney = 0;

function addToCart(productName, productPrice) {
  var productIndex = findProductIndex(productName);

  if (productIndex !== -1) {
    // Το προϊόν υπάρχει ήδη στο καλάθι
    if (productName === "Μέλι Ελάτου") {
      cartItems[productIndex].weight += weightHoney;
    } else if (productName === "Θυμαρίσιο μέλι") {
      cartItems[productIndex].weight += weightThymeHoney;
    }
  } else {
    // Προσθέτουμε ένα νέο προϊόν στο καλάθι
    var newProduct = {
      name: productName,
      weight: 0
    };
    if (productName === "Μέλι Ελάτου") {
      newProduct.weight = weightHoney;
    } else if (productName === "Θυμαρίσιο μέλι") {
      newProduct.weight = weightThymeHoney;
    }
    cartItems.push(newProduct);
  }

  if (productName === "Μέλι Ελάτου") {
    totalPrice += productPrice * weightHoney;
    weightHoney = 0;
  } else if (productName === "Θυμαρίσιο μέλι") {
    totalPrice += productPrice * weightThymeHoney;
    weightThymeHoney = 0;
  }

  var cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";

  for (var i = 0; i < cartItems.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = cartItems[i].name + " (" + cartItems[i].weight + " κιλά)";
    cartList.appendChild(listItem);
  }

  var totalText = "Συνολική τιμή: " + totalPrice + " ευρώ";
  document.getElementById("totalPrice").textContent = totalText;

  updateWeightDisplay(productName);
}

function checkout() {
  alert("Η αγορά σας ολοκληρώθηκε! Συνολική τιμή: " + totalPrice + " ευρώ");

  cartItems = [];
  totalPrice = 0;
  weightHoney = 0;
  weightThymeHoney = 0;

  var cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";

  var totalText = "Συνολική τιμή: " + totalPrice + " ευρώ";
  document.getElementById("totalPrice").textContent = totalText;
}

function increaseWeight(productDivId) {
  if (productDivId === "product1") {
    weightHoney += 1;
    updateWeightDisplay("Μέλι Ελάτου");
  } else if (productDivId === "product2") {
    weightThymeHoney += 1;
    updateWeightDisplay("Θυμαρίσιο μέλι");
  }
}

function decreaseWeight(productDivId) {
  if (productDivId === "product1" && weightHoney > 0) {
    weightHoney -= 1;
    updateWeightDisplay("Μέλι Ελάτου");
  } else if (productDivId === "product2" && weightThymeHoney > 0) {
    weightThymeHoney -= 1;
    updateWeightDisplay("Θυμαρίσιο μέλι");
  }
}

function updateWeightDisplay(productName) {
  var weightDisplay;

  if (productName === "Μέλι Ελάτου") {
    weightDisplay = document.getElementById("weightDisplay");
    weightDisplay.textContent = "Κιλά: " + weightHoney;
  } else if (productName === "Θυμαρίσιο μέλι") {
    weightDisplay = document.getElementById("weightDisplay2");
    weightDisplay.textContent = "Κιλά: " + weightThymeHoney;
  }
}

function clearCart() {
  cartItems = [];
  totalPrice = 0;
  weightHoney = 0;
  weightThymeHoney = 0;

  var cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";

  var totalText = "Συνολική τιμή: " + totalPrice + " ευρώ";
  document.getElementById("totalPrice").textContent = totalText;
}

function findProductIndex(productName) {
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === productName) {
      return i;
    }
  }
  return -1;
}
