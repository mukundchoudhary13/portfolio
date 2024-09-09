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




  // Get modal element
  var modal = document.getElementById("buy-coffee-modal");

  // Get button that opens the modal
  var btn = document.getElementById("buy-coffee-button");

  // Get <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
    // Add click animation effect (optional)
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 500);
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }