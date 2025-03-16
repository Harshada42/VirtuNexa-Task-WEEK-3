// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Accordion Functionality
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;

        // Toggle visibility
        if (content.style.display === "block") {
            content.style.display = "none";
            this.querySelector("i").style.transform = "rotate(0deg)"; // Reset icon rotation
        } else {
            // Close other open accordion sections
            document.querySelectorAll(".accordion-content").forEach((item) => {
                item.style.display = "none";
            });

            document.querySelectorAll(".accordion-button i").forEach((icon) => {
                icon.style.transform = "rotate(0deg)"; // Reset icons
            });

            // Open clicked section
            content.style.display = "block";
            this.querySelector("i").style.transform = "rotate(180deg)"; // Rotate icon
        }
    });
});


