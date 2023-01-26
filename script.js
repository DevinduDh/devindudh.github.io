// Get all project cards
const projectCards = document.querySelectorAll(".project-card");

// Add event listener to each project card
projectCards.forEach(card => {
    card.addEventListener("mouseover", function() {
        // Add a class to change background color on hover
        this.classList.add("hover");
    });
    card.addEventListener("mouseout", function() {
        // Remove the class to change back to original color
        this.classList.remove("hover");
    });
});
