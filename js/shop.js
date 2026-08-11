function openProductModal(product) {
  const modal = document.getElementById('productModal');
  const body = document.getElementById('modalBody');
  if (!modal || !body) return;

  const price = getDisplayPrice(product);
  const priceHtml = product.salePrice
    ? `<p class="modal-product__price"><s>${formatPrice(product.price)}</s> ${formatPrice(price)}</p>`
    : `<p class="modal-product__price">${formatPrice(price)}</p>`;

  let selectedSize = product.sizes[0];

  body.innerHTML = `
    <div class="modal-product">
      <div class="modal-product__image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="modal-product__info">
        <p class="modal-product__team">${product.team}</p>
        <h2 class="modal-product__name" id="modalTitle">${product.name}</h2>
        ${priceHtml}
        <p class="modal-product__desc">${product.description}</p>
        <div class="size-picker">
          <label>Size</label>
          <div class="size-options" id="sizeOptions">
            ${product.sizes.map((s, i) =>
              `<button type="button" class="size-option${i === 0 ? ' size-option--active' : ''}" data-size="${s}">${s}</button>`
            ).join('')}
          </div>
        </div>
        <div class="modal-product__actions">
          <button class="btn btn--primary" id="modalAddBtn">Add to Cart</button>
        </div>
      </div>
    </div>
  `;

  body.querySelector('#sizeOptions').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-size]');
    if (!btn) return;
    selectedSize = btn.dataset.size;
    body.querySelectorAll('.size-option').forEach(b => b.classList.remove('size-option--active'));
    btn.classList.add('size-option--active');
  });

  body.querySelector('#modalAddBtn').addEventListener('click', () => {
    addToCart(product.id, selectedSize);
    showToast(`Added ${product.name} (${selectedSize}) to cart`);
    closeModal();
  });

  modal.classList.add('modal--open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.classList.remove('modal--open');
  modal.setAttribute('aria-hidden', 'true');
}

function getFiltersFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return {
    category: params.get('cat') || '',
    team: params.get('team') || '',
    query: params.get('q') || '',
    productId: params.get('id') || ''
  };
}

function applyFilters(products, filters) {
  let result = [...products];

  if (filters.category) {
    result = result.filter(p => p.category === filters.category);
  }

  if (filters.team) {
    result = result.filter(p => p.team === filters.team);
  }

  if (filters.query) {
    const q = filters.query.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.team.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  const priceRange = document.querySelector('input[name="price"]:checked')?.value;
  if (priceRange) {
    const [min, max] = priceRange.split('-').map(Number);
    result = result.filter(p => {
      const price = getDisplayPrice(p);
      return price >= min && price <= max;
    });
  }

  const sort = document.getElementById('sortFilter')?.value || 'featured';
  switch (sort) {
    case 'price-asc':
      result.sort((a, b) => getDisplayPrice(a) - getDisplayPrice(b));
      break;
    case 'price-desc':
      result.sort((a, b) => getDisplayPrice(b) - getDisplayPrice(a));
      break;
    case 'name':
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return result;
}

function renderShopProducts(products) {
  const grid = document.getElementById('productGrid');
  const empty = document.getElementById('emptyState');
  const count = document.getElementById('resultsCount');
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.hidden = false;
  } else {
    grid.innerHTML = products.map(p => renderProductCard(p)).join('');
    if (empty) empty.hidden = true;
  }

  if (count) {
    count.textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;
  }
}

function syncFiltersFromUrl() {
  const { category, team, query } = getFiltersFromUrl();

  if (category) {
    const radio = document.querySelector(`input[name="category"][value="${category}"]`);
    if (radio) radio.checked = true;
  }

  const teamSelect = document.getElementById('teamFilter');
  if (teamSelect && team) teamSelect.value = team;

  const searchInput = document.getElementById('searchInput');
  if (searchInput && query) searchInput.value = query;
}

function refreshShop() {
  const category = document.querySelector('input[name="category"]:checked')?.value || '';
  const team = document.getElementById('teamFilter')?.value || '';
  const query = document.getElementById('searchInput')?.value.trim() || '';

  const filters = { category, team, query };
  const products = applyFilters(PRODUCTS, filters);
  renderShopProducts(products);
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const teamSelect = document.getElementById('teamFilter');
  if (teamSelect) {
    teamSelect.innerHTML = '<option value="">All teams</option>' +
      getTeams().map(t => `<option value="${t}">${t}</option>`).join('');
  }

  syncFiltersFromUrl();
  refreshShop();

  bindProductCards(grid, quickAddProduct, (id) => {
    const product = getProductById(id);
    if (product) openProductModal(product);
  });

  document.querySelectorAll('input[name="category"], input[name="price"]').forEach(el => {
    el.addEventListener('change', refreshShop);
  });

  document.getElementById('teamFilter')?.addEventListener('change', refreshShop);
  document.getElementById('sortFilter')?.addEventListener('change', refreshShop);

  document.getElementById('clearFilters')?.addEventListener('click', () => {
    document.querySelector('input[name="category"][value=""]').checked = true;
    document.querySelector('input[name="price"][value=""]').checked = true;
    if (teamSelect) teamSelect.value = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    document.getElementById('sortFilter').value = 'featured';
    refreshShop();
  });

  document.getElementById('filtersToggle')?.addEventListener('click', () => {
    document.getElementById('filtersPanel')?.classList.toggle('filters--open');
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(refreshShop, 250);
    });
  }

  document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const { productId } = getFiltersFromUrl();
  if (productId) {
    const product = getProductById(Number(productId));
    if (product) setTimeout(() => openProductModal(product), 300);
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    link.classList.remove('nav__link--active');
    if (currentUrl.includes(link.getAttribute('href'))) {
      link.classList.add('nav__link--active');
    }
  });
});