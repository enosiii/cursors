// Get the elements
const cursorSelect = document.getElementById('cursorSelect');
const applyBtn = document.getElementById('applyBtn');

// Function to change both pointer and cursor
function changePointerAndCursor(styleId) {
    const pointerImage = `assets/cursors/${styleId}_cursor.png`; // Pointer image
    const cursorImage = `assets/cursors/${styleId}_pointer.gif`;  // Cursor image
    
    // Update cursor style
    document.body.style.cursor = `url(${cursorImage}), auto`;

    // Update background to show the pointer style (for visual purposes)
    document.body.style.backgroundImage = `url(${pointerImage})`;
}

// Apply the change when the button is clicked
applyBtn.addEventListener('click', () => {
    const selectedStyle = cursorSelect.value;
    changePointerAndCursor(selectedStyle);
});

// Set default cursor and pointer on page load (style 1)
window.onload = () => {
    changePointerAndCursor(1);
};
