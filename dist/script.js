// categories filter
document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const itemList = document.querySelectorAll(".item");

  // Tampilkan semua item saat memilih kategori 'All'
  document
    .querySelector('.category-btn[data-category="all"]')
    .classList.add("active");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Tampilkan tombol kategori yang aktif dan sembunyikan yang lain
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Tampilkan item berdasarkan kategori yang dipilih
      itemList.forEach((item) => {
        if (category === "all" || item.classList.contains(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
