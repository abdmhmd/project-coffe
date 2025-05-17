document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // إزالة النشط من جميع الأزرار
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            // إضافة النشط للزر المحدد
            this.classList.add('active');
            
            // إخفاء جميع التصنيفات
            document.querySelectorAll('.items-category').forEach(cat => {
                cat.classList.remove('active');
            });
            
            // إظهار التصنيف المحدد
            const categoryId = this.getAttribute('data-category') + '-items';
            document.getElementById(categoryId).classList.add('active');
        });
    });
});