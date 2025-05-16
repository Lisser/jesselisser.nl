document.addEventListener('DOMContentLoaded', function() {
    // Get all checkboxes in recipe ingredients
    const checkboxes = document.querySelectorAll('.recipe-ingredients input[type="checkbox"]');
    
    // Load saved states from localStorage
    checkboxes.forEach((checkbox, index) => {
        const recipeId = window.location.pathname;
        const checkboxId = `${recipeId}-ingredient-${index}`;
        checkbox.id = checkboxId;
        
        const savedState = localStorage.getItem(checkboxId);
        if (savedState === 'true') {
            checkbox.checked = true;
        }
    });

    // Add event listeners to save state when changed
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            const recipeId = window.location.pathname;
            const checkboxId = `${recipeId}-ingredient-${index}`;
            localStorage.setItem(checkboxId, this.checked);
        });
    });
}); 
