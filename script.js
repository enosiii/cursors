// Get the elements
const cursorSelect = document.getElementById('cursorSelect');
const applyBtn = document.getElementById('applyBtn');

// Function to change the cursor based on selection
function changeCursor(cursorId) {
    const cursorFile = cursorId + '_pointer.ani';  // Get the pointer file
    const cursorPath = `assets/${cursorFile}`;
    document.body.style.cursor = `url(${cursorPath}), auto`;
}

// Apply the cursor change when the button is clicked
applyBtn.addEventListener('click', () => {
    const selectedCursor = cursorSelect.value;
    changeCursor(selectedCursor);
});

// Set default cursor on page load (cursor 1)
window.onload = () => {
    changeCursor(1);
};
