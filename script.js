document.getElementById('closeTabButton').addEventListener('click', function() {
    try {
        window.open('', '_self').close();
        document.getElementById('message').textContent = 'If the tab did not close, please close it manually.';
    } catch (e) {
        document.getElementById('message').textContent = 'Unable to close the tab automatically. Please close it manually.';
    }
});
