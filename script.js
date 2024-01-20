function getRepositories() {
    const username = document.getElementById('username').value;

    if (!username) {
        alert('Please enter a valid username.');
        return;
    }

    // Redirect to repositories page with the fake repositories for demonstration
    window.location.href = `repositories.html?username=${username}`;
}
