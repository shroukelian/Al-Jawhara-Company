// main.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.main-nav-wrapper');
    const navLinks = document.querySelectorAll('.main-nav-wrapper nav ul li a');

    // وظيفة فتح/إغلاق القائمة
    function toggleMenu() {
        navWrapper.classList.toggle('open');
        hamburger.classList.toggle('open');
    }

    // الاستماع لزر الهامبرغر
    hamburger.addEventListener('click', toggleMenu);

    // إغلاق القائمة عند النقر على أي رابط (للتنقل إلى القسم المطلوب)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navWrapper.classList.contains('open')) {
                toggleMenu(); // إغلاق القائمة بعد النقر على الرابط
            }
        });
    });
});

// وظيفة لعرض السنة الحالية في الفوتر (موجودة في الـ HTML)
document.getElementById('current-year').textContent = new Date().getFullYear();