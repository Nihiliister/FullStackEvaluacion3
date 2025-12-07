export function getCart() {
  return JSON.parse(localStorage.getItem("cart_items")) || [];
}

export function addToCart(product) {
  const cart = getCart();

  const normalized = {
    id: product.id,
    name: product.nombre,                 
    price: Number(product.precio),        
    image: product.image || null,
    quantity: 1
  };

  const existing = cart.find(item => item.id === normalized.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(normalized);
  }

  localStorage.setItem("cart_items", JSON.stringify(cart));
}

export function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  localStorage.setItem("cart_items", JSON.stringify(cart));
}