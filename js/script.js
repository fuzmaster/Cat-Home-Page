document.addEventListener("DOMContentLoaded", function() {
    let catCards = document.querySelectorAll('.cat-card');
    catCards.forEach(function(card) {
        card.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#b3d9b3'; // Light greenish color
        });
        card.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';
        });
    });
});
