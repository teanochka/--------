document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.image-carousel');
    const arrowLefts = document.querySelectorAll('.arrow-left');
    const arrowRights = document.querySelectorAll('.arrow-right');

    carousels.forEach((carousel, index) => {
        const items = Array.from(carousel.children);
        let currentIndex = 0;
        const totalItems = items.length;
        const visibleItemsCount = getComputedStyle(carousel).gridTemplateColumns.split(' ').length;

        function updateCarousel() {
            items.forEach((item, i) => {
                item.style.order = (i - currentIndex + totalItems) % totalItems;
            });
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        function showPrevious() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        }

        updateCarousel();

        arrowLefts[index].addEventListener('click', showPrevious);
        arrowRights[index].addEventListener('click', showNext);
    });
});
