function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('toast--show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove('toast--show'), 2500);
}

function renderProductCard(product, options = {}) {
  const price = getDisplayPrice(product);
  const priceHtml = product.salePrice
    ? `<span class="product-card__price"><s>${formatPrice(product.price)}</s>${formatPrice(price)}</span>`
    : `<span class="product-card__price">${formatPrice(price)}</span>`;

  const badge = product.badge ? `<span class="product-card__badge">${product.badge}</span>` : '';

  return `
    <article class="product-card" data-id="${product.id}" ${options.clickable !== false ? 'role="button" tabindex="0"' : ''}>
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name} — ${product.team}" loading="lazy">
        ${badge}
      </div>
      <div class="product-card__body">
        <p class="product-card__team">${product.team}</p>
        <h3 class="product-card__name">${product.name}</h3>
        <div class="product-card__footer">
          ${priceHtml}
          <button class="product-card__add" data-add="${product.id}" aria-label="Add to cart">+</button>
        </div>
      </div>
    </article>
  `;
}

function bindProductCards(container, onQuickAdd, onOpen) {
  if (!container) return;

  container.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add]');
    if (addBtn) {
      e.stopPropagation();
      const id = Number(addBtn.dataset.add);
      const product = getProductById(id);
      if (product && onQuickAdd) onQuickAdd(product);
      return;
    }

    const card = e.target.closest('.product-card');
    if (card && onOpen) {
      onOpen(Number(card.dataset.id));
    }
  });

  container.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const card = e.target.closest('.product-card');
    if (card && onOpen) onOpen(Number(card.dataset.id));
  });
}

function quickAddProduct(product) {
  const size = product.sizes[Math.floor(product.sizes.length / 2)] || product.sizes[0];
  addToCart(product.id, size);
  showToast(`Added ${product.name} (${size}) to cart`);
}

function initHeader() {
  updateCartCount();

  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => nav.classList.toggle('nav--open'));
  }

  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const searchInput = document.getElementById('searchInput');

  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
      searchBar.classList.toggle('search-bar--open');
      if (searchBar.classList.contains('search-bar--open') && searchInput) {
        searchInput.focus();
      }
    });
  }

  if (searchInput && !document.getElementById('productGrid')) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        window.location.href = `shop.html?q=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }
}

function initFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;

  const featured = PRODUCTS.filter(p => p.featured).slice(0, 8);
  container.innerHTML = featured.map(p => renderProductCard(p)).join('');

  bindProductCards(container, quickAddProduct, (id) => {
    window.location.href = `shop.html?id=${id}`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFeaturedProducts();
});

window.addEventListener('cartUpdated', updateCartCount);
