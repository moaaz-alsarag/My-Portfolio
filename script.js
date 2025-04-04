// تعريف المتغيرات
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

// عند الضغط على أيقونة القائمة، يتم إظهار أو إخفاء القائمة
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
