const stickyDiv = document.getElementById('stickyDiv');
const mainContent = document.getElementById('mainContent');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        stickyDiv.style.position = 'fixed';
        stickyDiv.style.top = '0';
        stickyDiv.style.left = '0';
        stickyDiv.style.transform = 'none'; /* Reset centering */
        mainContent.classList.add('shifted'); /* Shift content */
    } else {
        // Reset sticky div to the center
        stickyDiv.style.position = 'absolute';
        stickyDiv.style.top = '0';
        stickyDiv.style.left = '50%';
        stickyDiv.style.transform = 'translateX(-50%)'; /* Center again */
        mainContent.classList.remove('shifted'); /* Reset content position */
    }
    })