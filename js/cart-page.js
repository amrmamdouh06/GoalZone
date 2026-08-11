let promoApplied = false;

function renderCartPage() {
  const cart = getCart();
  const itemsEl = document.getElementById('cartItems');
  const layoutEl = document.getElementById('cartLayout');
  const emptyEl = document.getElementById('emptyCart');

  if (cart.length === 0) {
    if (layoutEl) layoutEl.hidden = true;
    if (emptyEl) emptyEl.hidden = false;
    return;
  }

  if (layoutEl) layoutEl.hidden = false;
  if (emptyEl) emptyEl.hidden = true;

  itemsEl.innerHTML = cart.map(item => {
    const product = getProductById(item.productId);
    if (!product) return '';

    return `
      <article class="cart-item" data-key="${item.key}">
        <div class="cart-item__image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="cart-item__details">
          <h3 class="cart-item__name">${product.name}</h3>
          <p class="cart-item__meta">${product.team} · Size ${item.size}</p>
          <div class="qty-control">
            <button type="button" data-qty="-1" aria-label="Decrease">−</button>
            <span>${item.qty}</span>
            <button type="button" data-qty="1" aria-label="Increase">+</button>
          </div>
        </div>
        <div class="cart-item__right">
          <p class="cart-item__price">${formatPrice(item.price * item.qty)}</p>
          <button type="button" class="cart-item__remove" data-remove>Remove</button>
        </div>
      </article>
    `;
  }).join('');

  updateSummary();
}

function updateSummary() {
  const subtotal = getCartSubtotal();
  const shipping = getShipping(subtotal);
  const discount = getDiscount(subtotal, promoApplied);
  const total = getCartTotal(subtotal, shipping, discount);

  document.getElementById('subtotal').textContent = formatPrice(subtotal);
  document.getElementById('shipping').textContent = shipping === 0 && subtotal > 0 ? 'Free' : formatPrice(shipping);
  document.getElementById('total').textContent = formatPrice(total);

  const discountRow = document.getElementById('discountRow');
  if (discount > 0) {
    discountRow.hidden = false;
    document.getElementById('discount').textContent = `-${formatPrice(discount)}`;
  } else {
    discountRow.hidden = true;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('cartItems')) return;

  renderCartPage();

  document.getElementById('cartItems')?.addEventListener('click', (e) => {
    const item = e.target.closest('.cart-item');
    if (!item) return;
    const key = item.dataset.key;

    if (e.target.closest('[data-remove]')) {
      removeFromCart(key);
      renderCartPage();
      showToast('Item removed from cart');
      return;
    }

    const qtyBtn = e.target.closest('[data-qty]');
    if (qtyBtn) {
      updateQty(key, Number(qtyBtn.dataset.qty));
      renderCartPage();
    }
  });

  document.getElementById('applyPromo')?.addEventListener('click', () => {
    const code = document.getElementById('promoCode').value.trim().toUpperCase();
    const hint = document.getElementById('promoHint');

    if (code === 'KICKOFF15') {
      promoApplied = true;
      hint.textContent = '15% discount applied!';
      updateSummary();
    } else {
      promoApplied = false;
      hint.textContent = 'Invalid promo code.';
      hint.style.color = 'var(--danger)';
      updateSummary();
    }
  });

  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
      modal.classList.add('modal--open');
      modal.setAttribute('aria-hidden', 'false');
      clearCart();
      renderCartPage();
    }
  });

  document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', () => {
      const modal = document.getElementById('checkoutModal');
      if (modal) {
        modal.classList.remove('modal--open');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  });
});

window.addEventListener('cartUpdated', () => {
  if (document.getElementById('cartItems')) renderCartPage();
});
