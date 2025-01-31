
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('click', () => {
        const categoryName = category.getAttribute('data-category');
        
        const params = new URLSearchParams();
        params.append('category', categoryName);
        
        
        const newUrl = `./content/pages/category.html?${params.toString()}`;
        
        window.location.href = newUrl;
    });
});

