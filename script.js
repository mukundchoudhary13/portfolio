// JavaScript for Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
});

// JavaScript for Modal Popup
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("projectModal");
    const closeButton = document.querySelector(".modal .close");

    // Open Modal Function
    function openModal() {
        modal.style.display = "block";
    }

    // Close Modal Function
    function closeModal() {
        modal.style.display = "none";
    }

    // Event Listeners
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Optional: Attach openModal function to a button or other elements if needed
});
