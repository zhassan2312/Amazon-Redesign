import { toggleSidebar, toggleCategories } from '../Views/sidebarView.js';

document.getElementById('sidebarToggleBtn').addEventListener('click', toggleSidebar);
document.querySelectorAll('.categoryToggleBtn').forEach((button) => {
    button.addEventListener('click', () => {
        const categoryId = button.dataset.categoryId;
        toggleCategories(categoryId);
    });
});