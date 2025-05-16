document.addEventListener('DOMContentLoaded', function() {
    // Get all checkboxes in recipe ingredients
    const checkboxes = document.querySelectorAll('.post-content input[type="checkbox"]');
    
    // Load saved states from localStorage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === 'true') {
            checkbox.checked = true;
        }
    });

    // Add event listeners to save state when changed
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            localStorage.setItem(checkbox.id, this.checked);
        });
    });
}); 
