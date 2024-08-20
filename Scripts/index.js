import { renderCartItemsSummary,renderProductSummary } from './Controllers/productController.js';
import { setupCartEventListeners } from './Controllers/cartController.js';
import './Controllers/sidebarController.js';

document.addEventListener('DOMContentLoaded', () => {
    renderCartItemsSummary();
    setupCartEventListeners();
    renderProductSummary();
});