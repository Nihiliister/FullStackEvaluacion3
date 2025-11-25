
const CART_KEY = "cart_items";

// Obtener carrito completo
export function getCart() {
    try {
        const cart = JSON.parse(localStorage.getItem(CART_KEY));
        return cart || [];
    } catch (e) {
        console.error("Error leyendo carrito:", e);
        return [];
    }
}

// Guardar carrito actualizado
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Agregar producto al carrito
export function addToCart(product) {
    const cart = getCart();

    // Normalización para productos que usan otros nombres
    const normalized = {
        id: product.id,
        name: product.name || product.titulo,
        price: product.price || product.costo,
        image: product.image || product.img,
        quantity: 1
    };

    const existing = cart.find((item) => item.id === normalized.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push(normalized);
    }

    saveCart(cart);
}

// Eliminar producto del carrito
export function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter((item) => item.id !== productId);
    saveCart(cart);
}

// Vaciar el carrito
export function clearCart() {
    localStorage.removeItem(CART_KEY);
}