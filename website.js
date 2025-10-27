
    const cartButtons = document.querySelectorAll('.add-to-cart');
    
    cartButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const productId = this.dataset.id;
    
        // Simulate adding 1 of that item
        cart.push({ id: productId, quantity: 1 });
    
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
      });
    });
   

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const countEl = document.getElementById("cart-count");
    if (countEl) countEl.textContent = count;
  }

  window.removeItem = function (index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    updateCartCount();
  };
  
  window.updateQty = function (index, qty) {
    cart[index].quantity = parseInt(qty);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    updateCartCount();
  };

  window.removeItem = function (index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // will reload the page
  };


 





  