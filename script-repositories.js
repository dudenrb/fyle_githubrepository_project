document.addEventListener('DOMContentLoaded', function () {
    // Get the username from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (!username) {
        alert('Invalid request. Please provide a valid username.');
        window.location.href = 'index.html';
    }

    document.getElementById('username').innerText = username;

    const repositoriesContainer = document.getElementById('repositories');

    // Fake repositories for demonstration purposes
    const fakeRepositories = [
        { name: 'FakeRepo1', html_url: 'https://github.com/dudenrb/FakeRepo1' },
        { name: 'FakeRepo2', html_url: 'https://github.com/dudenrb/FakeRepo2' },
        { name: 'FakeRepo3', html_url: 'https://github.com/dudenrb/FakeRepo3' },
    ];

    if (fakeRepositories.length === 0) {
        repositoriesContainer.innerHTML = '<p>No repositories found for this user.</p>';
    } else {
        const ul = document.createElement('ul');
        ul.className = 'list-group';

        fakeRepositories.forEach(function (repo) {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
            ul.appendChild(li);
        });

        repositoriesContainer.appendChild(ul);
    }
});
