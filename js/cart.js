const CART_KEY = 'goalzone_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
  window.dispatchEvent(new CustomEvent('cartUpdated'));
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCount() {
  const el = document.getElementById('cartCount');
  if (el) el.textContent = getCartCount();
}

function addToCart(productId, size) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();
  const key = `${productId}-${size}`;
  const existing = cart.find(item => item.key === key);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      productId: product.id,
      size,
      qty: 1,
      price: getDisplayPrice(product)
    });
  }

  saveCart(cart);
}

function updateQty(key, delta) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(key);
  } else {
    saveCart(cart);
  }
}

function removeFromCart(key) {
  saveCart(getCart().filter(i => i.key !== key));
}

function clearCart() {
  saveCart([]);
}

function getCartSubtotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getShipping(subtotal) {
  return subtotal >= 75 ? 0 : subtotal > 0 ? 5.99 : 0;
}

function getDiscount(subtotal, promoApplied) {
  if (!promoApplied || subtotal === 0) return 0;
  return subtotal * 0.15;
}

function getCartTotal(subtotal, shipping, discount) {
  return Math.max(0, subtotal + shipping - discount);
}
